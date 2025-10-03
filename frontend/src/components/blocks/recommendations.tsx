'use client';
import { useState, useEffect } from 'react';
import { RecipeForm } from './recipe-form';
import { RecipeCard } from './recipe-card';
import { getRecommendations } from '@/lib/recommendations';
import { recipes } from '@/lib/recipes';
import { saveRecommendations, loadRecommendations } from '@/lib/local-storage';
import type { Recommendation } from '@/types/recipe';

export const Recommendations = () => {
  const [results, setResults] = useState<Recommendation[]>([]);

  useEffect(() => {
    const savedRecommendations = loadRecommendations();
    if (savedRecommendations.length > 0) {
      setResults(savedRecommendations);
    }
  }, []);

  const handleFormSubmit = (
    ingredients: string,
    cuisine: string,
    difficulty: string,
    maxTime: number
  ) => {
    const recommendations = getRecommendations(recipes, ingredients, cuisine, difficulty, maxTime);
    setResults(recommendations);
    saveRecommendations(recommendations);
  };

  return (
    <div className="flex flex-col gap-12">
      <section className="w-full flex flex-col gap-md">
        <h2>Tarifini bul.</h2>
        <RecipeForm onSubmit={handleFormSubmit} />
      </section>
      <section className="w-full flex flex-col">
        <h2>Önerilen Seçimler</h2>
        {results.length > 0 ? (
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-md mt-md">
            {results.map((recommendation, index) => (
              <RecipeCard
                key={recommendation.recipe.id}
                recommendation={recommendation}
                className={
                  index === results.length - 1 && results.length % 2 === 1
                    ? 'md:col-span-2 lg:col-span-1'
                    : ''
                }
              />
            ))}
          </div>
        ) : (
          <p className="text-neutral-700 dark:text-neutral-300 text-small mt-2xs">
            Henüz öneri yok. Yukarıdan başlayın!
          </p>
        )}
      </section>
    </div>
  );
};
