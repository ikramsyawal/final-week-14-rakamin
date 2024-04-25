import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import bcrypt from 'bcrypt';

export const POST = async (req, { params }) => {
  try {
    const data = await req.json();
    const findUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!findUser) {
      return NextResponse.json({ error: 'Invalid Credentials' });
    }

    await bcrypt.compare(data.password, findUser.password);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
