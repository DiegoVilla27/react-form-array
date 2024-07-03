import Address from "./components/address";
import { ErrorMessageCustom } from "./components/msg-error";
import Role from "./components/role";
import useApp from "./hooks";

function App() {
  const {
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
  } = useApp();

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <h1>Register</h1>
        <input
          {...register("name")}
          className={errors["name"] ? "input-error" : ""}
          type="string"
          placeholder="Name"
        />
        {ErrorMessageCustom(errors, "name")}
        <input
          {...register("age")}
          className={errors["age"] ? "input-error" : ""}
          type="number"
          placeholder="Age"
        />
        {ErrorMessageCustom(errors, "age")}
        <div>
          <div className="addresses">
            <h2>Addresses</h2>
            <button
              className="btn-append"
              type="button"
              onClick={() => addressAppend({ address: "", zip: "" })}
            >
              +
            </button>
          </div>
          {addressFields.map((field, index) => (
            <Address
              key={field.id}
              register={register}
              index={index}
              remove={addressRemove}
              errors={errors}
            />
          ))}
        </div>
        <div>
          <div className="roles">
            <h2>Roles</h2>
            <button
              className="btn-append"
              type="button"
              onClick={() => rolesAppend({ role: "" })}
            >
              +
            </button>
          </div>
          {rolesFields.map((field, index) => (
            <Role
              key={field.id}
              register={register}
              index={index}
              remove={rolesRemove}
              errors={errors}
            />
          ))}
        </div>
        <button
          type="submit"
          disabled={!isValid}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
