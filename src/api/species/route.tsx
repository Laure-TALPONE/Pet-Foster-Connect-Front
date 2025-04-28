import { NextRequest, NextResponse } from 'next/server';

const fetchGetAllSpecies = async () => {
   try {
      const response = await fetch('http://localhost/api/species/all', {
         method: 'GET',
         credentials: 'include',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      const result = await response.json();

      if (!response.ok) {
         return NextResponse.json(
            { message: result.message || 'Erreur côté serveur NestJS' },
            { status: response.status }
         );
      }

      return NextResponse.json(result, { status: 200 });
   } catch (error: any) {
      console.error('Erreur lors du POST vers NestJS :', error);
      return NextResponse.json(
         {
            message: "Erreur lors de la création d'un animal.",
            error: error.message,
         },
         { status: 500 }
      );
   }
};

export default fetchGetAllSpecies;
