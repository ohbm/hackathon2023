import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import UnderConstruction from '../../public/under-construction.png'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export default function HackTrack() {
  return (
    <main className="fog">
      <div className={`
        flex flex-col gap-8 items-center justify-center flex-grow
        relative min-h-screen p-12 py-16 md:p-16 lg:p-32 md:pb-64 md:pt-64
        after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-3/4
        after:bg-deep-sea after:bg-top-3px after:bg-cover after:from-transparent after:to-sand
      `}>
        <div className="max-w-6xl">
          <h2 className={`${bebas.className} mb-5 text-7xl font-semibold`}>
            Hacktrack
          </h2>
          <div className={`text-center max-w-2xl`}>
            <h3>Under Construction</h3>
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
