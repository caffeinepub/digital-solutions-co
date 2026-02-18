const WHATSAPP_MESSAGE = 'Hi! I\'m interested in getting a website for my business. Can you help me with a quote?';

export function getWhatsAppLink(phoneNumber: string): string {
  // Strip all non-digits from phone number
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${digitsOnly}?text=${message}`;
}

export function getWhatsAppLink1(): string {
  return getWhatsAppLink('+91 8095126443');
}

export function getWhatsAppLink2(): string {
  return getWhatsAppLink('+91 9663848939');
}

export function getEmailLink(): string {
  const email = 'priyankadbrao@gmail.com';
  const subject = encodeURIComponent('Website Inquiry');
  const body = encodeURIComponent(
    'Hi,\n\nI\'m interested in getting a website for my business.\n\nPlease contact me to discuss:\n\n- Business Name:\n- Service Needed:\n- Brief Description:\n\nThank you!'
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
}
