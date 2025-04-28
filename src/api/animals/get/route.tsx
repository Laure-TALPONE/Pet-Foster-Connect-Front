import { NextRequest, NextResponse } from 'next/server';

const fetchGetAllAnimals = async () => {
   try {
      const response = await fetch('http://localhost/api/animals/all', {
         method: 'GET',
         credentials: 'include',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      if (!response.ok) {
         throw new Error('Erreur lors du fetch des animaux.');
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return NextResponse.json(
         {
            message: 'Erreur lors du fetch des animaux.',
            error: error.message,
         },
         { status: 500 }
      );
   }
};

export default fetchGetAllAnimals;
