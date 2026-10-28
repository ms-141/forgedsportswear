"use client";

import { useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";

type Props = {
  src: string;
  poster: string;
  title: string;
  vertical?: boolean;
};

export function VideoCard({ src, poster, title, vertical }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setPlaying(true);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-brand-border bg-black ${
        vertical ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        className="h-full w-full object-cover"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Play ${title}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/35 transition-colors hover:bg-black/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-black shadow-lg shadow-black/50 transition-transform group-hover:scale-110">
            <Play size={26} fill="currentColor" />
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-white">
            <Volume2 size={13} /> Watch with sound
          </span>
        </button>
      )}
    </div>
  );
}
