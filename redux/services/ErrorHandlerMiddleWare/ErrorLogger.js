import { isRejectedWithValue } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { toast } from "sonner";

// import { setIsLoggedIn } from "../../redux/feature/authSlice";

export const rtkQueryErrorLogger =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      console.log("action?.payload?.data?>>>>>", action?.payload?.status);
      if (action?.payload?.status === 401) {
        // dispatch(setIsLoggedIn(false));
      }
      toast.error(action?.payload?.data?.message ?? "Something went wrong");
    }
    return next(action);
  };
