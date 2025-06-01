"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface SharePostProps {
  title: string
  slug: string
}

export default function SharePost({ title, slug }: SharePostProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const baseUrl =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}`
      : "https://diy-tech-blog.vercel.app"

  const url = `${baseUrl}/du-an/${slug}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)

    toast({
      title: "Đã sao chép!",
      description: "Đường dẫn đã được sao chép vào clipboard.",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
    )
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Chia sẻ:</span>
      <Button variant="ghost" size="icon" onClick={shareOnFacebook} title="Chia sẻ lên Facebook">
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Facebook</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={shareOnTwitter} title="Chia sẻ lên Twitter">
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Twitter</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={shareOnLinkedIn} title="Chia sẻ lên LinkedIn">
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">LinkedIn</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={handleCopyLink} title="Sao chép liên kết">
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  )
}
