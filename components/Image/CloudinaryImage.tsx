import React from 'react';
import Image from 'next/image';

interface ImageProps {
  url: string;
  width: number;
  height?: number;
  alt?: string;
}

const CloudinaryImage: React.FC<ImageProps> = ({ url, width, height, alt }) => {
  const cloudinaryUrl = `https://res.cloudinary.com/combariza/image/upload/w_${width},h_${height},c_limit/${encodeURIComponent(url.replace(/^https?:\/\//, ''))}`;
  const altText = alt || 'Image';

  return (
    <Image
      src={cloudinaryUrl}
      alt={altText}
      width={width}
      height={height}
      layout="responsive"
    />
  );
};

export { CloudinaryImage };