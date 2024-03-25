import { Project } from '@/lib/models/ProjectModel'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="card bg-blue-100 shadow-xl mb-4">
      <figure>
        <Link target="_blank" href={project.link}>
          <Image
            src={project.image}
            alt={project.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link target="_blank" href={project.link}>
          <h2 className="card-title font-normal">{project.name}</h2>
        </Link>
        <p className="mb-2">{project.description}</p>
        <div className="card-actions flex items-center justify-between">
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })}
            href={project.link}
            target="_blank"
          >
            View <FaExternalLinkAlt className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
