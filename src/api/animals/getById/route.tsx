import { NextRequest, NextResponse } from 'next/server';

const fetchGetAnimalById = async (id: string) => {
   try {
      const response = await fetch(`http://localhost/api/animals/${id}`, {
         method: 'GET',
         credentials: 'include',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      if (!response.ok) {
         throw new Error("Erreur lors du fetch de l'animal.");
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetAnimalById;
