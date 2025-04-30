import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const fetchGetAnimalsByAssociation = async (id: string) => {
   const cookieStore = await cookies();
   const token = cookieStore.get('token');

   if (!token) {
      console.error('Token JWT manquant');
      throw new Error('Token JWT manquant');
   }

   try {
      const response = await fetch(
         `http://localhost/api/animals/organization/${id}`,
         {
            method: 'GET',
            credentials: 'include',
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
         throw new Error('Erreur lors du fetch des animaux par asso.');
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetAnimalsByAssociation;
