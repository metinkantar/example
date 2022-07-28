import mongoose from 'mongoose';
const { Schema } = mongoose;
import crypto from "crypto";
import bcrypt from "bcryptjs";

const UserSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Lütfen bir kullanıcı adı girin"],
    },
    email: {
      type: String,
      required: [true, "Lütfen bir e-posta girin"],
      unique: [true, "Böyle bir e-posta mevcut"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Lütfen geçerli bir e-posta girin",
      ],
    },
    password: {
      type: String,
      required: [true, "Bir şifre girin"],
      minlength: 6,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true, collection: "users",  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
  return resetToken;
}; 

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;