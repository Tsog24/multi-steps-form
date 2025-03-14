import { Input } from "./Input";
import { CiImageOn } from "react-icons/ci";

export const StepThree = () => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <Input status={"Date of birth"} />
      <p className="text-black">Profile image</p>
      <div className="w-[416px] h-[180px] rounded-[6px] bg-[#F4F4F4] flex flex-col justify-center items-center">
        <div className="flex items-center justify-center bg-white rounded-full size-7">
          <CiImageOn color="black" />
        </div>
        <h1 className="text-black">Add image</h1>
      </div>
    </div>
  );
};
