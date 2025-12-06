# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy your **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - {{fullName}} - Full Name
   - {{email}} - Email Address
   - {{phone}} - Phone Number
   - {{service}} - Selected Service
   - {{projectDetails}} - Project Details

### Example Template:
```
Subject: New Contact Form Submission from {{fullName}}

You have received a new message from your website contact form:

Name: {{fullName}}
Email: {{email}}
Phone: {{phone}}
Service: {{service}}

Project Details:
{{projectDetails}}

---
This message was sent from your Nexto website contact form.
```

4. Save the template and copy your **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "abcdefghijklmnop")

## Step 5: Update Contact.jsx
Open `src/pages/Contact.jsx` and replace these lines (around line 48-50):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

With your actual credentials:

```javascript
const serviceId = 'service_abc123';       // Your actual Service ID
const templateId = 'template_xyz789';     // Your actual Template ID
const publicKey = 'abcdefghijklmnop';     // Your actual Public Key
```

## Step 6: Test the Form
1. Navigate to http://localhost:5173/contact
2. Fill out the contact form
3. Submit and check your email

## Important Notes:
- Keep your credentials secure
- Free tier allows 200 emails/month
- Check spam folder if emails don't arrive
- You can customize the email template anytime in EmailJS dashboard

## Troubleshooting:
- **Emails not sending?** Check your Service ID, Template ID, and Public Key
- **Getting errors?** Make sure EmailJS package is installed: `npm install @emailjs/browser`
- **Template variables not working?** Ensure field names in Contact.jsx match template variables

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/support/
