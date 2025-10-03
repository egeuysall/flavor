export type Recipe = {
  id: number;
  name: string;
  slug: string;
  ingredients: string[];
  cookingTime: number;
  difficulty: 'kolay' | 'orta' | 'zor';
  cuisine: string;
};

export type Recommendation = {
  recipe: Recipe;
  matchPercentage: number;
  matchCount: number;
};

export type RecipeFormProps = {
  onSubmit: (ingredients: string, cuisine: string, difficulty: string, maxTime: number) => void;
};
