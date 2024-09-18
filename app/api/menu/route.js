import connectDB from "@/db/mongodb";
import Menu from "@/models/menu.model";
import Restaurant from "@/models/restaurent.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Request received menu"); // Added log
  // return NextResponse.json({ message:"Restaurent Created successfully" }, { status: 201 });

  const { name, restaurantId } = await req.json();
  try {
    await connectDB();
    if (![name, restaurantId].every(Boolean))
      return NextResponse.json(
        { message: "Please fill all inputs!" },
        { status: 400 }
      );
 
      const restaurant = await Restaurant.findById(restaurantId);
      if (!restaurant) {
        return NextResponse.json(
            { message: "Restaurant not found" },
            { status: 404 }
          );
      }
  
      const menu = new Menu({ name, restaurant: restaurantId });
      await menu.save();
  
      restaurant.menus.push(menu._id);
      await restaurant.save();
    return NextResponse.json({ message:"Menu Created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 }
    );
  }
}



// // Get all menus for a restaurant
// exports.getMenusForRestaurant = async (req, res) => {
//     try {
//       const menus = await Menu.find({ restaurant: req.params.restaurantId }).populate('items');
//       res.status(200).json({ menus });
//     } catch (error) {
//       res.status(500).json({ error: 'Error fetching menus' });
//     }
//   };
  
//   // Update a menu
//   exports.updateMenu = async (req, res) => {
//     try {
//       const menu = await Menu.findByIdAndUpdate(req.params.menuId, req.body, { new: true });
//       if (!menu) {
//         return res.status(404).json({ error: 'Menu not found' });
//       }
//       res.status(200).json({ message: 'Menu updated', menu });
//     } catch (error) {
//       res.status(500).json({ error: 'Error updating menu' });
//     }
//   };
  
//   // Delete a menu
//   exports.deleteMenu = async (req, res) => {
//     try {
//       const menu = await Menu.findByIdAndDelete(req.params.menuId);
//       if (!menu) {
//         return res.status(404).json({ error: 'Menu not found' });
//       }
//       res.status(200).json({ message: 'Menu deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Error deleting menu' });
//     }
//   };
