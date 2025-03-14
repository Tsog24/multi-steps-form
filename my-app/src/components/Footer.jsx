import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const Footer = ({ stepCount, handleNextStep, handleBackStep }) => {
  return (
    <div className="flex gap-2">
      {stepCount > 0 && (
        <button
          onClick={handleBackStep}
          className="rounded-[6px] border text-black border-black w-[40%] p-[12px] flex justify-center items-center gap-1"
        >
          <FaChevronLeft className="w-[12px] h-[12px]" />
          Back
        </button>
      )}
      <button
        onClick={handleNextStep}
        className="rounded-[6px] bg-[#121316] w-full p-[12px] flex flex-row-reverse justify-center items-center gap-1"
      >
        <FaChevronRight className="w-[12px] h-[12px]" />
        Continue {stepCount + 1}/4
      </button>
    </div>
  );
};
