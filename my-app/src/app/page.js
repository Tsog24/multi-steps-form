import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { StepOne } from "@/components/StepOne";

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-[#F4F4F4] items-center justify-center">
      <div className="w-[480px] h-[655px] rounded-[8px] bg-[#FFF] p-[32px] flex flex-col gap-[28px]">
        <Header />

        <div className="flex flex-col justify-between h-full">
          <StepOne></StepOne>
          <Footer />
        </div>
      </div>
    </div>
  );
}
