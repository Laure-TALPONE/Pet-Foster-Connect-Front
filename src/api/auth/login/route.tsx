import { NextRequest, NextResponse } from 'next/server';

const fetchPostLogin = async (request: NextRequest) => {
   try {
      const data = await request.json();

      const response = await fetch('http://localhost/api/login', {
         method: 'POST',
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

      // obtenir les cookies dans le headers
      // https://developer.mozilla.org/en-US/docs/Web/API/Headers/getSetCookie
      const cookies = response.headers.getSetCookie();
      console.log(cookies, 'ici les cookies');

      //on duplique NextResponse
      const nextResponse = NextResponse.json(result, { status: 200 });

      if (cookies) {
         // si j'ai des cookies, je l'ajoute dans la response de next
         nextResponse.headers.append('set-cookie', cookies);
      }

      //puis on la retourne pour avoir les cookies dans Response Headers
      return nextResponse;
   } catch (error: any) {
      console.error('Erreur lors du POST vers NestJS :', error);
      return NextResponse.json(
         { message: 'Erreur lors de la connexion', error: error.message },
         { status: 500 }
      );
   }
};

export default fetchPostLogin;
