'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const promotions = [
  { id: 1, image: 'https://picsum.photos/id/1043/800/200', title: 'Summer Sale', description: 'Up to 30% off on beach resorts' },
  { id: 2, image: 'https://picsum.photos/id/1037/800/200', title: 'City Breaks', description: 'Explore vibrant cities from $299' },
  { id: 3, image: 'https://picsum.photos/id/1040/800/200', title: 'Adventure Awaits', description: 'Book your hiking trip now' },
]

const PromotionalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length)
  }

  return (
    <div className="relative w-full h-[200px] my-8">
      {promotions.map((promo, index) => (
        <div
          key={promo.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={promo.image}
            alt={promo.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">{promo.title}</h2>
              <p className="text-xl">{promo.description}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-300"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

export default PromotionalSlider

