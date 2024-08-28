
import { LoadingButton } from "@mui/lab";
const ButtonComp = ({
  onClick,
  text,
  isLoading = false,
  disabled,
  icon,
  color = "#000",
  padding = "8px 12px",
  backgroundColor,
  width,
  borderRadius,
  border,
  fontWeight,
  marginTop,
  marginBottom,
  textTransform = "none",
  hoverBackgroundColor,
  hoverColor,
  hoverBorder,
  startIcon = { icon },
  ...sx
}) => {
  return (
    <LoadingButton
      sx={{
        fontFamily: "Nunito Sans",
        width: width,
        padding: padding,
        color: color,
        border: border,
        fontWeight: fontWeight,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        textTransform: textTransform,
        marginTop: marginTop,
        marginBottom: marginBottom,
        "&:hover": {
          backgroundColor: hoverBackgroundColor,
          color: hoverColor,
          borderColor: hoverBorder,
        },
        "& .MuiSvgIcon-root": {
          fontSize: "16px",
        },
        ...sx,
      }}
      onClick={onClick}
      loading={isLoading}
      disabled={disabled || isLoading}
      startIcon={icon}
    >
      {text}
    </LoadingButton>
  );
};
export default ButtonComp;

// import { LoadingButton } from '@mui/lab';

// const ButtonComp = ({
//   onClick,
//   text,
//   isLoading = false,
//   disabled,
//   children,
//   color = "#000",
//   padding = "8px 12px",
//   backgroundColor,
//   width,
//   height,
//   borderRadius,
//   border,
//   fontWeight,
//   fontSize,
//   marginTop,
//   boxShadow,
//   sx
// }) => {


//   return (
//     <LoadingButton
//       sx={{
//         width: width,
//         height: height,
//         padding: padding,
//         color: color,
//         border: border,
//         fontSize: fontSize,
//         fontWeight: fontWeight,
//         backgroundColor: backgroundColor,
//         borderRadius: borderRadius,
//         boxShadow: boxShadow,
//         marginTop: marginTop,
//         ...sx,
//       }}
//       onClick={onClick}
//       loading={isLoading}
//       disabled={disabled || isLoading}
//     >
//       {text}
//     </LoadingButton>
//   );
// };

// export default ButtonComp;
