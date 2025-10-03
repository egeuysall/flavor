'use client';
import { useState } from 'react';
import { RecipeForm } from './recipe-form';
import { RecipeCard } from './recipe-card';
import { getRecommendations } from '@/lib/recommendations';
import { recipes } from '@/lib/recipes';
import type { Recommendation } from '@/types/recipe';

export const Recommendations = () => {
  const [results, setResults] = useState<Recommendation[]>([]);

  const handleFormSubmit = (
    ingredients: string,
    cuisine: string,
    difficulty: string,
    maxTime: number
  ) => {
    const recommendations = getRecommendations(recipes, ingredients, cuisine, difficulty, maxTime);
    setResults(recommendations);
  };

  return (
    <div className="flex flex-col gap-12">
      <section className="w-full flex flex-col gap-md">
        <h2>Tarifini bul.</h2>
        <RecipeForm onSubmit={handleFormSubmit} />
      </section>
      <section className="w-full flex flex-col gap-md">
        <h2>Önerilen Seçimler</h2>
        {results.length > 0 && (
          <div className="w-full grid md:grid-cols-3 gap-md">
            {results.map((recommendation) => (
              <RecipeCard key={recommendation.recipe.id} recommendation={recommendation} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
