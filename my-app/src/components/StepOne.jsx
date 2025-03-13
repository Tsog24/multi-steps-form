import { Input } from "./Input";

export const StepOne = () => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <Input status={"First name"} />
      <Input status={"Last name"} />
      <Input status={"Username"} />
    </div>
  );
};
