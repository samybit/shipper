"use client";

import { useState } from "react";

interface VideoCardProps {
  src: string;
  poster: string;
  label: string;
  title: string;
}

export default function VideoCard({ src, poster, label, title }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="group relative w-full aspect-video bg-black overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-colors">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onMouseEnter={() => setPlaying(true)}
        onMouseLeave={() => setPlaying(false)}
      />
      {!playing && (
        <div
          className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center pl-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
      <figcaption className="mt-4 flex flex-col gap-1">
        <span className="text-[10px] font-mono font-medium text-zinc-500 uppercase tracking-[0.2em]">
          {label}
        </span>
        <span className="text-sm font-semibold text-white tracking-tight">
          {title}
        </span>
      </figcaption>
    </figure>
  );
}
