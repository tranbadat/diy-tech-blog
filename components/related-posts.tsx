import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Post } from "@/lib/types"

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Bài viết liên quan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            <Link href={`/du-an/${post.slug}`} className="block">
              <div className="relative aspect-video">
                <Image
                  src={post.image || "/placeholder.svg?height=300&width=500"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
