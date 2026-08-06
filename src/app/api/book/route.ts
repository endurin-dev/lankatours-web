import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ─── Company contact info (shown in the client email) ─────────────────────
const COMPANY = {
  name: 'Lanka Tours & Transfer',
  phone: '+94 77 395 1779',
  phoneLink: '+94773951779',
  email: 'tourstransfers.lk@gmail.com',
  address: ['312/A,', 'Ella Road,', 'Kurundugahahethekma,', 'Elpitiya,', 'Sri Lanka 80400'],
};

const ADMIN_EMAIL = 'tourstransfers.lk@gmail.com';

interface BookingPayload {
  direction: 'pickup' | 'drop';
  destination: string;
  vehicleName: string;
  vehiclePax: string;
  fare: number;
  pickupDate: string;
  pickupTime: string;
  passengers: string;
  extras: string[];
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  message: string;
}

function money(n: number) {
  return `LKR ${n.toLocaleString()}`;
}

function directionLabel(direction: string) {
  return direction === 'pickup' ? 'Airport → Hotel (Pickup)' : 'Hotel → Airport (Drop-off)';
}

// ─── Admin notification email (internal, plain & scannable) ───────────────
function buildAdminEmail(b: BookingPayload) {
  const extrasText = b.extras.length ? b.extras.join(', ') : 'None';
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background:#f4f6f5; padding: 24px;">
    <div style="background:#15803d; color:#ffffff; padding:20px 24px; border-radius: 12px 12px 0 0;">
      <h2 style="margin:0; font-size:20px;">🚐 New Transfer Booking</h2>
      <p style="margin:4px 0 0; font-size:13px; opacity:.9;">Received via website booking form</p>
    </div>
    <div style="background:#ffffff; padding:24px; border-radius: 0 0 12px 12px; border:1px solid #e5e7eb; border-top:none;">
      <table style="width:100%; border-collapse: collapse; font-size:14px; color:#111827;">
        <tr><td style="padding:8px 0; color:#6b7280; width:170px;">Route</td><td style="padding:8px 0; font-weight:bold;">Bandaranaike Airport (CMB) ↔ ${b.destination}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">Direction</td><td style="padding:8px 0;">${directionLabel(b.direction)}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">Pickup Date & Time</td><td style="padding:8px 0;">${b.pickupDate} at ${b.pickupTime}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">Vehicle</td><td style="padding:8px 0;">${b.vehicleName} (${b.vehiclePax})</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">Passengers</td><td style="padding:8px 0;">${b.passengers}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">Extras</td><td style="padding:8px 0;">${extrasText}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">Total Fare</td><td style="padding:8px 0; font-weight:bold; color:#15803d;">${money(b.fare)}</td></tr>
      </table>
      <hr style="border:none; border-top:1px solid #e5e7eb; margin:20px 0;" />
      <table style="width:100%; border-collapse: collapse; font-size:14px; color:#111827;">
        <tr><td style="padding:8px 0; color:#6b7280; width:170px;">Customer Name</td><td style="padding:8px 0; font-weight:bold;">${b.name}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">Email</td><td style="padding:8px 0;">${b.email}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">Phone</td><td style="padding:8px 0;">${b.phone}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280;">WhatsApp</td><td style="padding:8px 0;">${b.whatsapp || b.phone}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; vertical-align:top;">Notes</td><td style="padding:8px 0;">${b.message || '—'}</td></tr>
      </table>
      <p style="margin-top:20px; font-size:12px; color:#9ca3af;">Please contact the customer on WhatsApp within 5 minutes to confirm.</p>
    </div>
  </div>`;
}

// ─── Client confirmation email (branded, reassuring) ───────────────────────
function buildClientEmail(b: BookingPayload) {
  const extrasText = b.extras.length ? b.extras.join(', ') : 'None';
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background:#f4f6f5; padding: 24px;">

    <div style="background:linear-gradient(135deg,#15803d,#166534); color:#ffffff; padding:32px 28px; border-radius: 16px 16px 0 0; text-align:center;">
      <h1 style="margin:0; font-size:24px;">✅ Booking Received!</h1>
      <p style="margin:8px 0 0; font-size:15px; opacity:.95;">Thank you for booking with ${COMPANY.name}, ${b.name.split(' ')[0]}</p>
    </div>

    <div style="background:#ffffff; padding:28px; border:1px solid #e5e7eb; border-top:none;">
      <p style="font-size:14px; color:#374151; line-height:1.6;">
        We've received your transfer request and one of our team members will reach out on WhatsApp
        <strong>within 5 minutes</strong> to confirm your booking. Here's a summary of your trip:
      </p>

      <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:20px; margin:20px 0;">
        <table style="width:100%; border-collapse: collapse; font-size:14px; color:#111827;">
          <tr><td style="padding:6px 0; color:#6b7280; width:150px;">Route</td><td style="padding:6px 0; font-weight:bold;">CMB Airport ↔ ${b.destination}</td></tr>
          <tr><td style="padding:6px 0; color:#6b7280;">Direction</td><td style="padding:6px 0;">${directionLabel(b.direction)}</td></tr>
          <tr><td style="padding:6px 0; color:#6b7280;">Date & Time</td><td style="padding:6px 0;">${b.pickupDate} at ${b.pickupTime}</td></tr>
          <tr><td style="padding:6px 0; color:#6b7280;">Vehicle</td><td style="padding:6px 0;">${b.vehicleName} (${b.vehiclePax})</td></tr>
          <tr><td style="padding:6px 0; color:#6b7280;">Passengers</td><td style="padding:6px 0;">${b.passengers}</td></tr>
          <tr><td style="padding:6px 0; color:#6b7280;">Extras</td><td style="padding:6px 0;">${extrasText}</td></tr>
        </table>
        <div style="margin-top:14px; padding-top:14px; border-top:1px dashed #86efac; text-align:center;">
          <p style="margin:0; font-size:13px; color:#4b5563;">Total Fixed Fare</p>
          <p style="margin:2px 0 0; font-size:28px; font-weight:bold; color:#15803d;">${money(b.fare)}</p>
          <p style="margin:4px 0 0; font-size:12px; color:#6b7280;">Includes airport fees, parking, tolls, fuel & driver meals</p>
        </div>
      </div>

      <hr style="border:none; border-top:1px solid #e5e7eb; margin:24px 0;" />

      <h3 style="font-size:16px; color:#111827; margin-bottom:14px;">Need to reach us?</h3>

      <table style="width:100%; border-collapse: collapse; font-size:14px; color:#111827;">
        <tr>
          <td style="padding:10px 0; vertical-align:top; width:32px;">📱</td>
          <td style="padding:10px 0;">
            <strong>Phone / WhatsApp</strong><br/>
            <a href="tel:${COMPANY.phoneLink}" style="color:#15803d; text-decoration:none;">${COMPANY.phone}</a><br/>
            <span style="font-size:12px; color:#6b7280;">Call or message anytime – we reply in minutes!</span>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0; vertical-align:top;">✉️</td>
          <td style="padding:10px 0;">
            <strong>Email</strong><br/>
            <a href="mailto:${COMPANY.email}" style="color:#15803d; text-decoration:none;">${COMPANY.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0; vertical-align:top;">📍</td>
          <td style="padding:10px 0;">
            <strong>Office Address</strong><br/>
            ${COMPANY.name}<br/>
            ${COMPANY.address.join('<br/>')}
          </td>
        </tr>
      </table>

      <div style="text-align:center; margin-top:28px;">
        <a href="https://wa.me/${COMPANY.phoneLink.replace('+', '')}"
           style="display:inline-block; background:#15803d; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:10px; font-weight:bold; font-size:14px;">
          💬 Chat with us on WhatsApp
        </a>
      </div>
    </div>

    <div style="text-align:center; padding:16px; font-size:11px; color:#9ca3af;">
      ${COMPANY.name} • Bandaranaike Airport Transfers, Sri Lanka
    </div>
  </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const body: BookingPayload = await req.json();

    if (!body.name || !body.email || !body.phone || !body.destination || !body.fare) {
      return NextResponse.json({ error: 'Missing required booking fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send to admin
    await transporter.sendMail({
      from: `"${COMPANY.name}" <${process.env.GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: body.email,
      subject: `New Booking: ${body.destination} — ${body.name} (${money(body.fare)})`,
      html: buildAdminEmail(body),
    });

    // Send to client
    await transporter.sendMail({
      from: `"${COMPANY.name}" <${process.env.GMAIL_USER}>`,
      to: body.email,
      replyTo: ADMIN_EMAIL,
      subject: `Booking Confirmation — ${COMPANY.name}`,
      html: buildClientEmail(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Booking email error:', err);
    return NextResponse.json({ error: 'Failed to send booking emails' }, { status: 500 });
  }
}