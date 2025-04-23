import { NextRequest, NextResponse } from 'next/server';

const fetchUpdateUser = async (request: NextRequest) => {
   try {
      const data = await request.json();

      const response = await fetch('http://localhost/api/user/update', {
         method: 'PUT',
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
            message: "Erreur lors de la modification de l'utilisateur.",
            error: error.message,
         },
         { status: 500 }
      );
   }
};

export default fetchUpdateUser;
