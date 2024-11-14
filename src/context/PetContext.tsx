import React, { createContext, useContext, useState } from "react";

// structure of the context's values and functions
interface PetContextProps {
  selectedPets: string[];
  toggleSelectPet: (id: string) => void;
  selectAllPets: (ids: string[]) => void;
  clearSelection: () => void;
}

const PetContext = createContext<PetContextProps | undefined>(undefined);

// PetProvider component to manage global state for selected pets
export const PetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // track selected pet IDs
  const [selectedPets, setSelectedPets] = useState<string[]>([]);

  // toggle a pet's selection state
  const toggleSelectPet = (id: string) => {
    setSelectedPets((prev) =>
      prev.includes(id) ? prev.filter((petId) => petId !== id) : [...prev, id]
    );
  };

  // select all pets by setting all IDs in the state
  const selectAllPets = (ids: string[]) => {
    setSelectedPets(ids);
  };

  // clear all selections by resetting the state
  const clearSelection = () => {
    setSelectedPets([]);
  };

  // Provide the context values and functions to child components
  return (
    <PetContext.Provider
      value={{ selectedPets, toggleSelectPet, selectAllPets, clearSelection }}
    >
      {children}
    </PetContext.Provider>
  );
};

// access the PetContext in child components
export const usePetContext = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePetContext must be used within a PetProvider");
  }
  return context;
};
