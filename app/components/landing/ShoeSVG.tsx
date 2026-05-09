import Image from 'next/image';
import type { ShoeSVGProps } from './types';

export default function ShoeSVG({
  color,
  image,
  imageScale = 1,
  imageOffsetY = 0,
  size = 280,
}: ShoeSVGProps) {
  return (
    <div
      style={{
        width: size,
        height: size * 0.6,
        position: "relative",
        overflow: "hidden",
        borderRadius: 20,
        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateY(${imageOffsetY}px) scale(${imageScale})`,
          transformOrigin: "center center",
        }}
      >
        <Image
          src={image ?? "/shoes/jordan2.png"}
          alt={`${color} shoe`}
          fill
          loading="eager"
          sizes="(max-width: 768px) 80vw, 420px"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}

