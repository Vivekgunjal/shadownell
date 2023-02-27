'use client';
import Image from 'next/image';

export default function ExploreCard() {
  return (
    <div>
        <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="/owl.png"
          alt="Owl background image"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
      </div>
      <div className="relative z-10">
        <button className="bg-white text-black px-8 py-3 rounded-full shadow-lg">
          Go
        </button>
      </div>
    </div>
    </div>
  )
}
