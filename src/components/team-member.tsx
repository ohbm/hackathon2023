import { BsTwitter, BsGithub } from 'react-icons/bs'

import Circle from '../../public/circle.png'
import Circle1 from '../../public/circle-1.png'
import Circle2 from '../../public/circle-2.png'

interface TeamMemberProps extends React.HTMLProps<HTMLDivElement> {
  circle: string;
  name: string;
  photo: string;
  place: string;
  social?: {
    twitter?: string;
    github?: string;
  }
}

export default function TeamMember(props: TeamMemberProps) {
  const circle = {
    'circle': Circle.src,
    'circle-1': Circle1.src,
    'circle-2': Circle2.src,
  }[props.circle] || Circle1.src;
  return (
    <div className="text-center" style={props.style}>
      <div
        className={
          `
            h-44 w-44
            md:h-56 md:w-56
            lg:h-56 lg:w-56
            before:absolute before:content-[''] before:inset-6 md:before:inset-6 lg:before:inset-10
            relative
            m-auto
            before:bg-[image:var(--image-photo)] before:bg-cover before:bg-center before:rounded-full
            after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0
            after:bg-[image:var(--image-circle)] after:bg-cover
          `
        }
        style={{
          '--image-circle': `url(${circle})`,
          '--image-photo': `url(${props.photo})`,
        } as React.CSSProperties}
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
