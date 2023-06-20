import { setIn } from "final-form";

export const API_URL = "https://python-app.up.railway.app/api"
export type User = string | null
export type Email = string | null

export const validateFormValues = (schema: any) => async (values: any) => {
  if (typeof schema === "function") {
    schema = schema();
  }
  try {
    await schema.validateSync(values, { abortEarly: false });
  } catch (err: any) {
    const errors = err.inner.reduce((formError: any, innerError: any) => {
      return setIn(formError, innerError.path, innerError.message);
    }, {});

    return errors;
  }
};