'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

interface GoBackButtonProps {
  className?: string
  iconSize?: number
}

export default function GoBackButton({ className = "text-mauve hover:text-mauve-dark", iconSize = 16 }: GoBackButtonProps) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center transition-colors ${className}`}
    >
      <ArrowLeft size={iconSize} className="mr-2" />
      Go Back
    </button>
  )
}
