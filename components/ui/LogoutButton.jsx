"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


const LogoutButton = ({ label }) => {
    const router = useRouter();

  const logout = () => {
    signOut();
    router.replace("/login");
};

  return (
    <button
      className="bg-red-600 mx-2 px-2 my-2 rounded-md text-white"
      onClick={logout}
    >
      {label}
    </button>
  );
};

export default LogoutButton;
