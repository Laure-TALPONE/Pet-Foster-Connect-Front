import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const fetchCreateAnimal = async (request: NextRequest) => {
   const cookieStore = await cookies();
   const token = cookieStore.get('token');

   if (!token) {
      console.error('Token JWT manquant');
      throw new Error('Token JWT manquant');
   }

   try {
      const data = await request.json();

      const response = await fetch('http://localhost/api/animals/create', {
         method: 'POST',
         credentials: 'include',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token?.value}`,
         },
         body: JSON.stringify(data),
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

export default fetchCreateAnimal;
