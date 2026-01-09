/**
 * Contact information data constants
 */

export type ContactInfo = {
  label: string;
  value: string;
  href: string;
  external: boolean;
};

export const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    value: "dillona@cos.edu",
    href: "mailto:dillona@cos.edu",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dillonballen/",
    href: "https://linkedin.com/in/dillonballen/",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/dillonallen92",
    href: "https://github.com/dillonallen92",
    external: true,
  },
];
