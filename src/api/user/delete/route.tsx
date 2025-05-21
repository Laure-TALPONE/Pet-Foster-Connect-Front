import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const fetchDeleteUser = async (id: string) => {
   try {
      const cookieStore = await cookies();
      const token = cookieStore.get('token');

      if (!token) {
         console.error('Token JWT manquant');
         throw new Error('Token JWT manquant');
      }

      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/api/${id}`,
         {
            method: 'DELETE',
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token?.value}`,
            },
         }
      );

      const result = await response.json();

      if (result) {
         // suppression du token dans les cookies en front
         (await cookies()).delete('token');
      }

      if (!response.ok) {
         console.log('response pas ok');
         return NextResponse.json(
            { message: result.message || 'Erreur côté serveur NestJS' },
            { status: response.status }
         );
      }

      return NextResponse.json(result, { status: 200 });
   } catch (error: any) {
      console.error('Erreur lors du DELETE vers NestJS :', error);
      return NextResponse.json(
         {
            message: "Erreur lors de la suppression de l'utilisateur.",
            error: error.message,
         },
         { status: 500 }
      );
   }
};

export default fetchDeleteUser;
