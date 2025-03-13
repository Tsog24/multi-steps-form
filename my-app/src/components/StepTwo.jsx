import { Input } from "./Input";

export const StepOne = () => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <Input status={"Email"} />
      <Input status={"Phone number"} />
      <Input status={"Password"} />
      <Input status={"Confirm assword"} />
      <Footer />
    </div>
  );
};
