import { Document, model, Schema } from "mongoose";
import { hash, compare, genSalt } from "bcrypt";

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  verified: boolean;
}

interface Methods {
  comparePassword(password: string): Promise<boolean>
}

const userSchema = new Schema<UserDocument, {}, Methods>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
  }

  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password)
};

const UserModel = model("User", userSchema);
export default UserModel;
