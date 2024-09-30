import Image from 'next/image'
import { useState } from 'react'
import { Layout } from '@/components/Layout'

interface BlogPostProps {
  title: string
  subtitle: string
  author: string
  date: string
  content: string
  images: string[]
}

export default function BlogTemplate({ title, subtitle, author, date, content, images }: BlogPostProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Layout>
        <article className="max-w-4xl mx-auto bg-whiteser shadow-lg rounded-lg overflow-hidden">
      <header className="bg-ser text-white p-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <h2 className="text-xl text-lightser mb-4">{subtitle}</h2>
        <div className="flex justify-between items-center text-sm">
          <span>Por: {author}</span>
          <time>{date}</time>
        </div>
      </header>

      <div className="relative h-96 bg-darkser">
        {images &&images.length > 0 && (
          <>
            <Image
              src={images[currentImage]}
              alt={`Imagen ${currentImage + 1} del blog`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex justify-between items-center">
              <button
                onClick={prevImage}
                className="bg-black bg-opacity-50 text-white p-2 m-4 rounded-full hover:bg-opacity-75 transition"
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="bg-black bg-opacity-50 text-white p-2 m-4 rounded-full hover:bg-opacity-75 transition"
              >
                &#8594;
              </button>
            </div>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
              {currentImage + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <div className="prose max-w-none">
        {content ? ( 
            content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-4 text-ser">{paragraph.slice(3)}</h2>
                } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-ser">{paragraph.slice(4)}</h3>
                } else {
                return <p key={index} className="mb-4 text-darkser">{paragraph}</p>
                }
            }) 
            ) : (
            <p className="mb-4 text-darkser">No content available.</p> 
            )}

        </div>
      </div>

      <footer className="bg-lightser text-white p-4 mt-6">
        <div className="flex justify-between items-center">
          <span>Compartir:</span>
          <div className="space-x-4">
            <button className="hover:text-ser transition">Twitter</button>
            <button className="hover:text-ser transition">Facebook</button>
            <button className="hover:text-ser transition">LinkedIn</button>
          </div>
        </div>
      </footer>
    </article>
    </Layout>
  )
}