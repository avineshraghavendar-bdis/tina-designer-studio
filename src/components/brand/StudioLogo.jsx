import Image from "next/image";

const LOGO_PATH = "/images/tina-logo.png";
const LOGO_DIMENSION = 1024;

export default function StudioLogo({
  size = 56,
  variant = "filled",
  priority = false,
}) {
  const isOutline = variant === "outline";

  return (
    <Image
      src={LOGO_PATH}
      alt="Tina Designer Studio"
      width={LOGO_DIMENSION}
      height={LOGO_DIMENSION}
      priority={priority}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        filter: isOutline ? "grayscale(1) brightness(0.9) contrast(1.1)" : "none",
        opacity: isOutline ? 0.22 : 1,
      }}
    />
  );
}
