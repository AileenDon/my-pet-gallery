import React from "react";
import styled from "styled-components";
import { usePetContext } from "../context/PetContext";

//structure of a Pet object
interface Pet {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  createdAt: string;
}

// ImageCard component to display pet information
const ImageCard: React.FC<{ pet: Pet }> = ({ pet }) => {
  // Access selected pets and the toggle selection function from the context
  const { selectedPets, toggleSelectPet } = usePetContext();

  return (
    // Container for the card with a click event to toggle selection
    <Card onClick={() => toggleSelectPet(pet.id)}>
      <SquareImage src={require(`../img/${pet.imageUrl}`)} alt={pet.title} />
      <h3>{pet.title}</h3>
      <p>{pet.description}</p>
      <p>{new Date(pet.createdAt).toLocaleDateString()}</p>
      <input type="checkbox" checked={selectedPets.includes(pet.id)} readOnly />
    </Card>
  );
};

export default ImageCard;

// Styled Components

// card container
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 8px;
  display: inline-block;
  text-align: center;
`;

//display image as a square with cropped fit

const SquareImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;
