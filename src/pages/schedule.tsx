import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import LocalFont from 'next/font/local'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import React, { useMemo } from 'react'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })

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
    <main className="jungle">
      <div className="max-w-6xl mx-auto">
        <h2>
          Schedule
        </h2>

        <div style={{
          gridTemplateColumns: `repeat(${days.length + 1}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${hours.length + 1}, minmax(0, 1fr))`,
        }} className={`grid grid-flow-col-dense bg-white p-6`}>
          <div className="border-black border-2">Day</div>
          { hours.map((hour) => (<div key={hour} className="border-black border-2">{MinToMMSS(hour)}</div>)) }


          <div className="row-span-1 border-black border-2">
            Jul 5 / 12
          </div>
          <div className="row-span-2 border-black border-2">
          </div>
          <div className="row-span-6 border-black border-2">
          Warm-up session
          </div>
          <div className="row-span-13 border-black border-2">
          </div>

          <div className="row-span-1 border-black border-2">
            Wed Jul 19
          </div>
          <div className="row-span-2 border-black border-2">
            Coffee and badge
          </div>
          <div className="row-span-1 border-black border-2">
            Welcoming ceremory
          </div>
          <div className="row-span-6 border-black border-2">
            Project Pitches &  mingling
          </div>
          <div className="row-span-2 border-black border-2">
            Lunch / Hacking
          </div>
          <div className="row-span-4 border-black border-2">
            Hacking
          </div>
          <div className="row-span-1 border-black border-2">
            Coffee Break
          </div>
          <div className="row-span-1 border-black border-2">
            Hacking
          </div>
          <div className="row-span-2 border-black border-2">
            Presentations / Unconference
          </div>
          <div className="row-span-2 border-black border-2">
            Slow Down
          </div>

          <div className="row-span-1 border-black border-2">
            Thu Jul 20
          </div>
          <div className="row-span-2 border-black border-2">
            Coffee + Morning Mingling
          </div>
          <div className="row-span-2 border-black border-2">
            Presentations / Unconference
          </div>
          <div className="row-span-5 border-black border-2">
            Hacking
          </div>
          <div className="row-span-2 border-black border-2">
            Lunch / Hacking
          </div>
          <div className="row-span-4 border-black border-2">
            Hacking
          </div>
          <div className="row-span-1 border-black border-2">
            Coffee Break
          </div>
          <div className="row-span-1 border-black border-2">
            Hacking
          </div>
          <div className="row-span-2 border-black border-2">
            Presentations / Unconference
          </div>
          <div className="row-span-2 border-black border-2">
            Slow Down
          </div>

          <div className="row-span-1 border-black border-2">
            Fri Jul 21
          </div>
          <div className="row-span-2 border-black border-2">
            Coffee + Morning Mingling
          </div>
          <div className="row-span-2 border-black border-2">
            Presentations / Unconference
          </div>
          <div className="row-span-5 border-black border-2">
            Hacking
          </div>
          <div className="row-span-2 border-black border-2">
            Lunch / Hacking
          </div>
          <div className="row-span-4 border-black border-2">
            Hacking
          </div>
          <div className="row-span-1 border-black border-2">
            Coffee Break
          </div>
          <div className="row-span-1 border-black border-2">
            Hacking
          </div>
          <div className="row-span-2 border-black border-2">
            Final wrap-up
          </div>
          <div className="row-span-2 border-black border-2">
            Closing
          </div>


          {/* {
            days.map((day) => (
              <React.Fragment key={day}>
                <div className="col-span-1 flex flex-col">
                  Jul {day}
                </div>
                {
                  hours.map((hour) => (
                    <div key={hour}>{MinToMMSS(hour)}</div>
                  ))
                }
              </React.Fragment>
            ))
          } */}
        </div>
      </div>
    </main>
  )
}

// after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-2/3 after:bg-gradient-160 from-almost-black from-60% to-sand-dark