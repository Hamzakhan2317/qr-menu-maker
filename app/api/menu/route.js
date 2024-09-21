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
    return NextResponse.json(
      { message: "Menu Created successfully", menuId: menu?._id },
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
    // Extract the userId from the query string
    const restaurantId = req.nextUrl.searchParams.get("restaurantId");

    // Check if restaurantId is present, if not return 400 response
    if (!restaurantId) {
      return NextResponse.json(
        { message: "Restaurant ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const menus = await Menu.find({ restaurant: restaurantId });

    return NextResponse.json(
      { message: "Menu fetched successfully", data: menus },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to fetch restaurants" },
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

// Delete a menu
export async function DELETE(req) {
  try {
    const menuId = req.nextUrl.searchParams.get("menuId");

    // Validate menuId presence
    if (!menuId) {
      return NextResponse.json(
        { error: "Menu ID is required." },
        { status: 400 }
      );
    }
    await Menu.findByIdAndDelete(menuId);

    return NextResponse.json(
      { message: "Menu deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting menu:", error); // Log the error for debugging
    return NextResponse.json(
      { error: "Error deleting menu." },
      { status: 500 }
    );
  }
}
