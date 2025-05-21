import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const fetchGetUser = async () => {
   try {
      const cookieStore = await cookies();
      const token = cookieStore.get('token');

      if (!token) {
         console.error('Token JWT manquant');
         throw new Error('Token JWT manquant');
      }

      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/api/me`,
         {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token?.value}`,
            },
         }
      );

      if (!response.ok) {
         console.error('Statut erreur:', response.status);
         const errorText = await response.text();
         console.error('Erreur NestJS :', errorText);
         throw new Error("Erreur lors du get de l'utilisateur.");
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetUser;
