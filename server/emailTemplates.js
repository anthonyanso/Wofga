exports.getAdminEmailHtml = (data) => `
<!DOCTYPE html>
<html lang="en">
   <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission - Wofga Digital Enterprise</title>
     <style>
      /* Base Styles */
      body {
        font-family: "Segoe UI", Roboto, -apple-system, BlinkMacSystemFont,
          sans-serif;
        background-color: hsl(240, 10%, 3.9%);
        color: hsl(0, 0%, 98%);
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      .email-card {
        background: linear-gradient(
          135deg,
          hsl(240, 10%, 15%) 0%,
          hsl(240, 10%, 20%) 100%
        );
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      .header {
        background: linear-gradient(
          135deg,
          hsl(240, 75%, 8%) 0%,
          hsl(345, 75%, 18%) 100%
        );
        padding: 30px 20px;
        text-align: center;
        color: white;
      }

      .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
      }

      .logo-img {
        height: 40px;
        margin-right: 10px;
      }

      .logo-text {
        font-size: 24px;
        font-weight: 700;
      }

      .tagline {
        color: hsl(16, 100%, 60%);
        font-size: 14px;
        margin-top: 5px;
      }

      .content {
        padding: 30px;
      }

      h1 {
        font-size: 24px;
        margin-top: 0;
        color: hsl(0, 0%, 98%);
      }

      .subtitle {
        color: hsl(240, 5%, 64.9%);
        margin-bottom: 30px;
        font-size: 16px;
      }

      .form-data {
        background-color: hsl(240, 3.7%, 15.9%);
        border-radius: 0.5rem;
        padding: 20px;
        margin-bottom: 30px;
      }

      .data-row {
        display: flex;
        margin-bottom: 15px;
      }

      .data-label {
        font-weight: 600;
        color: hsl(240, 5%, 64.9%);
        width: 120px;
        flex-shrink: 0;
      }

      .data-value {
        color: hsl(0, 0%, 98%);
      }

      .footer {
        text-align: center;
        padding: 20px;
        font-size: 14px;
        color: hsl(240, 5%, 64.9%);
        border-top: 1px solid hsl(240, 3.7%, 15.9%);
      }

      .button {
        display: inline-block;
        background: linear-gradient(
          135deg,
          hsl(16, 100%, 60%) 0%,
          hsl(25, 100%, 65%) 100%
        );
        color: white;
        text-decoration: none;
        padding: 12px 24px;
        border-radius: 0.5rem;
        font-weight: 600;
        margin-top: 20px;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 102, 51, 0.3);
      }
    </style>
    </head>
  <body>
    <div class="container">
      <div class="email-card">
        <div class="header">
          <div class="logo-container">
            <img
              class="logo-img"
              src="https://i.ibb.co/h1C8BJnd/wofga-digital-logo.png"
              alt="wofga-digital-logo"
              border="0"
            />
            <div class="logo-text">
              WOFGA DIGITAL ENTERPRISE
            </div>
          </div>
          <div class="tagline">Tech Solutions</div>
        </div>

        <div class="content">
          <h1>New Contact Form Submission</h1>
          <p class="subtitle">
            You've received a new message from your website contact form.
          </p>

          <div class="form-data">
            <div class="data-row">
              <div class="data-label">Name:</div>
              <div class="data-value">${data.firstName} ${data.lastName}</div>
            </div>

            <div class="data-row">
              <div class="data-label">Email:</div>
              <div class="data-value" style="color: #ffffff;">${data.email}</div>
            </div>

            <div class="data-row">
              <div class="data-label">Phone:</div>
              <div class="data-value">${data.phone}</div>
            </div>

            <div class="data-row">
              <div class="data-label">Service:</div>
              <div class="data-value">${data.service}</div>
            </div>

            <div class="data-row" style="align-items: flex-start">
              <div class="data-label">Message:</div>
              <div class="data-value">
                ${data.message}
              </div>
            </div>
          </div>

          <a href="mailto:${data.email}" style="color: #ffffff;" class="button">Reply to Message</a>
        </div>

        <div class="footer">
          <p>© ${new Date().getFullYear()} Wofga Digital Enterprise. All rights reserved.</p>
          <p>If you didn't expect to receive this email, please ignore it.</p>
        </div>
      </div>
    </div>
  </body>
</html>
`;

