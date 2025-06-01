import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { vi } from "date-fns/locale"
import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import PostTags from "@/components/post-tags"
import SharePost from "@/components/share-post"
import RelatedPosts from "@/components/related-posts"
import { Clock, Calendar } from "lucide-react"
import { Mdx } from "@/components/mdx-content"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Không tìm thấy bài viết - DIY Tech Blog",
    }
  }

  return {
    title: `${post.title} - DIY Tech Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["DIY Tech Blog"],
      tags: post.tags,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getAllPosts()
  const relatedPosts = allPosts
    .filter(
      (p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))),
    )
    .slice(0, 3)

  const formattedDate = format(new Date(post.date), "dd MMMM yyyy", { locale: vi })

  return (
    <div className="container px-4 py-8 mx-auto">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime} phút đọc
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={post.image || "/placeholder.svg?height=800&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <Mdx code={post.content} />
        </div>

        <div className="border-t border-b py-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <PostTags tags={post.tags} />
            <SharePost title={post.title} slug={post.slug} />
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}
    </div>
  )
}
