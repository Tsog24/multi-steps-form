import React from "react";

export const Input = ({ status, handleChange, name }) => {
  return (
    <div className=" text-[#334155] rounded-[8px] ">
      <label>
        {status}
        <span className="text-red-500">*</span>
      </label>
      <input
        name={name}
        className="p-3 w-full border-[#0CA5E9] border rounded-[8px]"
        placeholder="Placeholder"
        onChange={handleChange}
      />
    </div>
  );
};
