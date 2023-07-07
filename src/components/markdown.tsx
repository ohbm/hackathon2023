import React from 'react'
import { unified } from 'unified'
import parse from 'remark-parse'
import html from 'remark-html'
import { useEffect, useState } from 'react'

export default function Markdown({ markdown, className, ...props }: { markdown: string } & React.HTMLProps<HTMLDivElement>) {
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    unified()
      .use(parse, { gfm: true })
      .use(html, {sanitize: true})
      .process(markdown)
      .then(f => setResult(f.toString()))
  }, [markdown])

  return <div className={`markdown ${className}`} dangerouslySetInnerHTML={{ __html: result ?? '' }} {...props} />
}
