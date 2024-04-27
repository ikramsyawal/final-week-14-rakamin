import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const GET = async (req, { params }) => {
  try {
    const data = await prisma.book.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const POST = async (req, { params }) => {
  try {
    const data = await req.json();
    await prisma.book.create({ data });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
