import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import UnderConstruction from '../../public/under-construction.png'

import getConfig from 'next/config'
const {
  publicRuntimeConfig: {
    REGISTRATION_URL,
    PROJECTS_SUBMISSION_URL
  }
} = getConfig()

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle no-jungle' } }
}

export default function HackTrack() {
  return (
    <main className="fog">
      <div className={`
        flex flex-col gap-8 items-center justify-center flex-grow
        relative min-h-screen p-12 py-16 md:p-16 lg:p-32 md:pb-64 md:pt-64
        after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-3/4
        after:bg-deep-sea after:bg-top-3px after:bg-cover after:from-transparent after:to-sand
      `}>
        <div className="max-w-4xl">
          <h2 className={`${bebas.className} mb-5 text-7xl font-semibold`}>
            Hacktrack
          </h2>
          <p className="text-lg">The HackTrack is the official fun side of a Brainhack event, where people can work together on projects. What projects? Any kind! From exploding brains to resource gathering and data sharing!</p>
          <p className="text-lg">Would you like to propose a project? Just open an issue on our GitHub repository and fill the template, we will be in touch to help you get going! But be sure to <a href={REGISTRATION_URL}>register first</a>!</p>
          <div className="pt-8 text-center">
            <a href={PROJECTS_SUBMISSION_URL} className="bg-sand-dark text-sand font-bold mt-4 py-2 px-4">
              Submit your project now!
            </a>
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
