import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

yup.addMethod(yup.string, "email", function validateEmail(message) {
  return this.matches(emailRegex, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

export const signUpSchema = yup.object({
  name: yup.string().required("Name is missing!"),
  email: yup.string().email("Invalid email!").required("Email is missing!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password should be at least 8 characters long!")
    .matches(passwordRegex, "Password is too simple!"),
});

export const RSVPSchema = yup.object({
  name: yup.string().required("Name is missing!"),
  email: yup.string().email("Invalid email!").required("Email is missing!"),
  address: yup.string().required("No address!")
})