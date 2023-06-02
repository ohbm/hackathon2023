import '@/styles/globals.css'
import '@/styles/flames.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link';
import { Bebas_Neue, Roboto, Nothing_You_Could_Do } from 'next/font/google'
import { useEffect } from 'react';

import getConfig from 'next/config'
const {
  publicRuntimeConfig: {
    DISCORD_URL,
    TWITTER_URL,
    MATTERMOST_URL,
    GITHUB_URL,
    OSSIG_URL,
    MAPS_URL,
  }
} = getConfig()

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const nycd = Nothing_You_Could_Do({ weight: '400', subsets: ['latin'] })

function Header() {
  return (
    <>
      <Head>
        <title>OHBM Hackathon 2023</title>
      </Head>
      <header className="font-display w-full absolute top-0 left-0 h-fit right-0 justify-center px-1 py-2 bg-dirt text-gold uppercase z-50">
        <div className="flex w-full max-w-screen-xl px-4 mx-auto">
          <h1 className="text-3xl"><Link href="/">OHBM Hackathon</Link></h1>
          <nav className="flex-grow justify-end items-start md:items-center flex group text-lg lg:text-lg">
            <div className="hidden group-focus-within:flex md:flex gap-4 justify-end flex-col md:flex-row mb-4 mr-2 md:mb-0">
              <div><Link href="/code-of-conduct">Code of Conduct</Link></div>
              <div><Link href="/schedule">Schedule</Link></div>
              <div><Link href="/hacktrack">Hacktrack</Link></div>
              <div><Link href="/traintrack">Traintrack</Link></div>
              <div><Link href="/team">Team</Link></div>
            </div>
            <button className='md:hidden'>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
              </svg>
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="relative flex justify-center px-1 py-16 bg-dirt text-gold">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-screen-xl items-center justify-center text-center md:text-left md:pb-0">
        <h1 className="text-5xl">OHBM<br />Hackathon<br />2023</h1>
        <div className="py-6 md:py-0">
          <h2 className="font-display text-3xl mb-0 text-center md:text-left">Organizers</h2>
          <p className="font-theme text-2xl mb-0">Yu-Fang Yang</p>
          <p className="font-theme text-2xl mb-0">Anibal Sólon</p>
          <p className="text-xl mb-0">ohbmopenscience@gmail.com</p>
        </div>
        <nav className="font-primary flex md:gap-6 text-1xl justify-around">
          <div className="flex flex-col gap-1">
            <div><Link href="/code-of-conduct">Code of Conduct</Link></div>
            <div><Link href="/schedule">Schedule</Link></div>
            <div><Link href="/hacktrack">Hacktrack</Link></div>
            <div><Link href="/traintrack">Traintrack</Link></div>
            <div><Link href="/team">Team</Link></div>
          </div>
          <div className="flex flex-col gap-1">
            <div><a href={DISCORD_URL}>Discord</a></div>
            <div><a href={TWITTER_URL}>Twitter</a></div>
            <div><a href={MATTERMOST_URL}>Mattermost</a></div>
            <div><a href={OSSIG_URL}>OSSIG</a></div>
            <div><a href={GITHUB_URL}>Github</a></div>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = pageProps.bodyClassName
  })
  return (
    <>
      <style jsx global>
      {`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
          --bebas-font: ${bebas.style.fontFamily};
          --nycd-font: ${nycd.style.fontFamily};
        }
      `}
      </style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
