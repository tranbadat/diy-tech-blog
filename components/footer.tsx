import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">DIY Tech Blog</h2>
            <p className="text-muted-foreground mb-4">
              Blog chia sẻ các dự án DIY về công nghệ, Arduino, Raspberry Pi và lập trình cho học sinh, sinh viên.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/du-an" className="text-muted-foreground hover:text-primary">
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="text-muted-foreground hover:text-primary">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-muted-foreground hover:text-primary">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Danh mục</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/du-an?category=arduino" className="text-muted-foreground hover:text-primary">
                  Arduino
                </Link>
              </li>
              <li>
                <Link href="/du-an?category=raspberry-pi" className="text-muted-foreground hover:text-primary">
                  Raspberry Pi
                </Link>
              </li>
              <li>
                <Link href="/du-an?category=lap-trinh" className="text-muted-foreground hover:text-primary">
                  Lập trình
                </Link>
              </li>
              <li>
                <Link href="/du-an?category=dien-tu" className="text-muted-foreground hover:text-primary">
                  Điện tử
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} DIY Tech Blog. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
