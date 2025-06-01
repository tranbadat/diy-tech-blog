import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Giới thiệu - DIY Tech Blog",
  description: "Tìm hiểu thêm về DIY Tech Blog và sứ mệnh chia sẻ kiến thức công nghệ cho học sinh, sinh viên.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Giới thiệu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=600&width=800" alt="DIY Tech Blog" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Về DIY Tech Blog</h2>
          <p className="text-muted-foreground mb-4">
            DIY Tech Blog được tạo ra với mục đích chia sẻ kiến thức và đam mê về công nghệ, đặc biệt là các dự án DIY
            (Do It Yourself) dành cho học sinh, sinh viên và những người yêu thích công nghệ.
          </p>
          <p className="text-muted-foreground">
            Chúng tôi tin rằng việc học thông qua thực hành là cách tốt nhất để tiếp thu kiến thức và phát triển kỹ
            năng. Thông qua các bài viết hướng dẫn chi tiết, chúng tôi hy vọng sẽ truyền cảm hứng và hỗ trợ bạn trong
            hành trình khám phá thế giới công nghệ.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sứ mệnh của chúng tôi</h2>
        <p className="text-muted-foreground mb-4">
          Sứ mệnh của DIY Tech Blog là cung cấp nội dung chất lượng cao, dễ hiểu và thực tế về các dự án công nghệ DIY,
          giúp học sinh, sinh viên và những người mới bắt đầu có thể tiếp cận và thực hiện các dự án một cách dễ dàng.
        </p>
        <p className="text-muted-foreground">Chúng tôi cam kết:</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground">
          <li>Cung cấp hướng dẫn chi tiết, rõ ràng và dễ hiểu</li>
          <li>Chia sẻ kiến thức và kinh nghiệm thực tế</li>
          <li>Cập nhật các xu hướng và công nghệ mới</li>
          <li>Xây dựng cộng đồng học tập và chia sẻ</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Các chủ đề chính</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Arduino", description: "Các dự án và hướng dẫn về Arduino" },
            { title: "Raspberry Pi", description: "Khám phá tiềm năng của Raspberry Pi" },
            { title: "Lập trình", description: "Học lập trình thông qua các dự án thực tế" },
            { title: "Điện tử", description: "Kiến thức cơ bản và nâng cao về điện tử" },
          ].map((topic, index) => (
            <div key={index} className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
              <p className="text-muted-foreground">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Liên hệ</h2>
        <p className="text-muted-foreground mb-4">
          Nếu bạn có câu hỏi, góp ý hoặc muốn hợp tác, đừng ngần ngại liên hệ với chúng tôi qua:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Email: contact@diytechblog.com</li>
          <li>Mạng xã hội: Facebook, Twitter, Instagram</li>
          <li>
            Hoặc sử dụng{" "}
            <a href="/lien-he" className="text-primary hover:underline">
              form liên hệ
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
