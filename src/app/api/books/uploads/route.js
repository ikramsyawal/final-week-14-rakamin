import { NextResponse } from 'next/server';

import { uploadFile } from '@/lib/uploadFile';

export const POST = async (req, { params }) => {
  try {
    const formData = await req.formData();
    const file = formData.getAll('image')[0];
    const imagePath = await uploadFile(file, '/images');
    const imageUrl = `http://localhost:3000/${imagePath}`;

    console.log(formData, '<<<<<<formData');
    console.log(file, '<<<<<<file');

    return NextResponse.json(
      { message: 'Upload file successfull', image_url: imageUrl },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' });
  }
};
