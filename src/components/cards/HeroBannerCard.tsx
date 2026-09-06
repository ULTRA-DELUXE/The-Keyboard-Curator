import Image from "next/image";

interface HeroBannerCardProps {
  title: string;
  content: string;
  imageUrl: string;
  priority?: boolean;
}

export default function HeroBannerCard({
  title,
  content,
  imageUrl,
  priority = false,
}: HeroBannerCardProps) {
  const label = `${title}: ${content}`;

  return (
    <div className="relative h-full w-full bg-black">
      <Image
        src={imageUrl}
        alt={label}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
