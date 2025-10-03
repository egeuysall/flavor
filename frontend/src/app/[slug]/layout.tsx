import type { Metadata } from 'next';
import React from 'react';
import { recipes } from '@/lib/recipes';

export const revalidate = 3600;
export const dynamic = 'auto';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flavor.egeuysal.com';
  const canonical = `${siteUrl.replace(/\/$/, '')}/${slug}`;

  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return {
      title: 'Tarif Bulunamadı',
      description: `"${slug}" için tarif bulunamadı`,
      openGraph: {
        title: 'Tarif Bulunamadı',
        description: `"${slug}" için tarif bulunamadı`,
        url: canonical,
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: 'Tarif Bulunamadı',
        description: `"${slug}" için tarif bulunamadı`,
      },
      alternates: { canonical },
    };
  }

  const title = recipe.name;
  const description = `${recipe.name} tarifi - ${recipe.cookingTime} dakika, ${recipe.difficulty} seviye, ${recipe.cuisine} mutfağı. Malzemeler: ${recipe.ingredients.slice(0, 3).join(', ')}${recipe.ingredients.length > 3 ? '...' : ''}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      siteName: 'Flavor',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: { canonical },
  };
}

export default function ShortNameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
