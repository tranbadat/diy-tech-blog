export interface Post {
  slug: string
  title: string
  date: string
  description: string
  image?: string
  content: string
  category: string
  tags: string[]
  readingTime: number
}

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  image?: string
  category: string
  tags: string[]
  readingTime: number
}
