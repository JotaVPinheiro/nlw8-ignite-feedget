import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2d5cd094492c0b",
    pass: "a21f9f99e2a115"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Feedget <feedget@feedget.com>',
      to: 'JV <batatadoceasd@gmail.com>',
      subject,
      html: body
    })
  }
}