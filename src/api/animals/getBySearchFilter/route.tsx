const fetchGetAnimalsByFilters = async (specie: string, department: string) => {
   try {
      const response = await fetch(
         `http://localhost/api/animals?specie=${specie}&department=${department}`,
         {
            method: 'GET',
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );

      if (!response.ok) {
         throw new Error("Erreur lors du fetch de l'animal.");
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetAnimalsByFilters;
