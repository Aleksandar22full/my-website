import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-20 shadow-lg z-10 bg-white">
      <div className="max-w-5xl h-20 mx-auto ">
        <div className="h-full w-full flex">
          <Link href="/">
            <Logo />
          </Link>
          <div className=" h-full mx-auto">
            <ul className="flex mt-5 p-3 gap-6 ">
              <li className="cursor-pointer  hover:text-sky-700">
                <Link href="#about">About me</Link>
              </li>
              <li className="cursor-pointer hover:text-sky-700">
                <Link href="#projects">My Projects</Link>
              </li>
              <li className="cursor-pointer hover:text-sky-700">
                <Link href="#contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
