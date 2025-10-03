import type { Recommendation } from '@/types/recipe';

const RECOMMENDATIONS_KEY = 'flavor_recommendations';

export const saveRecommendations = (recommendations: Recommendation[]): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(RECOMMENDATIONS_KEY, JSON.stringify(recommendations));
  } catch (error) {
    console.error('Failed to save recommendations to local storage:', error);
  }
};

export const loadRecommendations = (): Recommendation[] => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(RECOMMENDATIONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load recommendations from local storage:', error);
    return [];
  }
};

export const clearRecommendations = (): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(RECOMMENDATIONS_KEY);
  } catch (error) {
    console.error('Failed to clear recommendations from local storage:', error);
  }
};
