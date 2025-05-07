const fetchGetAllFosterFamilies = async () => {
   try {
      const response = await fetch('http://localhost/api/foster/all', {
         method: 'GET',
         credentials: 'include',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      if (!response.ok) {
         throw new Error("Erreur lors du fetch des familles d'accueil.");
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetAllFosterFamilies;
