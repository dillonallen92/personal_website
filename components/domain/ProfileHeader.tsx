import Image from "next/image";
import { getBasePath } from "@/utils/paths";

type ProfileHeaderProps = {
  name: string;
  title: string;
  headshotSrc?: string;
  summary?: string;
};

/**
 * Profile header component displaying headshot, name, title, and summary
 * Used on the home page
 * @param props - Profile header configuration props
 * @returns Profile header element
 */
export function ProfileHeader({
  name,
  title,
  headshotSrc,
  summary,
}: ProfileHeaderProps) {
  const basePath = getBasePath();
  const defaultHeadshot = `${basePath}/images/headshot.jpg`;

  const imageSrc = headshotSrc || defaultHeadshot;

  return (
    <div className="flex flex-col items-center text-center">
      {/* Headshot */}
      <div className="mb-8">
        <Image
          src={imageSrc}
          alt="Professional headshot"
          width={200}
          height={200}
          className="rounded-full object-cover"
          priority
        />
      </div>

      {/* Name */}
      <h1 className="mb-4 text-4xl font-bold text-charcoal sm:text-5xl">
        {name}
      </h1>

      {/* Title */}
      <h2 className="mb-6 text-xl text-accentSlate sm:text-2xl">{title}</h2>

      {/* Professional Summary */}
      {summary && (
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-charcoal">
          {summary}
        </p>
      )}
    </div>
  );
}
