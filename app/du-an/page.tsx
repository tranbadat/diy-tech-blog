import type { Metadata } from "next"
import { getAllPosts } from "@/lib/mdx"
import PostCard from "@/components/post-card"
import SearchPosts from "@/components/search-posts"
import CategoryFilter from "@/components/category-filter"

export const metadata: Metadata = {
  title: "Dự án - DIY Tech Blog",
  description: "Khám phá các dự án DIY về công nghệ, Arduino, Raspberry Pi và lập trình.",
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const posts = await getAllPosts()

  const searchQuery = typeof searchParams.q === "string" ? searchParams.q : ""
  const categoryFilter = typeof searchParams.category === "string" ? searchParams.category : ""

  let filteredPosts = posts

  if (searchQuery) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  if (categoryFilter) {
    filteredPosts = filteredPosts.filter((post) => post.category.toLowerCase() === categoryFilter.toLowerCase())
  }

  // Extract unique categories from posts
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Dự án</h1>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-2/3">
            <SearchPosts initialQuery={searchQuery} />
          </div>
          <div className="w-full md:w-1/3">
            <CategoryFilter categories={categories} selectedCategory={categoryFilter} />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Không tìm thấy dự án</h2>
            <p className="text-muted-foreground">
              Không có dự án nào phù hợp với tiêu chí tìm kiếm của bạn. Hãy thử tìm kiếm với từ khóa khác.
            </p>
          </div>
        ) : (
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
