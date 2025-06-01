import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { vi } from "date-fns/locale"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import type { Post } from "@/lib/types"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = format(new Date(post.date), "dd MMM yyyy", { locale: vi })

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Link href={`/du-an/${post.slug}`} className="relative block aspect-video">
        <Image
          src={post.image || "/placeholder.svg?height=400&width=600"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-primary/80 hover:bg-primary">{post.category}</Badge>
      </Link>
      <CardContent className="pt-4 flex-grow">
        <Link href={`/du-an/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3 mb-2">{post.description}</p>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground border-t pt-4">
        <div className="flex items-center gap-4 w-full">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1 ml-auto">
            <Clock className="h-4 w-4" />
            {post.readingTime} phút
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
