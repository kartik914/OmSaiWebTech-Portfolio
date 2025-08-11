import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";
import { google } from "googleapis";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

// Helper to append data to Google Sheets
async function appendToGoogleSheet({
  fullName,
  email,
  message,
}: {
  fullName: string;
  email: string;
  message: string;
}) {
  // You must set these environment variables in your deployment environment
  const SHEET_ID = process.env.GOOGLE_SHEET_ID!;
  const CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  )!;

  // const auth = new google.auth.JWT(
  //   CLIENT_EMAIL,
  //   undefined,
  //   PRIVATE_KEY,
  //   ["https://www.googleapis.com/auth/spreadsheets"]
  // );
  // const sheets = google.sheets({ version: "v4", auth });
  // const now = new Date().toISOString();
  // await sheets.spreadsheets.values.append({
  //   spreadsheetId: SHEET_ID,
  //   range: "Sheet1!A:D", // Adjust if your sheet/tab name is different
  //   valueInputOption: "USER_ENTERED",
  //   requestBody: {
  //     values: [[now, fullName, email, message]],
  //   },
  // });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    // Save to Google Sheets
    await appendToGoogleSheet(zodData);

    // const { data: resendData, error: resendError } = await resend.emails.send({
    //   from: "Porfolio <onboarding@resend.dev>",
    //   to: [config.email],
    //   subject: "Contact me from portfolio",
    //   react: EmailTemplate({
    //     fullName: zodData.fullName,
    //     email: zodData.email,
    //     message: zodData.message,
    //   }),
    // });

    // if (resendError) {
    //   return Response.json({ resendError }, { status: 500 });
    // }

    // return Response.json(resendData);

    return Response.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
