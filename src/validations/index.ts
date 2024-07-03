import * as yup from "yup";

export const validations = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Min: 3")
    .max(20, "Max: 20"),
  age: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Min: 18")
    .max(100, "Max: 100"),
  addresses: yup.array().of(
    yup.object().shape({
      address: yup
        .string()
        .required("Address is required")
        .min(5, "Min: 5")
        .max(100, "Max: 100"),
      zip: yup
        .string()
        .required("Zip is required")
        .matches(/^[0-9]{5}$/, "Invalid zip code")
    })
  ),
  roles: yup.array().of(
    yup.object().shape({
      role: yup.string().required("Role is required")
    })
  )
});
