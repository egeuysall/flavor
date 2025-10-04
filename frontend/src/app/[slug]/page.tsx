import { recipes } from '@/lib/recipes';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { toTitleCase } from '@/utils/helpers';
import Link from 'next/link';
import { ArrowLeft, Clock, ChefHat, Utensils } from 'lucide-react';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-12">
      <Link href="/" className="flex items-center gap-2xs">
        <ArrowLeft size={20} />
        <span>Geri Dön</span>
      </Link>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-sm">
          <h2>{recipe.name}</h2>

          <div className="flex flex-col md:flex-row gap-2xs md:gap-2xl lg:gap-4xl">
            <div className="flex items-center gap-sm text-neutral-700 dark:text-neutral-300">
              <Utensils size={18} />
              <span className="font-semibold text-small">Mutfak:</span>
              <span className="text-small">{toTitleCase(recipe.cuisine)}</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
              <Clock size={20} />
              <span className="font-semibold text-small">Süre:</span>
              <span className="text-small">{recipe.cookingTime} dakika</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
              <ChefHat size={20} />
              <span className="font-semibold text-small">Zorluk:</span>
              <span className="text-small">{toTitleCase(recipe.difficulty)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2xs">
          <h3>Malzemeler</h3>
          <div className="flex flex-wrap gap-xs">
            {recipe.ingredients.map((ingredient, index) => (
              <Badge key={index}>{toTitleCase(ingredient)}</Badge>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
