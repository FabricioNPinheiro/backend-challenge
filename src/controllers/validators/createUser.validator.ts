import * as Yup from "yup";

const createUserValidator: any = Yup.object({
  body: Yup.object({
    name: Yup.string().required(),
    password: Yup.string().required(),
    phone: Yup.string().required(),
    type: Yup.string().required(),
    address: Yup.object({
      street: Yup.string().required(),
      city: Yup.string().required(),
      number: Yup.string().required(),
      uf: Yup.string().required(),
    }).required(),
  }),
});

export default createUserValidator;
