import connectDB from "@/db/mongodb";
import Menu from "@/models/menu.model";
import { NextResponse } from "next/server";

// GET: Fetch a specific menu by ID
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { menuId } = params; // Extract menuId from the dynamic route
    if (!menuId) {
      return NextResponse.json(
        { message: "Menu ID is required" },
        { status: 400 }
      );
    }

    const menu = await Menu.findById(menuId);
    if (!menu) {
      return NextResponse.json({ message: "Menu not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Menu fetched successfully", data: menu },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to fetch menu" },
      { status: 500 }
    );
  }
}
