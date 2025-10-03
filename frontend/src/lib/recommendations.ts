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

  const filtered = recipes.filter((recipe) => {
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

  // Sort by match percentage first
  const sorted = scored.sort((a, b) => b.matchPercentage - a.matchPercentage);

  // Shuffle recipes with the same match percentage to add randomness
  const shuffled: typeof sorted = [];
  let currentGroup: typeof sorted = [];
  let currentPercentage: number | null = null;

  for (const item of sorted) {
    if (currentPercentage === null || item.matchPercentage === currentPercentage) {
      currentGroup.push(item);
      currentPercentage = item.matchPercentage;
    } else {
      // Shuffle the current group and add to result
      currentGroup.sort(() => Math.random() - 0.5);
      shuffled.push(...currentGroup);

      // Start new group
      currentGroup = [item];
      currentPercentage = item.matchPercentage;
    }
  }

  // Don't forget to shuffle and add the last group
  if (currentGroup.length > 0) {
    currentGroup.sort(() => Math.random() - 0.5);
    shuffled.push(...currentGroup);
  }

  return shuffled.slice(0, 3);
}
