import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import { prisma } from '@/db';
import type { NextRequest } from 'next/server';

type Params = {
  params: Promise<{
    contactId: string;
  }>;
};

export async function GET(_request: NextRequest, props: Params) {
  const params = await props.params;
  const contact = await prisma.contact.findUnique({
    where: {
      id: params.contactId,
    },
  });
  if (!contact) {
    notFound();
  }

  return NextResponse.json(contact, { status: 200 });
}
