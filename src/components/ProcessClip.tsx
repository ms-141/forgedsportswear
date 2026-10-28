export function ProcessClip({ src, poster }: { src: string; poster: string }) {
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-brand-border bg-black">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  );
}
