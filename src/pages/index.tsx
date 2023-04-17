import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })

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
    googleMapsApiKey:"AIzaSyDOeyARupaWJ7LVB2uRkWotvDf9-xbG3rQ",
    libraries: libraries as any,
  });
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  
  return (
    <main className="flex min-h-screen flex-col items-stretch justify-center">
      <div className="jungle relative min-h-screen p-12 md:p-16 lg:p-32 md:pb-64 md:pt-64 flex justify-center flex-grow after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-2/3 after:bg-gradient-160 from-almost-black from-60% to-sand-dark">
        <div className="relative grid max-w-6xl text-center grid-cols-1 md:grid-cols-2 flex-grow">
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
          </div>
          <div className="relative flex px-8 md:px-0 items-end">
            <Image
              className="object-contain dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:max-h-3/4 lg:max-h-3/4 xl:max-h-3/4 !relative"
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
      <div>
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: '100%', height: '32rem' }}
          onLoad={() => console.log('Map Component Loaded...')}
        />
      </div>
    </main>
  )
}
