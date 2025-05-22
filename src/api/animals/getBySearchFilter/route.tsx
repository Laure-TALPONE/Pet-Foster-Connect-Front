const fetchGetAnimalsByFilters = async (
   specie: any,
   department: any,
   skip: any,
   take: any
) => {
   try {
      const skipNumber = parseInt(skip);
      const takeNumber = parseInt(take);

      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/api/animals/search?specie=${specie}&department=${department}&skip=${skipNumber}&take=${takeNumber}`,
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
         throw new Error('Erreur lors du fetch des animaux.');
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetAnimalsByFilters;
