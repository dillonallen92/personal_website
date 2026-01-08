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
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    external: true,
  },
];
