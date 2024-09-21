import connectDB from "@/db/mongodb";
import Menu from "@/models/menu.model";
import Section from "@/models/section.model";
import Item from "@/models/item.model";

import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Request received Section"); // Added log
  // return NextResponse.json({ message:"Restaurent Created successfully" }, { status: 201 });

  const { name, description, note, menuId } = await req.json();
  try {
    await connectDB();
    if (![name, description, note, menuId].every(Boolean))
      return NextResponse.json(
        { message: "Please fill all inputs!" },
        { status: 400 }
      );

    const menu = await Menu.findById(menuId);
    if (!menu) {
      return NextResponse.json({ message: "Menu not found" }, { status: 404 });
    }

    const section = new Section({
      name,
      description,
      note,
      menu: menuId,
    });
    await section.save();

    menu.sections.push(section._id);
    await menu.save();
    return NextResponse.json(
      { message: "Section Created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    // Extract the menuId from the query string
    const menuId = req.nextUrl.searchParams.get("menuId");
    console.log("menuId>>>>>>>", menuId)

    if (!menuId) {
      return NextResponse.json(
        { message: "Menu ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const sections = await Section.find({ menu: menuId }).populate("items");


console.log("sections>>>>>>>>>>>>>>>>>>>>>", sections)

    return NextResponse.json(
      { message: "Sections fetched successfully", data: sections },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to fetch restaurants" },
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
