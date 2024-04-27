import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

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

    const comparePassword = await bcrypt.compare(
      data.password,
      findUser.password,
    );

    if (!comparePassword) {
      return NextResponse.json({ error: 'Invalid Credentials' });
    } else {
      const accessToken = jwt.sign(
        {
          id: findUser.id,
          email: findUser.email,
        },
        process.env.SECRET_KEY,
      );
      cookies().set({
        name: 'access_token',
        value: accessToken,
        maxAge: 60 * 60 * 24,
      });
    }

    return NextResponse.json({ success: 'Login Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
