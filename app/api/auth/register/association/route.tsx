import { NextResponse } from 'next/server';

export async function POST(request: Request) {
   const data = await request.json();

   console.log('Données reçues :', data);

   return NextResponse.json(
      { message: 'Inscription réussie' },
      { status: 200 }
   );
}
