import { setIn } from "final-form";
import { ArtistProps, InitialValues } from "./interfaces";

import image1 from './assets/1.jpeg';
import image2 from './assets/2.jpeg';
import image3 from './assets/3.jpeg';
import image4 from './assets/4.jpeg';
import image5 from './assets/5.jpeg';
import image6 from './assets/6.jpeg';
import image7 from './assets/7.jpeg';
import image8 from './assets/8.jpeg';
import image9 from './assets/9.jpeg';

export type AuthToken = string | null;
export type Artists = Array<ArtistProps> | null;
export type Email = string | null;
export type User = string | null;

export const API_URL = "https://tr4cker-api.up.railway.app/api";

export const initialValues: InitialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  artist: '',
}

export const imgs = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
]

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