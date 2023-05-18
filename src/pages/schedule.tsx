import React from 'react'

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle fade-jungle' } }
}

export default function Schedule() {

  const range = (start: number, stop: number, step: number): number[] => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
  const hours = range(8, 18, 0.5)
  const days = range(12, 14, 1)

  function MinToMMSS(minutes: number): string{
    var sign = minutes < 0 ? "-" : "";
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
   }

  return (
    <main>
      <div className="justify-center items-center">
        <div className="max-w-6xl">
          <h2>
            Schedule
          </h2>

          <div className="overflow-x-auto overflow-y-auto max-w-[100vw] mt-12 bg-white">
            <div style={{
              gridTemplateColumns: `3.5rem 16rem 16rem 16rem`,
              gridTemplateRows: `repeat(23, 4rem)`,
            }} className="grid grid-flow-col-dense max-w-full gap-2 p-6 text-center">
              <div className="sticky font-bold border-gray-200 border-b-2">Day</div>
              <div className="sticky font-bold border-gray-200 border-b-2">08:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">08:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">09:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">09:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">10:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">10:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">11:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">11:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">12:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">12:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">13:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">13:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">14:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">14:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">15:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">15:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">16:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">16:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">17:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">17:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">18:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">Into the night</div>

              <div className="sticky p-2 row-span-1 font-bold">
                Jul 5 or 12
              </div>
              <div className="p-2 row-span-2">
              </div>
              <div className="p-2 row-span-6 border-black border-2">
              Warm-up session
              </div>
              <div className="p-2 row-span-14">
              </div>

              <div className="sticky p-2 row-span-1 font-bold">
                Wed Jul 19
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Coffee and badge
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Welcoming ceremory
              </div>
              <div className="p-2 row-span-6 border-black border-2">
                Project Pitches &  mingling
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Lunch / Hacking
              </div>
              <div className="p-2 row-span-4 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Coffee Break
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Presentations / Unconference
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Slow Down
              </div>
              <div className="p-2 row-span-1 border-black border-2 border-dashed">
                Catch up w friends / Meet-up
              </div>

              <div className="sticky p-2 row-span-1 font-bold">
                Thu Jul 20
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Coffee + Morning Mingling
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Presentations / Unconference
              </div>
              <div className="p-2 row-span-5 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Lunch / Hacking
              </div>
              <div className="p-2 row-span-4 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Coffee Break
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Presentations / Unconference
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Slow Down
              </div>
              <div className="p-2 row-span-1">
              </div>

              <div className="sticky p-2 row-span-1 font-bold">
                Fri Jul 21
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Coffee + Morning Mingling
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Presentations / Unconference
              </div>
              <div className="p-2 row-span-5 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Lunch / Hacking
              </div>
              <div className="p-2 row-span-4 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Coffee Break
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Final wrap-up
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Closing
              </div>
              <div className="p-2 row-span-1 border-black border-2 border-dashed">
                Soiree
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-2/3 after:bg-gradient-160 from-almost-black from-60% to-sand-dark