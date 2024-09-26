import connectDB from "@/db/mongodb";
import Restaurent from "@/models/restaurent.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    owner: userId,
    name: restaurantName,
    address: resAddress,
  } = await req.json();
  try {
    await connectDB();
    if (![userId, restaurantName].every(Boolean))
      return NextResponse.json(
        { message: "Please fill all inputs!" },
        { status: 400 }
      );

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const newRestaurent = new Restaurent({
      name: restaurantName,
      address: resAddress ? resAddress : "",
      owner: userId,
    });

    const savedRestaurent = await newRestaurent.save();

    if (!savedRestaurent) {
      return NextResponse.json(
        { message: "Failed to create Restaurent" },
        { status: 400 }
      );
    }
    user.restaurants.push(savedRestaurent._id);
    await user.save();
    return NextResponse.json(
      { message: "Restaurent Created successfully" },
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
  // Your code
  try {
    await connectDB();

    // Extract the userId from the query string
    const userId = req.nextUrl.searchParams.get("userId");
    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }
    // const restaurants = await Restaurant.find({ owner: req.params.userId }).populate('menus');
    const restaurants = await Restaurent.find({ owner: userId });
    // res.status(200).json({ restaurants });
    console.log("restaurants>>>>", restaurants);

    return NextResponse.json(
      { message: "Restaurent fetching successfully", data: restaurants },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 }
    );
  }
}

// Get restaurant by ID
export async function GET_RESTAURANT_BY_ID(req) {
  try {
    await connectDB();

    const restaurantId = req.nextUrl.searchParams.get("restaurantId");
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

// Get all restaurants for a user
// exports.getUserRestaurants = async (req, res) => {
//   try {
//     const restaurants = await Restaurant.find({ user: req.params.userId }).populate('menus');
//     res.status(200).json({ restaurants });
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching restaurants' });
//   }
// };

// Update a restaurant
// exports.updateRestaurant = async (req, res) => {
//   try {
//     const restaurant = await Restaurant.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true });
//     if (!restaurant) {
//       return res.status(404).json({ error: 'Restaurant not found' });
//     }
//     res.status(200).json({ message: 'Restaurant updated', restaurant });
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating restaurant' });
//   }
// };

// Delete a restaurant
// exports.deleteRestaurant = async (req, res) => {
//   try {
//     const restaurant = await Restaurant.findByIdAndDelete(req.params.restaurantId);
//     if (!restaurant) {
//       return res.status(404).json({ error: 'Restaurant not found' });
//     }
//     res.status(200).json({ message: 'Restaurant deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting restaurant' });
//   }
// };