exports.getClientEmailHtml = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Message Received - Wofga Digital Enterprise</title>
     <style>
      body {
        font-family: "Segoe UI", Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
        background-color: hsl(240, 10%, 3.9%);
        color: hsl(0, 0%, 98%);
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      a {
        color: hsl(0, 0%, 100%);
        text-decoration: none;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .email-card {
        background: linear-gradient(
          135deg,
          hsl(240, 10%, 15%) 0%,
          hsl(240, 10%, 20%) 100%
        );
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
      .header {
        background: linear-gradient(
          135deg,
          hsl(240, 75%, 8%) 0%,
          hsl(345, 75%, 18%) 100%
        );
        padding: 30px 20px;
        text-align: center;
        color: white;
      }
      .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
      }
      .logo-img {
        height: 40px;
        margin-right: 10px;
      }
      .logo-text {
        font-size: 24px;
        font-weight: 700;
      }
      .tagline {
        color: hsl(16, 100%, 60%);
        font-size: 14px;
        margin-top: 5px;
      }
      .content {
        padding: 30px;
      }
      h1 {
        font-size: 24px;
        margin-top: 0;
        color: hsl(0, 0%, 98%);
      }
      .subtitle {
        color: hsl(240, 5%, 64.9%);
        margin-bottom: 30px;
        font-size: 16px;
      }
      .footer {
        text-align: center;
        padding: 20px 10px 10px 10px;
        font-size: 14px;
        color: hsl(240, 5%, 64.9%);
        border-top: 1px solid hsl(240, 3.7%, 15.9%);
        background: hsl(240, 10%, 10%);
      }
      .footer-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        margin-bottom: 15px;
      }
      .footer-section {
        min-width: 120px;
        margin-bottom: 10px;
      }
      .footer-section-title {
        font-weight: 600;
        color: hsl(0, 0%, 98%);
        margin-bottom: 8px;
        font-size: 15px;
      }
      .footer-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .footer-list li {
        margin-bottom: 6px;
      }
      .footer-list a {
        color: hsl(240, 5%, 64.9%);
        text-decoration: none;
        font-size: 14px;
        transition: color 0.2s;
      }
      .footer-list a:hover {
        color: hsl(16, 100%, 60%);
      }
      .footer-legal {
        margin-top: 10px;
        font-size: 13px;
        color: hsl(240, 5%, 64.9%);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="email-card">
        <div class="header">
          <div class="logo-container">
            <img
              class="logo-img"
              src="https://i.ibb.co/h1C8BJnd/wofga-digital-logo.png"
              alt="wofga-digital-logo"
              border="0"
            />
            <div class="logo-text">
              WOFGA DIGITAL ENTERPRISE
            </div>
          </div>
          <div class="tagline">Tech Solutions</div>
        </div>
        <div class="content">
          <h2 style="color: #ffffff;">Hello <Span>${data.firstName}</Span>!</h2>
          <h3 style="color: #ffffff;">We've Received Your Message</h3>
          <p style="color: #ffffff;">
            Thank you for contacting Wofga Digital Enterprise.<br>
            We appreciate you taking the time to reach out to us. Your message has been received and our team will review your inquiry as soon as possible.
          </p>
          <p style="color: #ffffff;">
            If your message requires a response, we will get back to you shortly. In the meantime, feel free to explore our website or reach out if you have any urgent questions.
          </p>
          <p style="color: #ffffff;">
            <strong>Your Message Details:</strong><br>
            Service: ${data.service}<br>
            Message: ${data.message}
          </p>
          <p style="color: #ffffff;">
            Best regards,<br>
            Wofga Digital Team<br>
            <a href="mailto:wofgadigital@gmail.com" style="color: #ffffff;">wofgadigital@gmail.com</a>
          </p>
        </div>
        <div class="footer">
          <div class="footer-links">
            <div class="footer-section">
              <div class="footer-section-title" style="color: #ffffff;">Company</div>
              <ul class="footer-list">
                <li><a href="#" style="color: #ffffff;">About Us</a></li>
                <li><a href="#" style="color: #ffffff;">Meet the Team</a></li>
                <li><a href="#" style="color: #ffffff;">Our Portfolio</a></li>
                <li><a href="#" style="color: #ffffff;">Insights &amp; Blog</a></li>
                <li><a href="#" style="color: #ffffff;">Client Testimonials</a></li>
                <li><a href="#" style="color: #ffffff;">Contact Us</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <div class="footer-section-title">Legal &amp; Help</div>
              <ul class="footer-list">
                <li><a href="#" style="color: #ffffff;">FAQ</a></li>
                <li><a href="#" style="color: #ffffff;">Terms of Service</a></li>
                <li><a href="#" style="color: #ffffff;">Privacy Policy</a></li>
                <li><a href="#" style="color: #ffffff;">Cookie Policy</a></li>
                <li><a href="#" style="color: #ffffff;">Support</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-legal">
            © ${new Date().getFullYear()} Wofga Digital Enterprise. All rights reserved.<br>
            If you didn't expect to receive this email, please ignore it.
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
