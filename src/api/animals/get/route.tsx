const fetchGetAllAnimals = async (skip: any, take: any) => {
   try {
      const skipNumber = parseInt(skip);
      const takeNumber = parseInt(take);

      const response = await fetch(
         `http://localhost/api/animals/all?skip=${skipNumber}&take=${takeNumber}`,
         {
            method: 'GET',
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );

      if (!response.ok) {
         console.error('Statut erreur:', response.status);
         const errorText = await response.text();
         // console.error('Erreur NestJS :', errorText);
         throw new Error('Erreur lors du fetch des animaux.');
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetAllAnimals;
