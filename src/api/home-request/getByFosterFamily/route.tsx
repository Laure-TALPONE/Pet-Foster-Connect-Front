import { cookies } from 'next/headers';

const fetchGetHomeRequestByFosterFamily = async (id: string) => {
   try {
      const cookieStore = await cookies();
      const token = cookieStore.get('token');

      if (!token) {
         console.error('Token JWT manquant');
         throw new Error('Token JWT manquant');
      }

      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/api/adoption_requests/foster/${id}`,
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
         throw new Error(
            "Erreur lors du fetch des requêtes d'adoption par famille d'accueil."
         );
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetHomeRequestByFosterFamily;
