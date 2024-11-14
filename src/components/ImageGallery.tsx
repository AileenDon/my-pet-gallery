import React from "react";
import ImageCard from "./ImageCard";

// structure of a Pet object
interface Pet {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  createdAt: string;
}

// structure for the ImageGallery component
interface ImageGalleryProps {
  pets: Pet[];
}

// render a list of ImageCard components for each pet
const ImageGallery: React.FC<ImageGalleryProps> = ({ pets }) => (
  <div>
    {pets.map((pet) => (
      <ImageCard key={pet.id} pet={pet} />
    ))}
  </div>
);

export default ImageGallery;
