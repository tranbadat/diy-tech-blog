import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { vi } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { Post } from "@/lib/types"

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const formattedDate = format(new Date(post.date), "dd MMMM yyyy", { locale: vi })

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-video md:aspect-auto md:h-full">
          <Image
            src={post.image || "/placeholder.svg?height=600&width=800"}
            alt={post.title}
            fill
            className="object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-primary/80 hover:bg-primary">{post.category}</Badge>
        </div>
        <CardContent className="flex flex-col justify-center p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime} phút đọc
            </span>
          </div>

          <Link href={`/du-an/${post.slug}`}>
            <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
          </Link>

          <p className="text-muted-foreground mb-6">{post.description}</p>

          <Button asChild className="w-fit">
            <Link href={`/du-an/${post.slug}`}>
              Đọc thêm <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
