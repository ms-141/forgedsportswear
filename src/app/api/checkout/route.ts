import Stripe from "stripe";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Payments are not yet configured. Please contact us to arrange payment." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const description = String(body.description ?? "").trim();
    const amount = Number(body.amount);
    const email = body.email ? String(body.email).trim() : undefined;

    if (!description) {
      return NextResponse.json({ error: "Please describe what this invoice is for." }, { status: 400 });
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ error: "Please enter a valid amount." }, { status: 400 });
    }

    const stripe = new Stripe(secretKey);
    const origin = request.headers.get("origin") || new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: site.currency.toLowerCase(),
            unit_amount: Math.round(amount * 100),
            product_data: { name: `${site.name} \u2014 ${description}` },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pay/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout session creation failed:", err);
    return NextResponse.json({ error: "Something went wrong creating your payment link." }, { status: 500 });
  }
}
