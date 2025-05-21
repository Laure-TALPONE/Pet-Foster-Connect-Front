import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const fetchUpdateUser = async (request: Request, id: string) => {
   try {
      const cookieStore = await cookies();
      const token = cookieStore.get('token');

      if (!token) {
         console.error('Token JWT manquant');
         throw new Error('Token JWT manquant');
      }

      const data = await request.json();

      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/api/${id}`,
         {
            method: 'PATCH',
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token?.value}`,
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

      return NextResponse.json(result, { status: 200 });
   } catch (error: any) {
      console.error('Erreur lors du PATCH vers NestJS :', error);
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
