import Image from 'next/image'
import { Bebas_Neue, Nothing_You_Could_Do, Homemade_Apple } from 'next/font/google'
import LocalFont from 'next/font/local'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'
import { BsDiscord } from 'react-icons/bs'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })
const apple = Homemade_Apple({ weight: '400', subsets: ['latin'] })

const Button = (props: React.HTMLAttributes<HTMLButtonElement>) =>
  <button className={`bg-sand-dark hover:bg-blue-700 text-sand font-bold py-2 px-4 m-4 rounded ${props.className}`}>
    {props.children}
  </button>

export default function Home() {

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOeyARupaWJ7LVB2uRkWotvDf9-xbG3rQ",
    libraries: libraries as any,
  });
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <main className="full">
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
            <h2 className={`${bebas.className} mb-5 text-7xl font-semibold`}>
              OHBM Brainhack <span className="block text-9xl">2023</span>
            </h2>
            <p
              className={`${bebas.className} m-0 text-3xl bg-sand p-2`}
            >
              July 19-21, 2023 <br />
              Montreal, CA.
            </p>
            <div className="p-6 text-lg text-sand-dark md:text-sand text-center">
              <Button>Registration</Button>
              <Button>Submit your project</Button>
            </div>
            <div className="pb-12 md:pb-0 md:pt-10 text-sand-dark text-6xl md:text-sand text-center">
              <BsDiscord />
            </div>
          </div>
          <div className="relative flex px-8 md:px-0 items-end">
            <Image
              className="object-contain md:max-h-3/4 lg:max-h-3/4 xl:max-h-3/4 !relative"
              src="/golden-brain.png"
              alt="The Golden Brain"
              priority
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
            />
          </div>
        </div>
      </div>
      <div className="p-12 md:p-16 lg:p-32 md:pb-64 md:pt-64 flex justify-center items-center flex-grow bg-jungle text-white">
        <div className="grid max-w-6xl min-h-screen md:min-h-fit grid-cols-1 md:grid-cols-2 flex-grow">
          <div className="flex md:px-0 mb-10 md:mb-0 items-start">
            <Image
              className="object-contain !relative"
              src="/brain-map.png"
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
              Brainhack is an exciting event that brings together individuals who are passionate about open science and collaboration. It's an opportunity to learn, share, and work on projects that pique your interest. From developing new tools to exploring the latest research, Brainhack offers a platform for creativity, innovation, and collaboration. Join us and be a part of this incredible journey!
            </p>
            {/* <p className="mb-6">The OHBM Brainhack is a chance for anyone interested in brains to work collaboratively on common projects (during the hacktrack) and learn about new ideas and tools in open science (during the traintrack).</p>
            <p className="mb-6">Brainhacks are not the typical academic conference. Here, attendees can actively take part in the program and learn from each other - sounds something you would like? Many Brainhack projects might involve coding, but it is not a requirement and you can contribute in most cases even without coding skills.</p>
            <p className="mb-6">The OHBM Brainhack 2022 will be a 3-day hybrid event with both in-person and virtual options from June 16th to 18th. The in-person event will be in Queen Margaret Union 22 University Gardens, Glasgow. The virtual event will be held in Discord.</p>
            <p className="mb-6">We look for neuroimagers of all modalities from all over the world at different career stages, and coming from all racial and gender backgrounds who are interested in working together with others to build an open science community. If you're new to the Brainhack community, please join us! If you belong to any minority groups we want to reiterate that we want you here and are excited to have you join us!</p> */}
          </div>
        </div>
      </div>
      <div className="map relative min-h-3/5 md:min-h-max">
        <div className="x absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
        <div className={`note ${apple.className} px-6 text-4xl text-center absolute w-72 top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-20 translate-y-12 flex flex-col justify-center `}>
          <span className="block text-6xl">51</span>
          Sherbrooke<br />St West
        </div>
        {/* {http://maps.stamen.com/m2i/#watercolor/3000:2000/15/45.5082/-73.5584} */}
      </div>
    </main>
  )
}
