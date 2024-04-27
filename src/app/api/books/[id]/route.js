import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const GET = async (req, { params }) => {
  try {
    const data = await prisma.book.findUnique({
      where: {
        id: +params.id,
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  try {
    const data = await req.json();
    await prisma.book.update({
      where: {
        id: +params.id,
      },
      data,
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await prisma.book.delete({
      where: {
        id: +params.id,
      },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
