import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormLabel } from "@mui/joy";
import { FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";

const InputField = ({
  label,
  name,
  min,
  max,
  icon = false,
  type,
  onChange,
  cols = 6,
  formik,
  showError = false,
  errorMessage,
  defaultValue = "",
  required = false,
  isPhone = false,
  middle = false,
  Placeholder,
  position = "start",
  multiline,
  searchIcon,
  passwordVisible,
  // backgroundColor = "transparent",
  setPasswordVisible,
  rows,
  // height = "auto",
  paddingLeft = "",
  padding = "",
  iconPadding = "",
  borderRadius = "8px",
  border = "",
  customHeight = "auto",
  fontLabelWeight = 600,
  labelFontSize = "14px",
  customBackgroundColor = "transparent",
  marginTop = "0px",
  ...props
}) => {
  const togglePasswordIcon = () => {
    setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
  };

  const fieldError = formik?.errors[name] || errorMessage;
  const fieldTouched = formik?.touched[name] || showError;

  const handleChange = (event) => {
    let { value } = event.target;
    if (middle && value.length > 1) {
      value = value.charAt(0);
      event.target.value = value;
    }
    if (isPhone === true) {
      value = value.replace(/\D/g, "");
      const match = value.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
      if (match) {
        const formatted = [match[1], match[2], match[3]].filter((group) => !!group).join(" ");
        event.target.value = formatted;
      }
    }
    if (formik) {
      formik.handleChange(event);
    } else {
      onChange && onChange(event);
    }
    if (props.maxLength && value.length > props.maxLength) {
      return;
    }
  };

  const handleKeyPress = (event) => {
    if (isPhone) {
      const pattern = /^\d{0,3}(-\d{0,3}(-\d{0,4})?)?$/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
  };

  return (
    <Grid item xs={12} sm={cols} md={cols} lg={cols} marginTop={marginTop}>
      <FormControl
        fullWidth
        variant="outlined"
        error={fieldTouched && fieldError}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: customBackgroundColor,
            height: customHeight,
            paddingLeft: icon ? iconPadding : paddingLeft,
            borderRadius: borderRadius,
            border: border,
            "& input": {
              padding: padding,
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: border,
              outline: "none",
            },
            "&.MuiOutlinedInput-root:hover  .MuiOutlinedInput-notchedOutline": {
              outline: "none",
              borderColor: "#E1E1E1 !important",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: border,
                outline: "none",
              },
              "&:hover fieldset": {
                border: border,
                outline: "none",
              },
              "&.Mui-focused fieldset": {
                border: border,
                outline: "none",
              },
            },
          },
        }}>
        {label && (
          <FormLabel>
            <Typography
              variant="body2"
              fontWeight={fontLabelWeight}
              fontSize={labelFontSize}
              marginBottom={"5px"}>
              {label} {required && <span style={{ color: "red" }}>*</span>}
            </Typography>
          </FormLabel>
        )}
        <TextField
          id={`${name}`}
          autoComplete="off"
          name={name}
          type={type}
          multiline={multiline}
          rows={rows}
          defaultValue={defaultValue}
          InputProps={{
            startAdornment: icon && (
              <InputAdornment
                position={position}
                sx={{
                  cursor: "pointer",
                  color: "#89879F",
                }}
                onClick={togglePasswordIcon}>
                {searchIcon === true ? (
                  <SearchIcon />
                ) : passwordVisible ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </InputAdornment>
            ),
          }}
          placeholder={Placeholder}
          error={fieldTouched && fieldError}
          helperText={fieldTouched && fieldError}
          onBlur={formik?.handleBlur}
          inputProps={{
            maxLength: isPhone ? 12 : middle ? 1 : props.maxLength,
            minLength: props.minLength,
            defaultValue: defaultValue,
            min: min,
            max: max,
            autoComplete: "new-password",
          }}
          InputLabelProps={{
            shrink: true,
            ...(label && { style: { display: "none" } }),
          }}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          {...props}
          {...formik?.getFieldProps(name)}
        />
      </FormControl>
    </Grid>
  );
};

export default InputField;
