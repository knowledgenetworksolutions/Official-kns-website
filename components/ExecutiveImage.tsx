'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Users } from 'lucide-react'

export default function ExecutiveImage({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  const handleImgError = () => {
    if (!imgError) {
      const basePath = src.replace(/\.(jpg|jpeg|png|webp)$/i, '')
      const extensions = ['.jpg', '.jpeg', '.png', '.webp']
      const currentExt = src.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '.jpg'
      const otherExts = extensions.filter(ext => ext !== currentExt)

      if (otherExts.length > 0) {
        setImgSrc(basePath + otherExts[0])
      } else {
        setImgError(true)
      }
    }
  }

  if (imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-mauve-light to-mauve/20">
        <div className="text-center p-4">
          <Users className="w-16 h-16 text-mauve mx-auto mb-2" />
          <p className="text-mauve font-semibold">{alt}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        quality={85}
        onLoadingComplete={(result) => {
          if (result.naturalWidth === 0) handleImgError()
        }}
        onError={handleImgError}
      />
    </div>
  )
}
