import type { Recommendation } from '@/types/recipe';
import { Card, C } from '../ui/card';

export const RecipeCard = ({ recommendation }: { recommendation: Recommendation }) => {
  const { recipe, matchPercentage } = recommendation;

  return (
    <article className="flex flex-col gap-sm p-md border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <p className="font-semibold">{recipe.name}</p>
      </div>

      <div className="flex flex-wrap gap-xs">
        {recipe.ingredients.map((ingredient, index) => (
          <span key={index} className="px-2 py-1 text-xs bg-gray-100 rounded">
            {ingredient}
          </span>
        ))}
      </div>

      <div className="flex gap-md text-sm text-gray-600 mt-auto pt-sm border-t border-gray-100">
        <span>{recipe.cookingTime} dk</span>
        <span className="capitalize">{recipe.difficulty}</span>
        <span className="capitalize">{recipe.cuisine}</span>
      </div>
    </article>
  );
};
