import { NextRequest, NextResponse } from 'next/server';

const fetchGetAllSpecies = async () => {
   try {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/api/species/all`,
         {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );

      if (!response.ok) {
         console.error('Statut erreur:', response.status);
         const errorText = await response.text();
         console.error('Erreur NestJS :', errorText);
         throw new Error('Erreur lors du fetch des espèces.');
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetAllSpecies;
