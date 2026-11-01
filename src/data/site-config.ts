/**
 * Site-wide configuration & contact details.
 *
 * ⚠️ Every value below marked TODO is a PLACEHOLDER.
 * No real contact information was supplied during content discovery —
 * replace these with verified details before deploying to production.
 */

export const siteConfig = {
  // TODO: replace with the real email address
  email: "your.email@example.com",

  // TODO: replace with the real WhatsApp number in international format, no spaces
  whatsapp: "+966000000000",

  // TODO: replace with the real LinkedIn profile URL
  linkedin: "https://linkedin.com/in/your-profile",

  // TODO: confirm live URL (brief states legacy.sa, beta stage)
  legacyUrl: "https://legacy.sa",

  // Executive CV must be placed at /public/documents/executive-cv.pdf
  // The download button is disabled automatically until the file exists —
  // see src/sections/contact/Contact.tsx
  cvPath: "/documents/executive-cv.pdf",
  cvAvailable: false
};
