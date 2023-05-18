import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import UnderConstruction from '../../public/under-construction-2.png'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle no-jungle' } }
}

export default function TrainTrack() {
  return (
    <main className="fog">
      <div className={`
        flex flex-col gap-8 items-center justify-center flex-grow
        relative min-h-screen p-12 py-16 md:p-16 lg:p-32 md:pb-64 md:pt-64
        after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-3/4
        after:bg-deep-sea after:bg-center after:bg-cover after:from-transparent after:to-sand
      `}>
        <div className="max-w-4xl">
          <h2 className={`${bebas.className} mb-5 text-7xl font-semibold`}>
            TrainTrack
          </h2>
          <p className="text-lg">
          Branhack is a great place to connect with like-minded individuals.
          This year we would like to create a study group-like environment to help participants who would like to obtain some hacking skills!
          </p>
          <p className="text-lg">Find some friends who want to learn about the same topic and help each other out—don’t be shy, reach out to other brainhackers in person or through Discord.</p>
          <p className="text-lg text-bolder text-center">We will be updating the page until the Hackathon, keep an eye out!</p>

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
