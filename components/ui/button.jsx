import { LoadingButton } from "@mui/lab";
import PropTypes from "prop-types";

const ButtonComp = ({
  onClick,
  text,
  isLoading = false,
  disabled,
  icon,
  padding = "25px 30px",
  width,
  borderRadius = "0.5rem",
  border,
  fontWeight = "600",
  marginTop = "10px",
  marginBottom = "10px",
  textTransform = "none",
  hoverColor,
  hoverBorder,
  fontSize = "16px",
  maxHeight = "50px",
  variant = "red",
  startIcon = { icon },
  ...sx
}) => {
  const variants = {
    red: {
      backgroundColor: "#E6034B",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#F30752",
      },
    },
    blue: {
      backgroundColor: "#8338EC",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#A764FA",
      },
    },
    light: {
      backgroundColor: "#F4F0F9",
      color: "#8338EC",
      "&:hover": {
        backgroundColor: "#F6F5F3",
        color: "#8338EC",
      },
    },
  };

  return (
    <LoadingButton
      sx={{
        fontFamily: "Nunito Sans",
        width: width,
        padding: padding,
        border: border,
        fontWeight: fontWeight,
        borderRadius: borderRadius,
        textTransform: textTransform,
        marginTop: marginTop,
        marginBottom: marginBottom,
        fontSize: fontSize,
        maxHeight: maxHeight,
        ...variants[variant],
        "& .MuiSvgIcon-root": {
          fontSize: "16px",
        },
        boxShadow: "none",
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

ButtonComp.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["red", "blue", "light"]),
};

ButtonComp.defaultProps = {
  variant: "red",
};

export default ButtonComp;
