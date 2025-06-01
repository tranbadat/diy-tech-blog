import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Liên hệ - DIY Tech Blog",
  description: "Liên hệ với chúng tôi để đặt câu hỏi, góp ý hoặc hợp tác.",
}

export default function ContactPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Liên hệ</h1>

      <div className="max-w-2xl mx-auto">
        <p className="text-muted-foreground mb-8 text-center">
          Bạn có câu hỏi, góp ý hoặc muốn hợp tác? Hãy điền vào form bên dưới hoặc liên hệ trực tiếp qua các kênh của
          chúng tôi.
        </p>

        <ContactForm />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Thông tin liên hệ khác</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">contact@diytechblog.com</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Mạng xã hội</h3>
              <p className="text-muted-foreground">Facebook, Twitter, Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
