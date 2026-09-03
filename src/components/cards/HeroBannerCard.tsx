interface HeroBannerCardProps {
  title: string;
  content: string;
  imageUrl: string;
}

export default function HeroBannerCard({
  title,
  content,
  imageUrl,
}: HeroBannerCardProps) {
  return (
    <div
      className="h-full w-full bg-gray-400 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label={`${title}: ${content}`}
      role="img"
    />
  );
}
