import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: true,
    auth:{
        user: process.env.NODEMAILER_SENDER_EMAIL,
        pass: process.env.NODEMAILER_SENDER_PWD,
    },
} as SMTPTransport.Options)

type SendEmailDto = {
    sender: Mail.Address,
    receipient: Mail.Address,
    subject: string,
    message: string
}

export const sendEmail = async (dto: SendEmailDto) => {
    const { sender, receipient, subject, message } = dto;
    
    return await transport.sendMail({
        from: sender,
        to: receipient,
        subject,
        html: message
    })
}