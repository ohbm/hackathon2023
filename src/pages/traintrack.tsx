import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsYoutube } from 'react-icons/bs'

import DouyuIcon from '../../public/douyu.svg'
import UnderConstruction from '../../public/under-construction-2.png'

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle no-jungle' } }
}

function parseCSV(csv: string): {[k: string]: string}[] {
  const pat = new RegExp(
    "(\\,|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\"\\,\\r\\n]*))",
    "gi"
  );
  const data: string[][] = [[]]

  let m
  while (m = pat.exec(csv)){
    const matched = m[1]
    if (matched.length && matched !== ",") {
      data.push([])
    }
    const val: string = m[2]?.replace(/""/g, "\"") || m[3]
    data[data.length - 1].push(val)
  }
  if (data[data.length - 1].length !== data[0].length) {
    data.pop()
  }
  return (
    data
      .slice(1)
      .map(r => Object.fromEntries(r.map((v, i) => [data[0][i], v])))
  )
}

export default function TrainTrack() {
  const categories = ["Open Access", "Open Data", "Open Code", "Reproducibility", "Research Integrity", "Research Culture"];
  const [content, setContent] = useState<{[k: string]: string}[] | null>(null)
  const [tags, setTags] = useState<string[] | null>(null)
  const [selectedContent, setSelectedContent] = useState<{[k: string]: string}[] | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[] | null>(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ohbm/osr2023/main/_data/educational.csv')
      .then(res => res.text())
      .then(parseCSV)
      .then((data: {[k: string]: string}[]) => {
        const tags = new Set<string>()
        data.forEach(d => {
          d.Tags.split(',').forEach(t => tags.add(t.trim()))
        })
        setTags(Array.from(tags))
        setContent(data)
      })
  }, [])

  useEffect(() => {
    if (!content) {
      return
    }
    if (!selectedTags) {
      setSelectedContent(content)
      return
    }
    setSelectedContent(
      content.filter(d => selectedTags.every(t => d.Tags.includes(t)))
    )
  }, [content, selectedTags])

  return (
    <main className={`
      relative fog
      after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-3/4
      after:bg-deep-sea after:bg-cover after:from-transparent after:to-sand after:bg-top-3px
    `}>
      <div className={`
        flex flex-col gap-8 items-center justify-center flex-grow
        relative min-h-screen p-12 py-16 md:p-16 lg:p-32 md:pb-64 md:pt-64
      `}>
        <div className="max-w-4xl">
          <h2>
            TrainTrack
          </h2>
          <p className="text-lg">
          Branhack is a great place to connect with like-minded individuals.
          This year we would like to create a study group-like environment to help participants who would like to obtain some hacking skills!
          </p>
          <p className="text-lg">Find some friends who want to learn about the same topic and help each other out—don’t be shy, reach out to other brainhackers in person or through Discord.</p>

          <p className="text-center my-8">
            {tags?.map(t => (
              <span key={t}
                onClick={() => {
                  if (selectedTags?.includes(t)) {
                    const reverseSelected = selectedTags.filter(s => s !== t);
                    setSelectedTags(reverseSelected.length ? reverseSelected : null)
                  } else {
                    setSelectedTags(selectedTags ? [...selectedTags, t] : [t])
                  }
                }}
                className={`
                  ${
                    selectedTags?.includes(t) ?
                      'bg-gold text-almost-black' :
                      'bg-almost-black text-gold'
                  }
                  cursor-pointer inline-block rounded-full select-none
                  text-sm font-semibold
                  px-3 py-1 mr-2 mb-2
                `}>
                {t}
              </span>
            ))}
          </p>

          {
            categories.map(c =>
              selectedContent?.filter(d => d.Tags.includes(c)).length ? (
                <div key={c} className="mb-8 ml-4 animate-fade">
                  <h3 className="text-3xl font-semibold mb-4">{c}</h3>
                  <ul className="list-none flex justify-stretch items-stretch flex-wrap">
                    {
                      selectedContent?.filter(d => d.Tags.includes(c)).map(d => (
                        <li key={d.Name} className="m-0 list-none w-full lg:w-1/3 flex">
                          <div className="w-full mr-4 mb-4 p-4 bg-white">
                            <h4 className="text-xl font-bold"><a href={d.Link}>{d.Name}</a></h4>
                            <p>{d.Description}</p>
                            <div className="p-3 flex justify-center gap-4">
                              {
                                d.Link && d.Link.includes("youtu") &&
                                <a href={d.Link}>
                                  <BsYoutube className="inline-block mr-1 text-4xl" />
                                </a>
                              }
                              {
                                d.Douyu &&
                                <a href={d.Douyu}>
                                  <Image
                                    priority
                                    src={DouyuIcon}
                                    className="inline-block mr-1 w-10"
                                    alt="Douyu"
                                  />
                                </a>
                              }
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ) : null
            )
          }

          {
            selectedContent !== null && !categories.some(c =>
              selectedContent?.filter(d => d.Tags.includes(c)).length
            ) ? (
              <div className="text-center font-2xl text-bold m-16">
                No results found.
              </div>
            ) : null
          }

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
