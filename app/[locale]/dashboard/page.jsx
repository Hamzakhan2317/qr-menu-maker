import Sidebar from "@/components/Sidebar/Sidebar";
import { Box } from "@mui/material";

export default async function page() {
  return (
    <Box sx={{ background: "#F0F2F5", height: "100%" }}>
      <Sidebar />
    </Box>
  );
}
