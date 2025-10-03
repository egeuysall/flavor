import React from 'react';
import { Recommendations } from '@/components/blocks/recommendations';

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col gap-12">
      <section className="w-full flex flex-col gap-2xs">
        <h1>Flavor'a Hoş Geldiniz.</h1>
        <p className="w-full md:w-3/4 text-neutral-700 dark:text-neutral-300">
          Hangi malzemeleriniz olduğunu bize söyleyin, şu anda pişirebileceğiniz lezzetli tarifler
          önerelim. Artık akşam yemeğinin ne olacağını merak etmenize gerek yok, sadece
          tercihlerinizi seçin ve bir sonraki favori yemeğinizi keşfedin.
        </p>
      </section>
      <section className="w-full flex flex-col gap-md">
        <Recommendations />
      </section>
    </main>
  );
};

export default Landing;
