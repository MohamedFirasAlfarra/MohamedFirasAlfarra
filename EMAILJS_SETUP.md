# Formspree Setup Instructions

The contact form is now configured to use Formspree for sending emails to `fralfarra11@gmail.com`.

## Current Configuration
- **Formspree Endpoint**: `https://formspree.io/f/mqpzjykg`
- **Recipient Email**: `fralfarra11@gmail.com`

## How It Works
Formspree is a free service that handles form submissions without requiring complex API setup. When users submit the contact form:
1. The form data is sent to Formspree
2. Formspree processes the submission
3. An email is sent to `fralfarra11@gmail.com` with the form content

## Testing the Contact Form
1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form with test data
4. Submit the form
5. Check your email (fralfarra11@gmail.com) for the test message

## Managing Your Form
To manage your Formspree form:
1. Go to [https://formspree.io/](https://formspree.io/)
2. Log in with your account
3. View submissions, spam filters, and settings

## Important Notes
- Formspree free tier allows up to 50 submissions per month
- You can upgrade to a paid plan for more submissions
- The form includes spam protection by default
- You can customize email templates in Formspree dashboard

## Troubleshooting
If emails aren't sending:
1. Check browser console for error messages
2. Verify the Formspree endpoint URL is correct
3. Check Formspree dashboard for submission logs
4. Ensure you haven't exceeded the monthly submission limit

For more information, visit [Formspree Documentation](https://formspree.io/docs/)