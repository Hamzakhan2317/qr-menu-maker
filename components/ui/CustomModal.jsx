import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Slide } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});

const CustomModal = ({
  children,
  title,
  open,
  setOpen,
  minHeight = "150px",
  width = "auto",
  maxWidth = "md",
  fullWidth = false,
}) => {
  // const theme = useTheme();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      className="customDialog"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{
        width: width,
        "& .MuiPaper-root.MuiPaper-elevation": {
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        },
      }}>
      <DialogTitle
        id="scroll-dialog-title"
        sx={{
          position: "relative",
          textAlign: "center",
          background: "#9021FF !important",
          color: "#FFFFFF",
          fontSize: "18px",
          fontWeight: "500",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}>
        {title}
        <Box
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 5,
            right: 10,
            cursor: "pointer",
            backgroundColor: "#ffffff",
            borderRadius: "100px",
          }}>
          <IconButton onClick={handleClose} marginRight="5px">
            <CloseIcon />
          </IconButton>
          {/* <Icon icon={<CloseIcon />} color={"#9021FF"} /> */}
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          marginTop: "10px",
          padding: "1px 10px",
          minWidth: 500,
          minHeight: { minHeight },
        }}>
        <Box p={1}>{children}</Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
