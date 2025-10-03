import type { Recipe } from '@/types/recipe';
import type { Recommendation } from '@/types/recipe';

export function getRecommendations(
  recipes: Recipe[],
  userIngredients: string,
  cuisine: string,
  difficulty: string,
  maxCookingTime: number
): Recommendation[] {
  const ingredientsArray = userIngredients
    .toLowerCase()
    .split(',')
    .map((i) => i.trim())
    .filter((i) => i.length > 0);

  let filtered = recipes.filter((recipe) => {
    const cuisineMatch = cuisine === 'any' || recipe.cuisine === cuisine;
    const difficultyMatch = difficulty === 'any' || recipe.difficulty === difficulty;
    const timeMatch = maxCookingTime === 0 || recipe.cookingTime <= maxCookingTime;

    return cuisineMatch && difficultyMatch && timeMatch;
  });

  // Score by ingredient match
  const scored = filtered.map((recipe) => {
    const recipeIngs = recipe.ingredients.map((i) => i.toLowerCase());

    const matchCount = recipeIngs.filter((recipeIng) =>
      ingredientsArray.some((userIng) => recipeIng.includes(userIng) || userIng.includes(recipeIng))
    ).length;

    const matchPercentage = recipeIngs.length > 0 ? (matchCount / recipeIngs.length) * 100 : 0;

    return {
      recipe,
      matchPercentage,
      matchCount,
    };
  });

  return scored.sort((a, b) => b.matchPercentage - a.matchPercentage).slice(0, 3);
}
