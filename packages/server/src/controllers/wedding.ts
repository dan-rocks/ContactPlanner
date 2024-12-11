import RSVPModel from "src/models/rsvp";
import { sendErrorRes } from "src/utils/sendErrorRes";

export const rsvp = async (name: string, email: string, address: string): Promise<string> => {
	const invalidEmail = await RSVPModel.findOne({ email });
	if (invalidEmail) return sendErrorRes("Email already in use!", 409);

	const user = await RSVPModel.create({ name, email, address });
	if (!user) return sendErrorRes("Unable to save data. Try again later", 500);

	return "Information added to database successfully!";
};
