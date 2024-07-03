import {
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister
} from "react-hook-form";
import { IForm } from "../../hooks";
import { ErrorMessageCustom } from "../msg-error/index";

interface IProps {
  register: UseFormRegister<IForm>;
  index: number;
  remove: UseFieldArrayRemove;
  errors: FieldErrors<IForm>;
}

const Address = ({ register, index, remove, errors }: IProps) => {
  return (
    <div className="addresses-box">
      <div>
        <input
          placeholder="Address"
          {...register(`addresses.${index}.address` as const)}
        />
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ErrorMessageCustom(errors, `addresses.${index}.address` as any)
        }
      </div>
      <div>
        <input
          placeholder="ZIP"
          {...register(`addresses.${index}.zip` as const)}
        />
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ErrorMessageCustom(errors, `addresses.${index}.zip` as any)
        }
      </div>
      <button
        className="btn-remove"
        type="button"
        onClick={() => remove(index)}
      >
        X
      </button>
    </div>
  );
};

export default Address;
