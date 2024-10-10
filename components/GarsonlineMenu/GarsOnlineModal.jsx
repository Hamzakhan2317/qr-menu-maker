import { Box, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

const GarsOnlineModal = ({
  menuData,
  // setIsMenu
}) => {
  const { venueId } = useParams();
  const router = useRouter();
  return (
    <Box>
      {menuData
        ?.filter(({ status }) => status == "1" || status == "active")
        ?.map((menu) => (
          <Box
            key={menu._id}
            sx={{
              width: "100%",
              borderBottom: "1px solid #E5E5E5",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              router.push(`/garsonline-menu/${venueId}/menu/${menu._id}`);
            }}>
            <Typography color={"#130F40"}>{menu.name}</Typography>
          </Box>
        ))}
    </Box>
  );
};

export default GarsOnlineModal;
