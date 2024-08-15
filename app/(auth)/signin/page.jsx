import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SigninPage = async () => {
  const session = await getServerSession();
  

  return (
    <>
      {session ? (
        redirect("/")
      ) : (
        <>
          <div className="mt-3">Signin</div>
        </>
      )}
    </>
  );
};

export default SigninPage;
