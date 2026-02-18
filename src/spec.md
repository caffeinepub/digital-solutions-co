# Specification

## Summary
**Goal:** Update the site’s contact CTAs to use two WhatsApp numbers (in correct wa.me digits-only format) and the provided email address.

**Planned changes:**
- Update the contact link generator(s) to use `mailto:priyankadbrao@gmail.com` for email links.
- Update WhatsApp deep link generation to use digits-only `wa.me` numbers `918095126443` and `919663848939`, preserving the existing pre-filled inquiry message text.
- Update all UI locations that currently link to a single WhatsApp contact (Header, Footer, Contact section) to let visitors choose either of the two WhatsApp numbers, without removing the existing Email CTA.
- Remove/replace any placeholder WhatsApp numbers so no WhatsApp CTA links to placeholders (e.g., `1234567890`).

**User-visible outcome:** Visitors can click WhatsApp CTAs in the Header, Footer, and Contact section and choose either of the two WhatsApp numbers (with the pre-filled message), and the email CTA opens an email to `priyankadbrao@gmail.com`.
