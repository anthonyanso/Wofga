import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (jsonError) {
    return NextResponse.json(
      { success: false, message: 'Invalid or missing JSON in request body.' },
      { status: 400 }
    );
  }
  try {
    const { firstName, lastName, email, phone, service, message } = contactSchema.parse(body);

    // Save to database only
    try {
      const sql = neon(process.env.DATABASE_URL!);
      const contact = await sql`
        INSERT INTO contacts (
          first_name, 
          last_name, 
          email, 
          phone, 
          service, 
          message
        ) VALUES (
          ${firstName}, 
          ${lastName}, 
          ${email}, 
          ${phone || null}, 
          ${service}, 
          ${message}
        ) RETURNING id
      `;
    } catch (dbError) {
      return NextResponse.json(
        { success: false, message: 'Failed to save message to database', error: dbError?.message || String(dbError) },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Failed to process contact form', error: (error && error.message) ? error.message : String(error) },
      { status: 500 }
    );
  }
}
