import { sendEmail } from "@/utils/mail"

export async function POST(request: Request) {
    const { sender, recipient, message } = await request.json();
    try {
        const result = await sendEmail({
            sender: sender,
            receipient: recipient,
            subject: 'Get in touch',
            message: message
        })

        return Response.json({
            accepted: result.accepted
        })
    } catch (e) {
        return Response.json({ message: `Error to send email: ${e}`}, {status: 500})
    }
}