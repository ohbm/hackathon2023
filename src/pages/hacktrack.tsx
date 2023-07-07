import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import UnderConstruction from '../../public/under-construction.png'
import getConfig from 'next/config'

import Markdown from '@/components/markdown'

const {
  publicRuntimeConfig: {
    REGISTRATION_URL,
    PROJECTS_SUBMISSION_URL
  }
} = getConfig()

type Project = {
  title: string,
  goals: string,
  issue_link: string,
  issue_number: number,
}

export async function getStaticProps() {
  const fullPath = path.join('public', `projects.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const projects = JSON.parse(fileContents) as Project[];
  return { props: { bodyClassName: 'jungle no-jungle', projects } }
}

export default function HackTrack({ projects }: { projects: Project[] }) {
  return (
    <main className={`
      relative fog
      after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-3/4
      after:bg-deep-sea after:bg-cover after:from-transparent after:to-sand after:bg-top-3px
    `}>
      <div className={`
        flex flex-col gap-8 items-center justify-center flex-grow
        relative min-h-screen p-12 py-16 md:p-16 lg:p-32 md:pb-64 md:pt-64
      `}>
        <div className="max-w-4xl">
          <h2>
            Hacktrack
          </h2>
          <p className="text-lg">The HackTrack is the official fun side of a Brainhack event, where people can work together on projects. What projects? Any kind! From exploding brains to resource gathering and data sharing!</p>
          <p className="text-lg">Would you like to propose a project? Just open an issue on our GitHub repository and fill the template, we will be in touch to help you get going! But be sure to <a href={REGISTRATION_URL}>register first</a>!</p>
          <div className="pt-8 text-center">
            <a href={PROJECTS_SUBMISSION_URL} className="bg-sand-dark text-sand font-bold mt-4 py-2 px-4">
              Submit your project now!
            </a>
          </div>

          <div className="mb-8 ml-4 animate-fade">
            <ul className="list-none flex justify-stretch items-stretch flex-wrap">
              {
                projects?.map(p => (
                  <li key={p.issue_number} className="m-0 list-none w-full lg:w-1/2 flex">
                    <div className="w-full mr-4 mb-4 p-4 bg-white">
                      <h1 className="text-xl font-bold bg-gold p-2"><a href={p.issue_link}>{p.title}</a></h1>
                      <Markdown tabIndex={0} markdown={p.goals}
                        className={`
                          max-h-96 overflow-auto
                        `}
                        // className={` Optional show more on focus
                        //   max-h-72 overflow-hidden relative cursor-pointer grow
                        //   after:bg-gradient-to-b after:from-transparent after:to-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:content-['']
                        //   focus-within:max-h-none focus-within:after:h-0
                        // `}
                      />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="`text-center max-w-2xl mt-6 mx-auto">
            <Image
              className="object-contain md:max-h-3/4 lg:max-h-3/4 xl:max-h-3/4 !relative"
              src={UnderConstruction}
              alt="Under Construction"
              priority
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
