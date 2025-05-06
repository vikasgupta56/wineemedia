import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
const nodemailer = require("nodemailer");
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });


const spreadsheetId = '1IZPk3DBqNU3eHG8r8GGDVgGMi1hzhlOIMz4nIUCocgE';
async function authenticate() {
  const auth = new JWT({
    email: "diamond2-google-sheet@sound-chalice-454207-e8.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDbU1jKJQcQ3V+Q\nYyyZWPmqHCjuZ+VONWUdowWL47Q6v0DqI/x5I96QvNMtCZpmwUXtMJmCO53G957k\n4MjIiTjNiyQnhRWUmFAyKB4AdEjQZw4WLNdIKR8R7/lzR3ab8wAnKHgCZEyNfL4s\nXx0syZl4Z/LjlWM6xxJR19cxFIYcLqxgZE0zYJDbzYg2GdS8aCGGoc4NSLjO9+fT\n80dKBTw067DJP0xtkB4REfw95H7aalzt3fVkjQnLAxgWXzf/kkZI9kXShXXEVuU/\nDWm/sEkwWKABHPBlox+JTrzijRpVuoEztQetQE7JLqWG3GMo0HWtv8N30HNmNGiC\nq9WUDSXjAgMBAAECggEAEX4dR8oaPSsa0x5F0Vk6WGn0jcc1j75MeUemSpj3p/PX\nDpWeLl9BAhQ9V4s7iFSD6j4FEFEG7XaUcrbG7M+c+y/My2Ye6YIYa1etxOWBZTXC\n9tvOs8+rzbdxEtOxTxDbg0QEBlTPkj1PwaQ4ZHkTx3mq8qHYjziPan2niR+U7qxY\nbCS0AIUoC7pPyfpcVkjd3zRUTLnYTtN6YLPMR77YJJA2X5Al8f/XAe/nBMTmZCDz\nXIxnqlGE74Zh0pzvv55jwRfSxDVQeO9+dT3nZKCrgrN4NqQNIqRuWwwxKuTjAKTv\nXuz6NzQtJJhXuBiS2N0tfxSkJXfV1DNmA1K8wzKmSQKBgQD9BiB72DbBm/w1q1zJ\nJIIMo/u9RpTsXR4YGTTNK+7JGH8CO1B9IDqpiPLkGsIlFE/PJ7oAQX3bOPm5SzRS\nHsP5IZB/kwRvCwQWgMBqUekTzKMGQ4gYf4gUcxteX/4J6wzwwNGNuQBa4Q74x/Lr\nf7am8ngUz+x4ILI/VZ7nAk8CZQKBgQDd58B0roN1L+6JPAakOK2ztmnANQoLZUY8\nQKMZm3YbLaWYeh7twhqu36WV+U/wnrW8eRymTGLrUtdlsxU7j01ghmI0vMgn3mZ6\nE3QAPEKGR8s0D1vxk9iuJ6iPMDoLyXNUmzpnFttjGDHg7uUDav9XtMJn+jiMocTb\nOBUbVkPepwKBgQDd/6sunfTlCFRQTor5XFPSfWpZln0BqW3HHQ6L2bkHrbt6HMqx\nDj8KEsNxydx/pgOkMSnsIYoodyP8JHTCfIXbp0xd8oMYXqT2jX7FihqjKY/75fKZ\n9ANUVe40bqq4zweqkLML0r7x/bciJmUHpSV/8wvSzt+eQqnCEgB6lTb3VQKBgCvF\nLcoWLinsVXHOXEUCRQkAvyVBkQSkalEyMrm3V3mO7G4CEJ23PsolpSTK84Cz3Yca\noJMQ2CYwxfnydAq2fn2+pBpg7l4m2THVKnltaXXRLXzMVsd08TWQ7wenbJuslcon\ngEKbWJTYTeZfWN7uuQUUy4/05DihJBJVopwszOBbAoGANMAnZgb6739R+aj8jfOf\nVHIsXrsb9wTO2c8C3CRoqNbq4K5t4fW75qV2MyHmzF2FVEhCcQt41XrHbQfg5NXA\nSegZW4jWt37vtKAupHdyAto5wQC/gxKvRuX++NSVrekY+rThj5TDy/XS/67mCUCf\nVLZRdsHA4RSRGen85sDxIpE=\n-----END PRIVATE KEY-----\n",
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      const dateInKolkata = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      const [datePart] = dateInKolkata.split(','); // "DD/MM/YYYY"
      
      const formattedDate = datePart.trim();
      const sheets = await authenticate();
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Sheet1!A:E',
      });

      const rows = response.data.values || [];
      const emailRow = rows.find(row => row[1] === email); // assuming email is in column B now

      if (emailRow) {
        const rowIndex = rows.indexOf(emailRow) + 1;
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `Sheet1!A${rowIndex}:E${rowIndex}`,
          valueInputOption: 'RAW',
          requestBody: {
            values: [[
              formattedDate || '',
              email || '',
              subject || '',
              message || ''
            ]]
            
          },
        });
      } else {
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: 'Sheet1!A:E',
          valueInputOption: 'RAW',
          requestBody: {
            values: [[
              formattedDate || '',
              email || '',
              subject || '',
              message || ''
            ]]
            
          },
        });
      }

      const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_EMAIL_ADDRESS,
          pass: process.env.MAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.MAIL_EMAIL_ADDRESS,
        to: ["info@wineemedia.com"],
        subject: `New WineeMedia Contact Form Submission`,
        html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <h2 style="color: #4CAF50; text-align: center;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Date</td><td style="padding: 10px; border: 1px solid #ddd;">${formattedDate}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 10px; border: 1px solid #ddd;">${email}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Business Name</td><td style="padding: 10px; border: 1px solid #ddd;">${subject}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 10px; border: 1px solid #ddd;">${message}</td></tr>
              </table>
              <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
                This is an automated message from the system. Please do not reply.
              </p>
            </div>
          </body>
        </html>
      `,
      };

      await transport.sendMail(mailOptions);

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Submission error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}


