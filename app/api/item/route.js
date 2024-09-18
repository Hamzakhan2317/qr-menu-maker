import connectDB from "@/db/mongodb";
import Item from "@/models/item.model";
import Menu from "@/models/menu.model";
import Restaurant from "@/models/restaurent.model";
import Section from "@/models/section.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Request received menu"); // Added log
  // return NextResponse.json({ message:"Restaurent Created successfully" }, { status: 201 });

  const { name, description, price, sectionId } = await req.json();
  try {
    await connectDB();
    if (![name, description, price, sectionId].every(Boolean))
      return NextResponse.json(
        { message: "Please fill all inputs!" },
        { status: 400 }
      );

    const section = await Section.findById(sectionId);
    if (!section) {
      return NextResponse.json({ message: "Section not found" }, { status: 404 });
    }

    const item = new Item({ name, description, price, menu: sectionId });
    await item.save();

    section.menus.push(item._id);
    await section.save();
    return NextResponse.json(
      { message: "Item Created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 }
    );
  }
}







// // Get all items for a menu
// exports.getItemsForMenu = async (req, res) => {
//     try {
//       const items = await Item.find({ menu: req.params.menuId });
//       res.status(200).json({ items });
//     } catch (error) {
//       res.status(500).json({ error: 'Error fetching items' });
//     }
//   };
  
//   // Update an item
//   exports.updateItem = async (req, res) => {
//     try {
//       const item = await Item.findByIdAndUpdate(req.params.itemId, req.body, { new: true });
//       if (!item) {
//         return res.status(404).json({ error: 'Item not found' });
//       }
//       res.status(200).json({ message: 'Item updated', item });
//     } catch (error) {
//       res.status(500).json({ error: 'Error updating item' });
//     }
//   };
  
//   // Delete an item
//   exports.deleteItem = async (req, res) => {
//     try {
//       const item = await Item.findByIdAndDelete(req.params.itemId);
//       if (!item) {
//         return res.status(404).json({ error: 'Item not found' });
//       }
//       res.status(200).json({ message: 'Item deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Error deleting item' });
//     }
//   };
