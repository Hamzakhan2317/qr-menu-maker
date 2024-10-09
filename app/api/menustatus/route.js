import connectDB from "@/db/mongodb";
import Menu from "@/models/menu.model";
import Restaurant from "@/models/restaurent.model";
import { NextResponse } from "next/server";

// Update a menu
export async function PUT(req) {
  console.log("Request received to update menu"); // Added log

  const { status, menuId, restaurantId } = await req.json();

  try {
    await connectDB();

    if (![status, menuId, restaurantId].every(Boolean)) {
      return NextResponse.json({ message: "Status is required 0/1" }, { status: 400 });
    }

    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return NextResponse.json({ message: "Restaurant not found" }, { status: 404 });
    }

    const menu = await Menu.findByIdAndUpdate(
      menuId,
      { status, restaurant: restaurantId },
      { new: true },
    );

    if (!menu) {
      return NextResponse.json({ message: "Menu not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Status updated successfully", menu }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error?.message || "Error updating menu" }, { status: 500 });
  }
}
