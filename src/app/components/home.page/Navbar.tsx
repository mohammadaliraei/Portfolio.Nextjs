import { NextPage } from "next";
import images from "../Images";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-16 border-FntGray border-b-[1px]">
      <div>
        <Image
          src={images.Logo}
          alt="Logo"
          className="w-28 h-28"
        />
      </div>
    </div>
  );
};

export default Navbar;
