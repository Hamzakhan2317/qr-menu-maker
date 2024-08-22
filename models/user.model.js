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
    otpExpiry: {
      type: Date,
      // default: () => Date.now() + 10 * 60 * 1000, // 10 minutes from now
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
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
    bio: {
      type: String,
      required: false,
    },
    socialLinks: {
      facebook: { type: String, trim: true },
      twitter: { type: String, trim: true },
      instagram: { type: String, trim: true },
      linkedin: { type: String, trim: true },
      github: { type: String, trim: true },
      website: { type: String, trim: true },
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
