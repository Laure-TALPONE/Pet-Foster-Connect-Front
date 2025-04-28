import fetchGetAllSpecies from '@/api/species/route';
import { NextRequest } from 'next/server';

export async function GET() {
   return await fetchGetAllSpecies();
}
