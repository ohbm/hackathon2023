import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { useEffect, useState } from 'react'

export default function Markdown({ markdown, className, ...props }: { markdown: string } & React.HTMLProps<HTMLDivElement>) {
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(markdown)
      .then(f => setResult(f.toString()))
  }, [markdown])

  return <div className={`markdown ${className}`} dangerouslySetInnerHTML={{ __html: result ?? '' }} {...props} />
}
