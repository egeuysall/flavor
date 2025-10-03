import type { Recommendation } from '@/types/recipe';
import { Card, CardHeader, CardTitle, CardFooter, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { toTitleCase } from '@/utils/helpers';

export const RecipeCard = ({
  recommendation,
  className,
}: {
  recommendation: Recommendation;
  className: string;
}) => {
  const { recipe } = recommendation;

  return (
    <Link
      href={`/${encodeURIComponent(recipe.slug)}`}
      passHref
      className="hover:opacity-75 transition-opacity duration-200 ease-in-out h-full no-underline"
    >
      <Card className={`${className} h-full`}>
        <CardHeader>
          <CardTitle className="text-neutral-900 dark:text-neutral-100">{recipe.name}</CardTitle>
          <CardDescription className="text-neutral-700 dark:text-neutral-300 text-small">
            {toTitleCase(recipe.cuisine)} &bull; {recipe.cookingTime} Dakika &bull;{' '}
            {toTitleCase(recipe.difficulty)}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-wrap gap-xs">
          {recipe.ingredients.map((ingredient, index) => (
            <Badge key={index}>{toTitleCase(ingredient)}</Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};
