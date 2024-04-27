import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

export const POST = async (req, { params }) => {
  try {
    const { name, email, password } = await req.json();
    const cryptedPassword = await bcrypt.hash(password, 10);
    const data = await prisma.user.create({
      data: {
        name,
        email,
        password: cryptedPassword,
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
