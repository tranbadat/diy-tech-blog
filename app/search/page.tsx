import type { Metadata } from "next"
import { getAllPosts } from "@/lib/mdx"
import PostCard from "@/components/post-card"
import SearchPosts from "@/components/search-posts"

export const metadata: Metadata = {
  title: "Tìm kiếm - DIY Tech Blog",
  description: "Tìm kiếm các dự án DIY về công nghệ, Arduino, Raspberry Pi và lập trình.",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const posts = await getAllPosts()

  const searchQuery = typeof searchParams.q === "string" ? searchParams.q : ""

  let filteredPosts = posts

  if (searchQuery) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Tìm kiếm</h1>

      <div className="max-w-2xl mx-auto mb-8">
        <SearchPosts initialQuery={searchQuery} />
      </div>

      <div className="mb-8">
        {searchQuery ? (
          <p className="text-center mb-6">
            {filteredPosts.length === 0
              ? `Không tìm thấy kết quả nào cho "${searchQuery}"`
              : `Tìm thấy ${filteredPosts.length} kết quả cho "${searchQuery}"`}
          </p>
        ) : (
          <p className="text-center mb-6">Nhập từ khóa để tìm kiếm dự án</p>
        )}

        {filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
