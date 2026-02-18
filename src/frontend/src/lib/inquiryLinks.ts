export function getWhatsAppLink(): string {
  const phoneNumber = '1234567890'; // Replace with actual WhatsApp business number
  const message = encodeURIComponent(
    'Hi! I\'m interested in getting a website for my business. Can you help me with a quote?'
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

export function getEmailLink(): string {
  const email = 'hello@clientsitestudio.com'; // Replace with actual business email
  const subject = encodeURIComponent('Website Inquiry');
  const body = encodeURIComponent(
    'Hi,\n\nI\'m interested in getting a website for my business.\n\nPlease contact me to discuss:\n\n- Business Name:\n- Service Needed:\n- Brief Description:\n\nThank you!'
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
}
