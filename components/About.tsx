import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const About = () => {
  return (
    <MaxWidthWrapper>
      <div className="h-56 mt-48 md:mt-96" id="about">
        <div className="ml-12 flex flex-col lg:flex-row lg:justify-center">
          <div className="h-48 w-72 lg:w-2/3 flex flex-col">
            <h1 className="text-3xl underline decoration solid decoration-blue-500 decoration-6">
              About me
            </h1>
            <h6 className="mt-4">
              I am Aleksandar, a passionate UI/UX designer driven by a deep love
              for crafting exceptional digital experiences. With a keen eye for
              detail and a penchant for clean, intuitive design, I specialize in
              creating interfaces that seamlessly combine aesthetics with user
              experience.
            </h6>
          </div>
          <div className="mt-14 ml-4">
            <Link
              className={buttonVariants({
                size: 'lg',
                className: '',
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
    </MaxWidthWrapper>
  )
}

export default About
