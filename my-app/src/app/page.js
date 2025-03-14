"use client";

import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { useState } from "react";
import { StepFour } from "@/components/StepFour";

const initialValue = {
  firstname: "",
  lastname: "",
  username: "",
};

export default function Home() {
  const [stepCount, setStepCount] = useState(0);
  const [inputValues, setInputValues] = useState(initialValue);

  const handleNextStep = () => {
    setStepCount(stepCount + 1);
  };
  const handleBackStep = () => {
    setStepCount(stepCount - 1);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const Pages = [StepOne, StepTwo, StepThree, StepFour][stepCount];
  return (
    <div className="flex w-screen h-screen bg-[#F4F4F4] items-center justify-center">
      {stepCount === 3 && <StepFour />}
      <div
        className="w-[480px] h-[655px] rounded-[8px] bg-[#FFF] p-[32px] flex flex-col gap-[28px]"
        style={{ display: stepCount === 3 ? "none" : "flex" }}
      >
        <Header />
        <div className="flex flex-col justify-between h-full">
          <Pages handleChange={handleChange} />
          <Footer
            handleNextStep={handleNextStep}
            handleBackStep={handleBackStep}
            stepCount={stepCount}
          />
        </div>
      </div>
    </div>
  );
}
