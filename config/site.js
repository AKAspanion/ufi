// Site-wide settings for this template.
//
// The pages were built from a reference agency site. Everything specific to that
// agency (its name, website and social links, client case studies, testimonials
// and stats) is demo content: it only renders when NEXT_PUBLIC_DEMO_CONTENT=true.
// By default the template shows neutral sample content instead.
//
// NEXT_PUBLIC_* values are inlined at build time, so rebuild after changing them.

export const DEMO_CONTENT = process.env.NEXT_PUBLIC_DEMO_CONTENT === 'true';

const DEMO_SITE_URL = 'https://www.unifiedinfotech.net';

export const COMPANY_NAME =
  process.env.NEXT_PUBLIC_COMPANY_NAME || (DEMO_CONTENT ? 'Unified Infotech' : 'Your Company');

// Short form used in running copy ("At Unified we believe…").
export const COMPANY_SHORT_NAME =
  process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME || (DEMO_CONTENT ? 'Unified' : COMPANY_NAME);

// Where "Contact us" / "Get in touch" links go. Defaults to the contact form on the home page.
export const CONTACT_URL =
  process.env.NEXT_PUBLIC_CONTACT_URL ||
  (DEMO_CONTENT ? `${DEMO_SITE_URL}/about/contact/` : '/#contact');

export const SOCIAL_LINKS = {
  behance:
    process.env.NEXT_PUBLIC_BEHANCE_URL ||
    (DEMO_CONTENT ? 'https://www.behance.net/unifiedinfotech' : undefined),
  dribbble:
    process.env.NEXT_PUBLIC_DRIBBBLE_URL ||
    (DEMO_CONTENT ? 'https://dribbble.com/unifiedinfotech' : undefined),
};

/** A page on the reference site in demo mode, otherwise the given in-template route. */
export const demoLink = (path, fallback) => (DEMO_CONTENT ? `${DEMO_SITE_URL}${path}` : fallback);
