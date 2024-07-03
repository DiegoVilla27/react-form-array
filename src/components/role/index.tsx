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

const Role = ({ register, index, remove, errors }: IProps) => {
  return (
    <div className="roles-box">
      <div>
        <input
          placeholder="Role"
          {...register(`roles.${index}.role` as const)}
        />
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ErrorMessageCustom(errors, `roles.${index}.role` as any)
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

export default Role;
