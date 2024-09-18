import Sidebar from "@/components/Sidebar/Sidebar";
import { Box } from "@mui/material";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ background: "#F0F2F5", height: "100%" }}>
      <Sidebar>{children}</Sidebar>
    </Box>
  );
}
