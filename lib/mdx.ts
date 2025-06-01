import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Post, PostMeta } from "./types"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"

const postsDirectory = path.join(process.cwd(), "content/posts")

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    // Check if the path exists and is a file
    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
      console.error(`File not found or is not a file: ${fullPath}`)
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Process the markdown content to HTML
    const processedContent = await remark().use(html, { sanitize: false }).use(remarkGfm).process(content)

    const contentHtml = processedContent.toString()

    const post: Post = {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image,
      content: contentHtml,
      category: data.category,
      tags: data.tags || [],
      readingTime: calculateReadingTime(content),
    }

    return post
  } catch (error) {
    console.error(`Error getting post by slug: ${slug}`, error)
    return null
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    // Ensure the directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
      createSamplePosts()
      console.log("Created posts directory and sample posts")
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => {
        // Check if it's a file and has .mdx extension
        const fullPath = path.join(postsDirectory, fileName)
        return fileName.endsWith(".mdx") && fs.statSync(fullPath).isFile()
      })
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "")
        const fullPath = path.join(postsDirectory, fileName)

        try {
          const fileContents = fs.readFileSync(fullPath, "utf8")
          const { data, content } = matter(fileContents)

          return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            image: data.image,
            category: data.category,
            tags: data.tags || [],
            readingTime: calculateReadingTime(content),
          }
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error)
          return null
        }
      })
      .filter(Boolean) as PostMeta[] // Filter out null values

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error("Error getting all posts", error)
    return []
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

function createSamplePosts() {
  try {
    const samplePosts = [
      {
        slug: "arduino-led-blinker",
        title: "Dự án Arduino đầu tiên: LED nhấp nháy",
        date: "2023-05-15",
        description:
          "Hướng dẫn chi tiết cách tạo dự án Arduino đầu tiên với LED nhấp nháy, phù hợp cho người mới bắt đầu.",
        image: "/placeholder.svg?height=600&width=800",
        category: "Arduino",
        tags: ["arduino", "led", "beginner", "electronics"],
        content: `
# Dự án Arduino đầu tiên: LED nhấp nháy

Trong bài viết này, chúng ta sẽ tìm hiểu cách tạo một dự án Arduino đơn giản nhất: LED nhấp nháy. Đây là dự án "Hello World" trong thế giới Arduino và là điểm khởi đầu tuyệt vời cho người mới.

## Thiết bị cần thiết

1. Arduino Uno (hoặc bất kỳ board Arduino nào)
2. Dây cáp USB
3. LED (bất kỳ màu nào)
4. Điện trở 220 ohm
5. Dây jumper

## Sơ đồ mạch

Kết nối LED với chân 13 của Arduino và GND thông qua điện trở 220 ohm.

## Code

\`\`\`
// Arduino LED Blinker
// Chương trình đơn giản để nhấp nháy LED

void setup() {
  // Khởi tạo chân 13 là OUTPUT
  pinMode(13, OUTPUT);
}

void loop() {
  // Bật LED
  digitalWrite(13, HIGH);
  // Đợi 1 giây
  delay(1000);
  // Tắt LED
  digitalWrite(13, LOW);
  // Đợi 1 giây
  delay(1000);
}
\`\`\`

## Giải thích code

1. \`setup()\` - Hàm này chạy một lần khi Arduino khởi động. Chúng ta thiết lập chân 13 là OUTPUT.
2. \`loop()\` - Hàm này chạy liên tục sau khi \`setup()\` hoàn thành:
   - \`digitalWrite(13, HIGH)\` - Bật LED
   - \`delay(1000)\` - Đợi 1 giây (1000 mili giây)
   - \`digitalWrite(13, LOW)\` - Tắt LED
   - \`delay(1000)\` - Đợi 1 giây trước khi lặp lại

## Cách thực hiện

1. Lắp ráp mạch theo hướng dẫn
2. Kết nối Arduino với máy tính qua cáp USB
3. Mở phần mềm Arduino IDE
4. Sao chép và dán code vào
5. Nhấn nút "Upload" để tải code lên Arduino

Sau khi hoàn thành, bạn sẽ thấy LED nhấp nháy với chu kỳ 2 giây (bật 1 giây, tắt 1 giây).

## Nâng cao

Sau khi làm quen với dự án cơ bản này, bạn có thể thử:

1. Thay đổi thời gian nhấp nháy
2. Thêm nhiều LED hơn
3. Tạo các mẫu nhấp nháy khác nhau

## Kết luận

Dự án đơn giản này là bước đầu tiên tuyệt vời để bắt đầu hành trình với Arduino. Từ đây, bạn có thể tiếp tục với các dự án phức tạp hơn như điều khiển nhiều LED, sử dụng cảm biến, tạo âm thanh, và nhiều thứ khác.

Hãy thử nghiệm và chia sẻ kết quả của bạn trong phần bình luận!
        `,
      },
      // Other sample posts remain the same
    ]

    // Ensure the content/posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }

    // Write each sample post to a file
    samplePosts.forEach((post) => {
      try {
        const { slug, title, date, description, image, category, tags, content } = post
        const frontMatter = `---
title: "${title}"
date: "${date}"
description: "${description}"
image: "${image || ""}"
category: "${category}"
tags: ${JSON.stringify(tags)}
---`

        const fullContent = `${frontMatter}\n\n${content}`
        const filePath = path.join(postsDirectory, `${slug}.mdx`)
        fs.writeFileSync(filePath, fullContent)
        console.log(`Created sample post: ${filePath}`)
      } catch (error) {
        console.error(`Error creating sample post ${post.slug}:`, error)
      }
    })
  } catch (error) {
    console.error("Error in createSamplePosts:", error)
  }
}
