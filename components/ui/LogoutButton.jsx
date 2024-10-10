"use client";

import { useRouter } from "@/navigation";
import { signOut } from "next-auth/react";

const LogoutButton = ({ label }) => {
  const router = useRouter();

  const logout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <button className="bg-red-600 mx-2 px-2 my-2 rounded-md text-white" onClick={logout}>
      {label}
    </button>
  );
};

export default LogoutButton;
