import React, { useEffect, useState } from 'react';

interface ImageProps {
  alt: string;
  imgName: string;
}

const ImageComponent: React.FC<ImageProps> = ({ alt, imgName }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async (): Promise<void> => {
      const imgModule: string = await import(`../assets/images/${imgName}.webp`)
        .then((module) => module.default)
        .catch((err) =>
          console.error('Error while trying to import image' + err)
        );
      const image: HTMLImageElement = await new Promise((resolve) => {
        const imgNode: HTMLImageElement = new Image();

        imgNode.onload = () => {
          resolve(imgNode);
        };

        imgNode.src = imgModule;
      });
      setImgSrc(image.src);
      setLoading(false);
    };

    loadImage();
  }, [imgName]);

  return (
    <img
      style={{ display: 'block', borderRadius: '0.25rem' }}
      alt={alt}
      src={imgSrc}
    />
  );
};

export default ImageComponent;
