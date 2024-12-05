import { NextPage } from "next";
import images from "../Images"; // فرض بر این است که تصاویر شما اینجا قرار دارند
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-16 border-FntGray border-b-[1px]">
      <div>
        <Image
          src={images.Logo}
          alt="Logo"
          className="w-20 h-20"
        />
      </div>
    </div>
  );
};

export default Navbar;
