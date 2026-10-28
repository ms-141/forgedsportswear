import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";

const MAX_ATTACHMENT_BYTES = 15 * 1024 * 1024; // 15MB total, generous for a few logo/artwork files

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const categorySlug = String(formData.get("category") ?? "").trim();
    const quantity = parseInt(String(formData.get("quantity") ?? ""), 10);
    const sizeBreakdown = String(formData.get("sizeBreakdown") ?? "").trim();
    const designNotes = String(formData.get("designNotes") ?? "").trim();
    const country = String(formData.get("country") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();

    if (!name || !email || !designNotes) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    if (!Number.isFinite(quantity) || quantity < site.minQty) {
      return NextResponse.json(
        { error: `Quantity must be at least ${site.minQty} pieces.` },
        { status: 400 }
      );
    }

    const category = categories.find((c) => c.slug === categorySlug);

    const attachments: { filename: string; content: Buffer }[] = [];
    let totalBytes = 0;
    for (const value of formData.getAll("attachments")) {
      if (value instanceof File && value.size > 0) {
        totalBytes += value.size;
        if (totalBytes > MAX_ATTACHMENT_BYTES) {
          return NextResponse.json(
            { error: "Attachments are too large. Please keep total uploads under 15MB." },
            { status: 400 }
          );
        }
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({ filename: value.name, content: buffer });
      }
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const toEmail = process.env.QUOTE_TO_EMAIL || site.email;

    if (!gmailUser || !gmailPass) {
      console.error("Missing GMAIL_USER / GMAIL_APP_PASSWORD env vars; quote request not emailed.", {
        name,
        email,
        category: categorySlug,
        quantity,
      });
      return NextResponse.json(
        { error: "Quote submissions are not yet configured. Please email us directly instead." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const lines = [
      `New quote request from ${site.name} website`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Team / Organization: ${organization || "-"}`,
      "",
      `Product: ${category?.name ?? categorySlug}`,
      `Quantity: ${quantity} (minimum ${site.minQty})`,
      `Size Breakdown: ${sizeBreakdown || "-"}`,
      `Design / Color Notes: ${designNotes}`,
      "",
      `Shipping: ${location || "-"}, ${country || "-"}`,
      `Attachments: ${attachments.length}`,
    ];

    await transporter.sendMail({
      from: `"${site.name} Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Quote Request \u2014 ${category?.name ?? categorySlug} x${quantity} (${name})`,
      text: lines.join("\n"),
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote submission failed:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
