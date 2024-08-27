"use client";

import { useRouter } from "@/navigation";
import { signOut, useSession } from "next-auth/react";


const Dashboard = () => {
  const { data: session } = useSession();
  console.log("session>>>>", session)
  const router = useRouter();
  const logout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };


  return (
    <div>
      <h1>welcome to Dashboard</h1>
      <p>Welcome, {session?.user?.email}</p>

      {/* Render your protected data here */}
      <button
        className="bg-red-600 mx-2 px-2 my-2 rounded-md text-white"
        onClick={logout}
      >
        logout      </button>    </div>
  );
};

export default Dashboard;
