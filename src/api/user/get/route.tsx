import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const fetchGetUser = async (request: NextRequest) => {
   try {
      const token = cookies().get('token');

      if (!token) {
         return NextResponse.json(
            { message: 'Utilisateur non authentifié (token manquant).' },
            { status: 401 }
         );
      }

      const response = await fetch(`http://localhost/api/user/me`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token?.value}`,
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
            message: "Erreur lors de la recherche de l'utilisateur.",
            error: error.message,
         },
         { status: 500 }
      );
   }
};

export default fetchGetUser;
