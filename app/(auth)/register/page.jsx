import Register from "@/components/Register/Register";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  // const session = await getServerSession();

  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
