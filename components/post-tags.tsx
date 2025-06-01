import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface PostTagsProps {
  tags: string[]
}

export default function PostTags({ tags }: PostTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link key={tag} href={`/du-an?tag=${tag}`}>
          <Badge variant="outline" className="hover:bg-muted">
            #{tag}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
