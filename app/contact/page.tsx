import { PageContainer } from "@/components/ui/PageContainer";
import { PageTitle } from "@/components/ui/PageTitle";
import { ContactInfoItem } from "@/components/domain/ContactInfoItem";
import { contactInfo } from "@/data/contact";

/**
 * Contact page component
 * Displays contact information and links
 */
export default function Contact() {
  return (
    <PageContainer>
      <PageTitle title="Contact" />

      <div className="space-y-6 text-lg text-charcoal">
        {contactInfo.map((info) => (
          <ContactInfoItem
            key={info.label}
            label={info.label}
            value={info.value}
            href={info.href}
            external={info.external}
          />
        ))}
      </div>
    </PageContainer>
  );
}
