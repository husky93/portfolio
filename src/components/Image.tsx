import React, { useEffect, useState } from 'react';

interface ImageProps {
  alt: string;
  imgName: string;
}

const ImageComponent: React.FC<ImageProps> = ({ alt, imgName }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const loadImage = async (): Promise<void> => {
      const imgModule: string = await import(`../assets/images/${imgName}.png`)
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
    };

    loadImage();
  }, [imgName]);

  return (
    <div>
      <img alt={alt} src={imgSrc} />
    </div>
  );
};

export default ImageComponent;
