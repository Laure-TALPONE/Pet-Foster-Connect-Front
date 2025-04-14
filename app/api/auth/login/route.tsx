import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
   try {
      const data = await request.json();

      const response = await fetch(
         // 'http://jeremyjacquette-server.eddi.cloud/api/login',
         'http://localhost/api/login',
         {
            method: 'POST',
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         }
      );

      const result = await response.json();

      if (!response.ok) {
         return NextResponse.json(
            { message: result.message || 'Erreur côté serveur NestJS' },
            { status: response.status }
         );
      }

      const setCookie = response.headers.get('set-cookie'); //pouet obtenir les cookies dans le headers
      console.log(setCookie, 'ici les set cookies');

      const nextResponse = NextResponse.json(result, { status: 200 }); //on duplique NextResponse

      if (setCookie) {
         nextResponse.headers.set('set-cookie', setCookie); //et on rajoute les set cookies
      }

      return nextResponse; //puis on le retourne pour avoir les cookies dans Response Headars
   } catch (error: any) {
      console.error('Erreur lors du POST vers NestJS :', error);
      return NextResponse.json(
         { message: 'Erreur lors de la connexion', error: error.message },
         { status: 500 }
      );
   }
}
