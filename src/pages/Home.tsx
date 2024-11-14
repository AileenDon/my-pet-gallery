import React, { useState, useEffect } from "react";
import usePets from "../hooks/usePets";
import { usePetContext } from "../context/PetContext";
import ImageCard from "../components/ImageCard";

// display the pet gallery with sorting, filtering, and selection features
const Home: React.FC = () => {
  const { pets, loading, error } = usePets();
  const { selectedPets, toggleSelectPet, selectAllPets, clearSelection } =
    usePetContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedPets, setSortedPets] = useState(pets);

  // Update sortedPets whenever the pets data changes
  useEffect(() => {
    setSortedPets(pets);
  }, [pets]);

  // sort pets alphabetically (A-Z)
  const sortPetsAZ = () => {
    const sorted = [...pets].sort((a, b) => a.title.localeCompare(b.title));
    setSortedPets(sorted);
  };

  // sort pets alphabetically (Z-A)
  const sortPetsZA = () => {
    const sorted = [...pets].sort((a, b) => b.title.localeCompare(a.title));
    setSortedPets(sorted);
  };

  // Filter sortedPets based on search term in title or description
  const filteredPets = sortedPets.filter(
    (pet) =>
      pet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Select all pets by setting all IDs in the selection context
  const handleSelectAll = () => selectAllPets(pets.map((pet) => pet.id));
  // Clear all selected pets
  const handleClearSelection = () => clearSelection();

  return (
    <div>
      <h1>Pet Gallery</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleClearSelection}>Clear Selection</button>
      <button onClick={sortPetsAZ}>Sort by Name A-Z</button>
      <button onClick={sortPetsZA}>Sort by Name Z-A</button>

      {/* loading or error messages */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* filtered list of ImageCard components */}
      <div>
        {filteredPets.map((pet) => (
          <ImageCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Home;
