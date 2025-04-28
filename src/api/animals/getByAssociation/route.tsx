import { NextRequest, NextResponse } from 'next/server';

const fetchGetAnimalsByAssociation = async () => {
   try {
      const response = await fetch('http://localhost/api/animals', {
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
      console.error('Erreur lors du GET vers NestJS :', error);
      return NextResponse.json(
         {
            message:
               'Erreur lors de la récupération des animaux par association.',
            error: error.message,
         },
         { status: 500 }
      );
   }
};

export default fetchGetAnimalsByAssociation;
