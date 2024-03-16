import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-screen mt-48 md:mt-96" id="about">
      <div className="ml-12 flex flex-col lg:flex-row lg:justify-center">
        <div className="h-48 w-96 lg:w-1/3 flex flex-col">
          <h1 className="text-3xl underline decoration solid decoration-blue-500 decoration-6">
            About me
          </h1>
          <h6 className="mt-4">
            JavaScript developer specializing in TypeScript and React. I excel
            in code refinement, UI design and seamless API integration.
            Collaborative team player fostering a learning culture and ensuring
            project success.
          </h6>
        </div>
        <div className="mt-12 ml-4">
          <Link
            className={buttonVariants({
              size: "lg",
              className: "",
            })}
            target="_blank"
            href="Aleksandar Pavlovic CV final.pdf"
            download="Aleksandar Pavlovic CV final.pdf"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
