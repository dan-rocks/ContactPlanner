import * as yup from 'yup'

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

yup.addMethod(yup.string, "email", function validateEmail(message) {
  return this.matches(emailRegex, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

export const loginSchema = yup.object({
  name: yup.string().required("Name is missing!"),
  email: yup.string().email("Invalid email!").required("Email is missing!"),
  address: yup.string().required("Address is missing! Make sure to click on a suggestion from the search bar.")
})

type ValidationResult<T> = { error?: string; value?: T };

export const yupValidate = async <T extends object>(
  schema: yup.Schema,
  value: T
): Promise<ValidationResult<T>> => {
  try {
    const data = await schema.validate(value);
    return { value: data };
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return { error: error.message };
    } else {
      return { error: (error as Error).message };
    }
  }
};