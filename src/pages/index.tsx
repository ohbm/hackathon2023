import Image from 'next/image'
import { Bebas_Neue, Homemade_Apple } from 'next/font/google'
import { BsDiscord, BsTwitter, BsGithub } from 'react-icons/bs'
import { SiMattermost } from 'react-icons/si'
import { FaMapMarkerAlt } from 'react-icons/fa'
import GoldenBrain from '../../public/golden-brain.png'
import BrainMap from '../../public/brain-map.png'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })
const apple = Homemade_Apple({ weight: '400', subsets: ['latin'] })

const Button = (props: React.HTMLAttributes<HTMLButtonElement>) =>
  <button className={`bg-sand-dark text-sand font-bold py-2 px-4 ${props.className}`}>
    {props.children}
  </button>

export default function Home() {
  return (
    <main className="full mt-1">
      <div className={`
        jungle
        p-12 md:p-16 lg:p-32 md:pb-64 md:pt-64 flex justify-center items-center flex-grow
        after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-2/3
        after:bg-gradient-160 from-almost-black from-60% to-sand-dark
      `}>
        <div className={`
          relative max-w-6xl text-center
          grid grid-cols-1 md:grid-cols-2 flex-grow
        `}>
          <div className="flex flex-col items-center justify-center">
            <h2 className={`${bebas.className} mb-5 font-semibold`}>
              OHBM Brainhack <span className="block md:text-9xl">2023</span>
            </h2>
            <p
              className={`${bebas.className} m-0 md:text-3xl bg-sand p-2`}
            >
              July 19-21, 2023 <br />
              Montreal, CA.
            </p>
            <div className="m-3 md:pt-0 text-xs md:text-lg text-sand-dark md:text-sand text-center grid grid-cols-2 xl:pb-6 gap-2">
              <Button>Register</Button>
              <Button>Submit</Button>
            </div>
          </div>
          <div className="relative flex px-8 md:px-0 items-center md:items-end">
            <Image
              className="object-contain max-h-3/4 md:max-h-3/4 lg:max-h-3/4 xl:max-h-3/4 !relative"
              src={GoldenBrain}
              alt="The Golden Brain"
              priority
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
            />
          </div>
        </div>
        <div className={`
          text-sand text-4xl md:text-6xl flex gap-4 md:gap-10 py-5 md:pb-0
          flex-wrap justify-center
          md:absolute md:bottom-16 md:left-0 md:right-0 md:inset-x-0 z-30
        `}>
          <a href="https://discord.gg/qUzW56dZT2"><BsDiscord className="filter drop-shadow-opaque" /></a>
          <a href="https://twitter.com/ohbmopen"><BsTwitter className="filter drop-shadow-opaque" /></a>
          <a href="https://mattermost.brainhack.org/brainhack/channels/hbm-hackathon"><SiMattermost className="filter drop-shadow-opaque" /></a>
          <a href="https://github.com/ohbm/"><BsGithub className="filter drop-shadow-opaque" /></a>
          <a href="https://goo.gl/maps/7txMm7UuJ8nKPraC8"><FaMapMarkerAlt className="filter drop-shadow-opaque" /></a>
        </div>
      </div>
      <div className="p-12 md:p-16 lg:p-32 md:pb-64 md:pt-64 flex justify-center items-center flex-grow bg-jungle text-white">
        <div className="grid max-w-6xl min-h-screen md:min-h-fit grid-cols-1 md:grid-cols-2 flex-grow reverse">
          <div className="flex md:px-0 mb-10 md:mb-0 items-start">
            <Image
              className="object-contain !relative"
              src={BrainMap}
              alt="Brain Map"
              priority
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 75vw,
                      50vw"
            />
          </div>
          <div className="flex flex-col justify-center text-xl">
            <h3 className={`${bebas.className} mb-5 text-5xl font-semibold text-gold`}>What is OHBM?</h3>
            <p className="mb-10 text-sand">OHBM is the Organization for Human Brain Mapping. A Society of scientists dedicated to mapping the brain using all neuroimaging technologies.</p>
            <h3 className={`${bebas.className} mb-5 text-5xl font-semibold text-gold`}>What is Brainhack?</h3>
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
      <div className="map relative min-h-3/5 md:min-h-max">
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
