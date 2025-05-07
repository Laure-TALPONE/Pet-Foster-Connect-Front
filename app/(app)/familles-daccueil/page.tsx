import fetchGetAllFosterFamilies from '@/api/foster-family/getAll/route';
import FosterFamiliesComponent from '@/foster-families/FosterFamiliesComponent';

export default async function FosterFamiliesPage() {
   const fosterFamilies = await fetchGetAllFosterFamilies();

   return <FosterFamiliesComponent fosterFamilies={fosterFamilies} />;
}
