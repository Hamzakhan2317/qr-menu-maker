"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "../ui/LogoutButton";


const Dashboard = () => {
  const { data: session } = useSession();
  console.log("session>>>>", session)

  return (
    <div>
      <h1>welcome to Dashboard</h1>
      <p>Welcome, {session?.user?.email}</p>

      {/* Render your protected data here */}
      <LogoutButton label="logout"/>
    </div>
  );
};

export default Dashboard;
