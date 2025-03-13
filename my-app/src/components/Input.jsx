import React from "react";

export const Input = ({ status }) => {
  return (
    <div className=" text-[#334155] rounded-[8px] ">
      <p>{status}</p>
      <input className="p-3 w-full border-[#0CA5E9] border rounded-[8px]" />
    </div>
  );
};
