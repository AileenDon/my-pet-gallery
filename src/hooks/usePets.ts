import { useState, useEffect } from "react";
import petsData from "../data/pets.json";

interface Pet {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  createdAt: string;
}

const usePets = () => {
  // store the list of pets
  const [pets, setPets] = useState<Pet[]>([]);
  // track the loading status
  const [loading, setLoading] = useState<boolean>(true);
  // handle any errors that occur during fetching
  const [error, setError] = useState<string | null>(null);

  // useEffect to load pets data when the component mounts
  useEffect(() => {
    const fetchPets = async () => {
      try {
        setPets(petsData);
      } catch (error) {
        // if fetching fails
        setError("Failed to fetch pets");
      } finally {
        // Set loading to false after data is loaded or on error
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  return { pets, loading, error };
};

export default usePets;
