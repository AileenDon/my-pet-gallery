# Pet Gallery

A React and TypeScript application for displaying a gallery of pets with interactive features, including sorting, selecting, filtering. This project demonstrates effective use of React components, custom hooks, context for global state management, and routing with `react-router-dom`.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Technologies Used](#technologies-used)

## Features

- **Image Gallery**: Display a list of pet images with details like title, description, and creation date. Sort pets alphabetically (A-Z).
  <img width="1040" alt="Screenshot 2024-11-14 at 12 32 39 PM" src="https://github.com/user-attachments/assets/de9244df-a07a-45a9-a542-cd06fc23fe13">
- **Interactive Search**: Filter pets by title or description using a search bar.
  <img width="618" alt="Screenshot 2024-11-14 at 12 33 01 PM" src="https://github.com/user-attachments/assets/84e53ca0-03d0-4607-b05f-1ceb5ce05475">
- **Sort Functionality**: Sort pets alphabetically (Z-A).
  <img width="1049" alt="Screenshot 2024-11-14 at 12 32 45 PM" src="https://github.com/user-attachments/assets/022c7bb3-9678-4dde-8c8d-a0b2306f43ed">
- **Selection Controls**: Select individual pets, select all, and clear all selections.
  <img width="1038" alt="Screenshot 2024-11-14 at 1 00 17 PM" src="https://github.com/user-attachments/assets/296147ea-1921-42e3-8602-ecc8df660c8f">
- **Additional Pages**: Navigate between Home and About pages using `react-router-dom`.
- **Custom Hook**: Handle data fetching and loading state with a reusable custom hook.
- **Styled Components**: Styled using `styled-components` for a custom look and feel.

## Project Structure

- `src/`
  - `components/` - Reusable UI components
    - `ImageGallery.tsx` - Gallery wrapper component
    - `ImageCard.tsx` - Component to display individual pet information
  - `context/`
    - `PetContext.tsx` - Context for managing global state (selection)
  - `hooks/`
    - `usePets.ts` - Custom hook for fetching and managing pets data
  - `pages/`
    - `Home.tsx` - Home page with the pet gallery
    - `About.tsx` - About page
  - `data/`
    - `pets.json` - Local JSON file for mock pet data
  - `img/` - Folder containing pet images
  - `App.tsx` - Main application component with routing
  - `index.tsx` - Entry point for React application

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/pet-gallery.git
   cd pet-gallery
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

4. **Access the app**:
   Open http://localhost:3000 in your browser to view the app.

## Usage

### Home Page

The Home page displays a gallery of pets, with several interactive features:

- **Search**: Use the search bar to filter pets by typing keywords found in the title or description.
- **Sort**: Click the "Sort by Name A-Z" or "Sort by Name Z-A" buttons to arrange pets alphabetically.
- **Selection Controls**:
  - **Select All**: Click the "Select All" button to select all displayed pets.
  - **Clear Selection**: Click the "Clear Selection" button to deselect all selected pets.

### About Page

Navigate to the About page by clicking on the "About Me" link in the navigation menu. This page contains information about the application or its creator.

### Selecting and Downloading Images

To manage image selection:

1. Click on individual pet images to toggle selection.
2. Use the **"Select All"** button to select all displayed images.
3. Use the **"Clear Selection"** button to deselect all images.

### Customizing the JSON Data

To add or modify pets in the gallery:

1. Open `src/data/pets.json`.
2. Add or edit pet objects in the JSON array. Each pet object should contain:

   - `id`: A unique identifier for the pet.
   - `imageUrl`: The filename of the pet's image located in the `src/img` directory.
   - `title`: The title or name of the pet.
   - `description`: A brief description of the pet.
   - `createdAt`: A timestamp representing when the pet was added.

   Example JSON entry:

   ```json
   {
     "id": "3",
     "imageUrl": "image3.jpg",
     "title": "Snowball",
     "description": "A playful rabbit",
     "createdAt": "2024-11-03T10:00:00Z"
   }
   ```

## Technologies Used

- **React** with **TypeScript**: For building a robust, typed front-end application.
- **Styled-Components**: For styling components with scoped and dynamic styles.
- **React Router**: For handling navigation between pages.
- **React Context**: For managing global state (pet selection).
- **Custom Hooks**: For managing data fetching and loading state.
