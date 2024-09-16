import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { BCRYPT_WORK_FACTOR } = process.env;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
    },
    phone: {
      type: String,
      required: true,
      unique: [true, "Phone already exists"],
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    otpCode: {
      type: String,
      default:null
    },
    otpExpiry: {
      type: Date,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
   
  },
  { timestamps: true }
);

userSchema.pre("save", function () {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, Number(BCRYPT_WORK_FACTOR));
  }
});

userSchema.methods.matchesPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.isOTPExpired = function () {
  return Date.now() > this.otpExpiry;
};

userSchema.set("toJSON", {
  virtuals: true,
  transform: (_doc, ret) => {
    delete ret.password;
    return ret;
  },
});

userSchema.set("toObject", {
  virtuals: true,
  transform: (_doc, ret) => {
    delete ret.password;
    return ret;
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
