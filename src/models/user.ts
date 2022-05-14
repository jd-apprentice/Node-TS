import pkg from "mongoose";
const { Schema, model } = pkg;

const UserSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default model("User", UserSchema);
