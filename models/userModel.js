const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["Admin", "NGO", "Donor", "Organisation"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "Donor" || this.role === "Admin") {
          return false;
        }
      },
    },
    organisationName: {
      type: String,
      required: function () {
        if (this.role === "Organisation") {
          return true;
        }
        return false;
      },
    },
    NGOName: {
      type: String,
      required: function () {
        if (this.role === "NGO") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
