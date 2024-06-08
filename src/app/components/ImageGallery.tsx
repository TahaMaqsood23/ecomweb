"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppprops {
  images: any;
}

const ImageGallery = ({ images }: iAppprops) => {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-white">
            <Image
              src={urlFor(image).url()}
              width={300}
              height={300}
              alt="photo"
              className="w-full h-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-white lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="photo"
          width={500}
          height={500}
          className="h-full w-full object-contain object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
