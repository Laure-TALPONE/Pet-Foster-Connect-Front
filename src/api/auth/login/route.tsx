import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

const fetchPostLogin = async (request: NextRequest) => {
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

      const cookie = response.headers.get('set-cookie'); // obtenir les cookies dans le headers

      const nextResponse = NextResponse.json(result, { status: 200 }); //on duplique NextResponse

      if (cookie) {
         // si j'ai des cookies, je l'ajoute dans la response de next
         nextResponse.headers.set('set-cookie', cookie);
      }

      return nextResponse; //puis on le retourne pour avoir les cookies dans Response Headers
   } catch (error: any) {
      console.error('Erreur lors du POST vers NestJS :', error);
      return NextResponse.json(
         { message: 'Erreur lors de la connexion', error: error.message },
         { status: 500 }
      );
   }
};

export default fetchPostLogin;
