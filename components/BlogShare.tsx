'use client'

import { Share2 } from 'lucide-react'

import { useToast } from '@/context/ToastContext'

interface BlogShareProps {
  title: string
  excerpt: string
}

export default function BlogShare({ title, excerpt }: BlogShareProps) {
  const { showToast } = useToast()

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error))
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      showToast('Link copied to clipboard!', 'success')
    }
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-600 font-semibold">Share:</span>
      <div className="flex gap-3">
        <button
          onClick={handleShare}
          className="p-2 bg-mauve-light/20 text-mauve rounded-lg hover:bg-mauve-light/30 transition-colors"
          aria-label="Share article"
        >
          <Share2 size={20} />
        </button>
      </div>
    </div>
  )
}
