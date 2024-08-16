import { LoadingButton } from '@mui/lab';

const ButtonComp = ({
  onClick,
  text,
  isLoading = false,
  disabled,
  children,
  color = "#000",
  padding = "8px 12px",
  backgroundColor,
  width,
  borderRadius,
  border,
  fontWeight,
  ...sx
}) => {


  return (
    <LoadingButton
      sx={{
        width: width,
        padding: padding,
        color: color,
        border: border,
        fontWeight: fontWeight,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        ...sx,
      }}
      onClick={onClick}
      loading={isLoading}
      disabled={disabled || isLoading}
    >
      {text}
    </LoadingButton>
  );
};

export default ButtonComp;
