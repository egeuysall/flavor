'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import type { RecipeFormProps } from '@/types/recipe';

export const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('any');
  const [difficulty, setDifficulty] = useState('any');
  const [maxTime, setMaxTime] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(ingredients, cuisine, difficulty, maxTime);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <div className="grid md:grid-cols-3 gap-md">
        <div className="w-full flex flex-col gap-xs">
          <Label htmlFor="cuisine">Mutfak</Label>
          <Select value={cuisine} onValueChange={setCuisine}>
            <SelectTrigger>
              <SelectValue placeholder="Herhangi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Herhangi</SelectItem>
              <SelectItem value="Türk">Türk</SelectItem>
              <SelectItem value="İtalyan">İtalyan</SelectItem>
              <SelectItem value="Amerikan">Amerikan</SelectItem>
              <SelectItem value="Meksika">Meksika</SelectItem>
              <SelectItem value="Asya">Asya</SelectItem>
              <SelectItem value="Akdeniz">Akdeniz</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full flex flex-col gap-xs">
          <Label htmlFor="difficulty">Zorluk</Label>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Herhangi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Herhangi</SelectItem>
              <SelectItem value="easy">Kolay</SelectItem>
              <SelectItem value="medium">Orta</SelectItem>
              <SelectItem value="hard">Zor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full flex flex-col gap-xs">
          <Label htmlFor="time">Pişirme Süresi</Label>
          <Select value={maxTime.toString()} onValueChange={(val) => setMaxTime(Number(val))}>
            <SelectTrigger>
              <SelectValue placeholder="Herhangi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Herhangi</SelectItem>
              <SelectItem value="20">20 dakika altı</SelectItem>
              <SelectItem value="40">40 dakika altı</SelectItem>
              <SelectItem value="60">60 dakika altı</SelectItem>
              <SelectItem value="90">90 dakika altı</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-md">
        <div className="w-full flex flex-col gap-xs">
          <Label htmlFor="ingredients">Hangi malzemeleriniz var?</Label>
          <Input
            id="ingredients"
            type="text"
            placeholder="tavuk, domates, pilav..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-xs">
          <div className="hidden md:block">
            <Label>&nbsp;</Label>
          </div>
          <Button type="submit">Öneriler Al</Button>
        </div>
      </div>
    </form>
  );
};
