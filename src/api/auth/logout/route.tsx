import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const fetchPostLogOut = async () => {
   try {
      const response = await fetch(
         // 'http://jeremyjacquette-server.eddi.cloud/api/logout',
         `${process.env.NEXT_PUBLIC_API_URL}/api/logout`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );

      const result = await response.json();

      if (!response.ok) {
         return NextResponse.json(
            { message: result.message || 'Erreur côté serveur NestJS' },
            { status: response.status }
         );
      }

      cookies().delete('token');

      return NextResponse.json(result, { status: 200 });
   } catch (error: any) {
      console.error('Erreur lors du POST vers NestJS :', error);
      return NextResponse.json(
         { message: 'Erreur lors de la déconnexion', error: error.message },
         { status: 500 }
      );
   }
};

export default fetchPostLogOut;
