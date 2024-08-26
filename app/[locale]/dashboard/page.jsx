// import { fetchAllSavedNotesByUserId } from "@/services/noteServices";
// import { fetchUserByEmail } from "@/services/userServices";
import Dashboard from "@/components/Dashboard/Dashboard";

export default async function page() {

  //   const currentUser = await fetchUserByEmail(session?.user?.email);
  //   const data = await fetchAllSavedNotesByUserId(currentUser?.user?._id);
  return (
    <>
      <Dashboard />
    </>
  );
}
