import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="h-20 shadow-lg">
      <div className="max-w-5xl h-20 mx-auto ">
        <div className="h-full w-full flex">
          <Link href="/">
            <Logo />
          </Link>
          <div className=" h-full mx-auto">
            <ul className="flex mt-5 p-2 gap-6 ">
              <li className="cursor-pointer  hover:text-sky-700">About me</li>
              <li className="cursor-pointer hover:text-sky-700">My Projects</li>
              <li className="cursor-pointer hover:text-sky-700">Contact me</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
