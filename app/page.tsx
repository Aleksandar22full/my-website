'use client'
import About from '@/components/About'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ReactTyped } from 'react-typed'
import WhatIDo from '@/components/WhatIDo'
import data from '@/lib/data'
import ProjectItem from '@/components/ProjectItem'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            <ReactTyped
              strings={['Hi, nice to meet you!']}
              typeSpeed={80}
              backSpeed={20}
              loop
            />
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          I am Aleksandar a <br></br>
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            UI/UX
          </span>{' '}
          Web designer
        </h1>
        <p className="mt-8 max-w-prose text-zinc-700 sm:text-lg">
          Passionate designer coming from Serbia, to explore further into my
          background, scroll down.
        </p>
        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href="#contact"
        >
          Contact Me <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto"></div>
          </div>
        </div>
      </div>
      <About />
      <WhatIDo />
      <div id="projects" className="text-center">
        <h2 className="text-6xl underline decoration solid decoration-blue-500 decoration-6 p-4">
          My Websites & Figma Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-center p-4">
        {data.projects.map((project) => (
          <div className="p-4">
            <ProjectItem key={project.slug} project={project} />
          </div>
        ))}
      </div>
      <Contact />
    </>
  )
}
