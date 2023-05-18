import Image from 'next/image'
import { Bebas_Neue, Covered_By_Your_Grace } from 'next/font/google'
import { BsDiscord, BsTwitter, BsGithub } from 'react-icons/bs'
import { SiMattermost } from 'react-icons/si'
import { FaMapMarkerAlt } from 'react-icons/fa'
import GoldenBrain from '../../public/golden-brain.png'
import BrainMap from '../../public/brain-map.png'

import getConfig from 'next/config'
const {
  publicRuntimeConfig: {
    REGISTRATION_URL,
    PROJECTS_SUBMISSION_URL,
    DISCORD_URL,
    TWITTER_URL,
    MATTERMOST_URL,
    GITHUB_URL,
    MAPS_URL,
  }
} = getConfig()

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })
const apple = Covered_By_Your_Grace({ weight: '400', subsets: ['latin'] })

const Button = ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) =>
  <a className={`bg-sand-dark text-sand font-bold py-2 px-4 ${className}`} {...props}>
    {props.children}
  </a>

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle half-jungle fixed-jungle' } }
}

export default function Home() {
  return (
    <main>
      <div className={`
        p-12 md:p-10 lg:p-12 lg:pt-18 min-h-full lg:min-h-screen lg:max-h-screen
        flex justify-center items-center flex-grow
      `}>
        <div className={`
          relative max-w-6xl text-center
          grid grid-cols-1 md:grid-cols-2 flex-grow
        `}>
          <div className="flex flex-col items-center justify-center">
            <h2 className={`${bebas.className} mb-3 font-semibold`}>
              OHBM<br/>Brainhack <span className="block md:text-9xl">2023</span>
            </h2>

            <div className={`${bebas.className} text-xl md:text-xl lg:text-xl bg-sand-dark text-sand p-2 text-center`}>
              July 19-21, 2023
            </div>
            <div className="grid grid-cols-2 md:flex md:items-stretch gap-2 pt-2">
              <a className="bg-sand-dark text-sand font-bold py-2 px-4" href={REGISTRATION_URL}>
                Register
              </a>
              <a className="bg-sand-dark text-sand font-bold py-2 px-4" href={PROJECTS_SUBMISSION_URL}>
                Submit
              </a>
            </div>
            <div className="text-sand text-4xl md:text-6xl flex gap-4 md:gap-10 mt-8 md:pt-12 pb-0">
              <a href={DISCORD_URL}><BsDiscord className="filter drop-shadow-opaque" /></a>
              <a href={TWITTER_URL}><BsTwitter className="filter drop-shadow-opaque" /></a>
              <a href={MATTERMOST_URL}><SiMattermost className="filter drop-shadow-opaque" /></a>
              <a href={GITHUB_URL}><BsGithub className="filter drop-shadow-opaque" /></a>
              <a href={MAPS_URL}><FaMapMarkerAlt className="filter drop-shadow-opaque" /></a>
            </div>
          </div>
          <div className="relative flex flex-col md:px-0 items-center justify-center text-bolder shadow-white">
            {/* <p className="text-white">Venture into the untapped depths of the cerebral realm </p>
            <p className="text-white">Explore the untapped depths of the brain</p> */}
            <div className={`md:p-2 ${apple.className} text-xl md:text-3xl text-center text-sand-dark text-bolder shadow-black font-bold`}>
              Venture into the <br/>untapped depths of the brain
            </div>
            <Image
              className="object-contain max-h-3/4 md:max-h-1/2 lg:max-h-1/2 xl:max-h-3/5 !relative"
              src={GoldenBrain}
              alt="The Golden Brain"
              priority
              fill
              sizes="(max-width: 768px) 60vw,
                      (max-width: 1280px) 40vw,
                      50vw"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-jungle text-white">
        <div className="grid max-w-6xl min-h-1/4 grid-cols-1 md:grid-cols-2">
          <div className="flex md:px-0 mb-10 md:mb-0 items-center">
            <Image
              className="object-contain !relative max-h-4/5 flex-grow"
              src={BrainMap}
              alt="Brain Map"
              priority
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 75vw,
                      50vw"
            />
          </div>
          <div className="flex flex-col justify-center text-lg px-8 pb-8">
            <h3 className={`${bebas.className} mb-2 mt-0 text-4xl font-semibold text-gold`}>What is OHBM?</h3>
            <p className="mb-2 text-sand">OHBM is the Organization for Human Brain Mapping. A Society of scientists dedicated to mapping the brain using all neuroimaging technologies.</p>
            <h3 className={`${bebas.className} mb-2 mt-6 text-4xl font-semibold text-gold`}>What is Brainhack?</h3>
            <p className="text-sand">
              Brainhack is an exciting event that brings together individuals who are passionate about open science and collaboration. It&apos;s an opportunity to learn, share, and work on projects that pique your interest. From developing new tools to exploring the latest research, Brainhack offers a platform for creativity, innovation, and collaboration. Join us and be a part of this incredible journey!
            </p>
            {/* <p className="mb-6">The OHBM Brainhack is a chance for anyone interested in brains to work collaboratively on common projects (during the hacktrack) and learn about new ideas and tools in open science (during the traintrack).</p>
            <p className="mb-6">Brainhacks are not the typical academic conference. Here, attendees can actively take part in the program and learn from each other - sounds something you would like? Many Brainhack projects might involve coding, but it is not a requirement and you can contribute in most cases even without coding skills.</p>
            <p className="mb-6">The OHBM Brainhack 2022 will be a 3-day hybrid event with both in-person and virtual options from June 16th to 18th. The in-person event will be in Queen Margaret Union 22 University Gardens, Glasgow. The virtual event will be held in Discord.</p>
            <p className="mb-6">We look for neuroimagers of all modalities from all over the world at different career stages, and coming from all racial and gender backgrounds who are interested in working together with others to build an open science community. If you're new to the Brainhack community, please join us! If you belong to any minority groups we want to reiterate that we want you here and are excited to have you join us!</p> */}
          </div>
        </div>
      </div>
      <div className="map relative min-h-3/5 md:min-h-3/5 z-50">
        <div className="x absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex">
        <a href="https://goo.gl/maps/7txMm7UuJ8nKPraC8" className="grow"></a>
        </div>
        <div className={`note ${apple.className} px-6 text-4xl text-center absolute w-72 top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-20 translate-y-12 flex flex-col justify-center`}>
          <a href="https://goo.gl/maps/7txMm7UuJ8nKPraC8" className="grow flex flex-col justify-center">
            <FaMapMarkerAlt className="absolute text-7xl top-4 right-4" />
            <span className="block text-6xl">51</span>
            Sherbrooke<br />St West
          </a>
        </div>
        {/* {http://maps.stamen.com/m2i/#watercolor/3000:2000/15/45.5082/-73.5584} */}
      </div>
    </main>
  )
}
