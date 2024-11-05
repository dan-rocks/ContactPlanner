import { hash, genSalt, compare } from "bcrypt";
import { model, Schema, Document } from "mongoose";

interface VerificationTokenDoc extends Document {
  owner: Schema.Types.ObjectId;
  token: string;
  createdAt: Date;
}

interface Methods {
  compareToken(token: string): Promise<boolean>
}

const authTokenSchema = new Schema<VerificationTokenDoc, {}, Methods>({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 86400,
    default: Date.now(),
  }
})

authTokenSchema.pre("save", async function (next) {
  if (this.isModified("token")) {
    const salt = await genSalt(10);
    this.token = await hash(this.token, salt);
  }

  next();
});

authTokenSchema.methods.compareToken = async function (token) {
  return await compare(token, this.token)
};

const VerificationTokenModel = model("VerificationTokenModel", authTokenSchema)
export default VerificationTokenModel