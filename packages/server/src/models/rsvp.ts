import { Document, model, Schema } from "mongoose";

interface RSVPDocument extends Document {
  name: string;
  email: string;
  address: string;
}

const RSVPSchema = new Schema<RSVPDocument, {}, {}>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const RSVPModel = model("RSVP", RSVPSchema)
export default RSVPModel