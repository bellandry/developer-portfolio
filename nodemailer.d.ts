declare module 'nodemailer' {
    // Basic type declaration to resolve the TypeScript error
    export interface Transporter {
      sendMail(mailOptions: any): Promise<any>;
    }
  
    export function createTransport(options: any): Transporter;
  }