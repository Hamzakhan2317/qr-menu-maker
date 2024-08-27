import Signin from "@/components/Signin/Signin";


const SigninPage = async () => {
  // const session = await getServerSession(authOptions);
  // console.log("Session>>>>", session)

  return (
    <>
      {/* {session ? (
        redirect("/dashboard")
      ) : ( */}
      <>
        <Signin />
      </>
      {/* )} */}
    </>
  );
};

export default SigninPage;
