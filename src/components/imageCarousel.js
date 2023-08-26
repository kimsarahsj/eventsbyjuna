import { useState } from 'react';
import Image from 'next/image'

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <Image
        src={images[currentIndex].src}
        alt={`Image ${currentIndex}`}
        width="0" 
        height="0"
        sizes="100vw"
        className="mx-auto h-auto w-full"
      />
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-8 h-full text-4xl text-white"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-8 h-full text-4xl text-white"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ImageCarousel;