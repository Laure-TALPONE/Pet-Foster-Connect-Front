import { NextRequest, NextResponse } from 'next/server';

const fetchUpdateAnimal = async (request: NextRequest) => {
   try {
      const data = await request.json();

      const response = await fetch('http://localhost/api/animals', {
         method: 'PUT',
         credentials: 'include',
         headers: {
            'Content-Type': 'application/json',
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
      console.error('Erreur lors du PUT vers NestJS :', error);
      return NextResponse.json(
         {
            message: "Erreur lors de la modification d'un animal.",
            error: error.message,
         },
         { status: 500 }
      );
   }
};

export default fetchUpdateAnimal;
