import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://next-js-fort-xcore-admin-panel-payload-5h17w5u29.vercel.app/api/logo',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching logos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch logos' },
      { status: 500 }
    );
  }
} 