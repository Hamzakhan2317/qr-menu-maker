import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
  multiline,
  searchIcon,
  passwordVisible,
  backgroundColor = "#FAFAFA",
  setPasswordVisible,
  rows,
  height = "auto",
  paddingLeft = "",
  iconPadding = "",
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
        const formatted = [match[1], match[2], match[3]]
          .filter((group) => !!group)
          .join(" ");
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
    <Grid item xs={12} sm={cols} md={cols} lg={cols}>
      {label && (
        <Typography variant="body2" my={1}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </Typography>
      )}
      <FormControl
        fullWidth
        variant="outlined"
        error={fieldTouched && fieldError}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: backgroundColor,
            height: height,
            paddingLeft: icon ? iconPadding : paddingLeft,
          },
        }}
      >
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
                position="start"
                sx={{
                  cursor: "pointer",
                  color: "#ccc",
                  "& svg": {
                    position: "absolute",
                    right: "10px",
                  },
                }}
                onClick={togglePasswordIcon}
              >
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
