import connectDB from "@/db/mongodb";
import Restaurent from "@/models/restaurent.model";
import { NextResponse } from "next/server";

// GET: Fetch a specific restaurant by ID
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { restaurantId } = params; // Access dynamic route parameter
    if (!restaurantId) {
      return NextResponse.json(
        { message: "Restaurant ID is required" },
        { status: 400 }
      );
    }

    const restaurant = await Restaurent.findById(restaurantId);
    if (!restaurant) {
      return NextResponse.json(
        { message: "Restaurant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Restaurant fetched successfully", data: restaurant },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to fetch restaurant" },
      { status: 500 }
    );
  }
}

// PUT: Update a specific restaurant by ID
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { restaurantId } = params;
    const updateData = await req.json();

    const updatedRestaurant = await Restaurent.findByIdAndUpdate(
      restaurantId,
      updateData,
      { new: true }
    );
    if (!updatedRestaurant) {
      return NextResponse.json(
        { message: "Restaurant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Restaurant updated successfully", data: updatedRestaurant },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to update restaurant" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a specific restaurant by ID
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { restaurantId } = params;

    const deletedRestaurant = await Restaurent.findByIdAndDelete(restaurantId);
    if (!deletedRestaurant) {
      return NextResponse.json(
        { message: "Restaurant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Restaurant deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to delete restaurant" },
      { status: 500 }
    );
  }
}
