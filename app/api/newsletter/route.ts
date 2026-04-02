import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!audienceId || audienceId === 'your_audience_id_here') {
      return NextResponse.json(
        { error: 'Newsletter service is not fully configured (Missing Audience ID)' },
        { status: 500 }
      );
    }

    // Add contact to Resend Audience
    const data = await (resend as any).contacts.create({
      email: email,
      audienceId: audienceId,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
