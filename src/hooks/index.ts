import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { validations } from "../validations";

export interface IForm {
  name: string;
  age: number;
  addresses: {
    address: string;
    zip: string;
  }[];
  roles: { role: string }[];
}

const useApp = () => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IForm>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(validations) as any,
    criteriaMode: "all",
    mode: "all"
  });

  /**
   * Control to addresses array
   */
  const {
    fields: addressFields,
    append: addressAppend,
    remove: addressRemove
  } = useFieldArray({
    control,
    name: "addresses"
  });

  /**
   * Control to roles array
   */
  const {
    fields: rolesFields,
    append: rolesAppend,
    remove: rolesRemove
  } = useFieldArray({
    control,
    name: "roles"
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (_value: IForm) => {
    // eslint-disable-next-line no-console
    console.log({ _value });
  };

  /*const cleanForm = () => {
    reset();
    clearErrors();
  };*/

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const subscription = watch((_value) => {});
    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    addressFields,
    addressAppend,
    addressRemove,
    rolesFields,
    rolesAppend,
    rolesRemove,
    isValid,
    register,
    errors,
    handleSubmit,
    onSubmit
  };
};

export default useApp;
