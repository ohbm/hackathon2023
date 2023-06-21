interface FlamesProps {
  className?: string | undefined
}

export default function Flames(props: FlamesProps) {
  return (
    <div className={`${props.className}`}>
      <div className={`fire`}>
        {
          Array.from(Array(50).keys()).map((i) => (
            <div key={i} className="particle"></div>
          ))
        }
      </div>
    </div>
  )
}