import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Signin from "@/components/Signin/Signin";

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SigninPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("Session>>>>", session)

  return (
    <>
      {session ? (
        redirect("/dashboard")
      ) : (
        <>
          <Signin />
        </>
      )}
    </>
  );
};

export default SigninPage;
