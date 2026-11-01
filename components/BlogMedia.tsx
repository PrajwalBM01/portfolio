import Image from "next/image";
import React from "react";

interface BlogMediaProps {
  // leave empty to keep the slot; it only shows as a placeholder in dev
  src?: string;
  alt: string;
  type?: "image" | "video";
  caption?: string;
  width?: number;
  height?: number;
}

const BlogMedia = ({
  src,
  alt,
  type = "image",
  caption,
  width = 1200,
  height = 675,
}: BlogMediaProps) => {
  if (!src) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <div className="aspect-video w-full rounded-md border-2 border-dashed flex flex-col items-center justify-center gap-1 p-4 text-center text-xs text-foreground/50">
        <span className="uppercase tracking-wider">{type} slot</span>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <figure className="flex flex-col gap-2">
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full rounded-md border"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 768px) 720px, 100vw"
          unoptimized={src.startsWith("http")}
          className="w-full h-auto rounded-md border"
        />
      )}
      {caption && (
        <figcaption className="text-xs text-center text-foreground/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogMedia;
