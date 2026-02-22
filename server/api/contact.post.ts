import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const resend = new Resend(config.resendApiKey);

  try {
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: "nicolasdeza@hotmail.be",
      subject: `Nouveau message de ${body.name}`,
      html: `
        <p><strong>Nom:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong><br/>${body.message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
});
