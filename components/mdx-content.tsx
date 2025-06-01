"use client"

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  return (
    <div className="mdx">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  )
}
