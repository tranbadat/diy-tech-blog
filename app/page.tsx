import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/mdx"
import FeaturedPost from "@/components/featured-post"
import PostCard from "@/components/post-card"
import NewsletterSignup from "@/components/newsletter-signup"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "DIY Tech Blog - Trang chủ",
  description: "Blog chia sẻ các dự án DIY về công nghệ, Arduino, Raspberry Pi và lập trình cho học sinh, sinh viên.",
}

export default async function Home() {
  const posts = await getAllPosts()
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 4)

  return (
    <div className="container px-4 py-8 mx-auto">
      <section className="mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">DIY Tech Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá các dự án DIY về công nghệ, Arduino, Raspberry Pi và lập trình dành cho học sinh, sinh viên.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Bắt đầu hành trình DIY của bạn</h2>
            <p className="text-muted-foreground mb-6">
              Chào mừng bạn đến với blog DIY công nghệ! Tại đây, chúng tôi chia sẻ các dự án thú vị, hướng dẫn chi tiết
              và kiến thức hữu ích để giúp bạn tạo ra những sản phẩm công nghệ của riêng mình.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/du-an">
                  Khám phá dự án <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/gioi-thieu">Tìm hiểu thêm</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              // src="/placeholder.svg?height=600&width=800"
              src={"/home/diy-tech-blog-2.jpg?height=600&width=800"}
              alt="DIY Tech Projects"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Bài viết nổi bật</h2>
          <FeaturedPost post={featuredPost} />
        </section>
      )}

      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Bài viết gần đây</h2>
          <Button variant="ghost" asChild>
            <Link href="/du-an">
              Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Danh mục dự án</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Arduino", "Raspberry Pi", "Lập trình", "Điện tử"].map((category) => (
              <Link
                key={category}
                href={`/du-an?category=${category.toLowerCase().replace(" ", "-")}`}
                className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  )
}
