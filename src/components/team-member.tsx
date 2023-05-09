import { BsTwitter, BsGithub } from 'react-icons/bs'

interface TeamMemberProps {
  circle: string;
  size: 1 | 2;
  name: string;
  photo: string;
  place: string;
  social?: {
    twitter?: string;
    github?: string;
  }
}

export default function TeamMember(props: TeamMemberProps) {
  const sizing = (
    props.size === 1 ?
    `
          h-60 w-60
          md:h-56 md:w-56
          lg:h-56 lg:w-56
          before:absolute before:content-[''] before:inset-10 md:before:inset-6 lg:before:inset-10
    ` :
    `
          h-60 w-60
          md:h-56 md:w-56
          lg:h-56 lg:w-56
          before:absolute before:content-[''] before:inset-6 md:before:inset-6 lg:before:inset-10
    `
  )
  return (
    <div className="text-center">
      <div
        style={{
          '--image-circle': `url(${props.circle}.png)`,
          '--image-photo': `url(team/${props.photo}.png)`,
        } as React.CSSProperties}
        className={
          sizing +
          `
            relative
            m-auto
            before:absolute before:content-['']
            before:bg-[image:var(--image-photo)] before:bg-cover before:bg-center before:rounded-full
            after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0
            after:bg-[image:var(--image-circle)] after:bg-cover
          `
        }
      >
      </div>
      <div className="mt-3 flex flex-col">
        <span className="font-theme font-bold text-3xl">{props.name}</span>
        <span className="font-primary text-2xl">{props.place}</span>
      </div>
      <div className="mt-3 flex justify-center gap-4 text-4xl">
        { props.social?.twitter && <a href={`https://twitter.com/${props.social.twitter}`}><BsTwitter /></a> }
        { props.social?.github && <a href={`https://github.com/${props.social.github}`}><BsGithub /></a> }
      </div>
    </div>

  )
}
