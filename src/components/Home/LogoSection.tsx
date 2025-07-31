import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="h-[145px] relative px-4 md:px-28 pt-20 pb-16 bg-white flex items-center justify-between">
      <div className=" max-w-full mx-auto">
        <div className="grid lg:grid-rows-2 gap-x-[400px] items-center">
        <h1 className="text-primary font-bold italic">Trusted by Leading Brands</h1>
        <div></div>
        </div>       
      </div>
    </div>
  );
}
