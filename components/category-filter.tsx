"use client"

import { useRouter, usePathname } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory?: string
}

export default function CategoryFilter({ categories, selectedCategory }: CategoryFilterProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(window.location.search)

    if (value) {
      params.set("category", value)
    } else {
      params.delete("category")
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Select value={selectedCategory || "all"} onValueChange={handleCategoryChange}>
      <SelectTrigger>
        <SelectValue placeholder="Lọc theo danh mục" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Tất cả danh mục</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category.toLowerCase()}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
