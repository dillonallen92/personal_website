type ContactInfoItemProps = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

/**
 * Contact information item component for the contact page
 * @param props - Contact info item configuration props
 * @returns Contact info item element
 */
export function ContactInfoItem({
  label,
  value,
  href,
  external = false,
}: ContactInfoItemProps) {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-charcoal">{label}</h2>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-accentBlue hover:underline"
      >
        {value}
      </a>
    </div>
  );
}
