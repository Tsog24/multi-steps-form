import { Input } from "./Input";

export const StepOne = ({ handleChange }) => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <Input
        status={"First name"}
        handleChange={handleChange}
        name="firstname"
      />
      <Input status={"Last name"} handleChange={handleChange} name="lastname" />
      <Input status={"Username"} handleChange={handleChange} name="username" />
    </div>
  );
};
