const fetchGetAllAssociations = async () => {
   try {
      const response = await fetch('http://localhost/api/organization/all', {
         method: 'GET',
         credentials: 'include',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      if (!response.ok) {
         throw new Error('Erreur lors du fetch des associations.');
      }

      const result = await response.json();
      return result;
   } catch (error: any) {
      console.error('Erreur lors du GET vers NestJS :', error);
      return error;
   }
};

export default fetchGetAllAssociations;
