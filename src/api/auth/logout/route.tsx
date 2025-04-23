import { NextRequest, NextResponse } from 'next/server';

const fetchPostLogOut = async (request: NextRequest) => {
   try {
      const data = await request.json();

      const response = await fetch(
         // 'http://jeremyjacquette-server.eddi.cloud/api/logout',
         'http://localhost/api/logout',
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         }
      );
   } catch (error: any) {
      console.error('Erreur lors du POST vers NestJS :', error);
      return NextResponse.json(
         { message: 'Erreur lors de la déconnexion', error: error.message },
         { status: 500 }
      );
   }
};

export default fetchPostLogOut;
