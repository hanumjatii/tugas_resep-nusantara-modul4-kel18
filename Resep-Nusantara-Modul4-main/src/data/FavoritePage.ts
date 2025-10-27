// src/pages/FavoritePage.jsx
import RecipeGrid from "../components/makanan/RecipeGrid";

export default function FavoritePage({ favorites, onSelect, onToggleFavorite }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-pink-700 mb-6">
          Resep Favorit ❤️
        </h1>

        {favorites.length > 0 ? (
          <RecipeGrid
            recipes={favorites}
            onSelect={onSelect}
            onToggleFavorite={onToggleFavorite}
            favorites={favorites}
            type="makanan"
          />
        ) : (
          <p className="text-center text-gray-500 mt-20">
            Belum ada resep favorit. Klik ikon ❤️ di kartu resep untuk menambahkannya!
          </p>
        )}
      </main>
    </div>
  );
}

