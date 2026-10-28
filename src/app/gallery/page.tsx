import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoCard } from "@/components/VideoCard";
import { ProcessClip } from "@/components/ProcessClip";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Gallery | ${site.name}`,
  description: "See Forged Sportswear's custom sublimation process and ad campaigns in action.",
};

const clips = [1, 2, 3, 4].map((n) => ({
  src: `/media/clips/clip-${n}.mp4`,
  poster: `/media/images/clip-${n}-poster.jpg`,
}));

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Gallery"
        title="Forged From Scratch"
        description="A look inside our sublimation shop — real prints, real production, no stock photos."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <VideoCard
          src="/media/videos/ad-vertical.mp4"
          poster="/media/images/ad-vertical-poster.jpg"
          title="Forged From Scratch"
          vertical
        />
        <VideoCard
          src="/media/videos/ad-horizontal.mp4"
          poster="/media/images/ad-horizontal-poster.jpg"
          title="Forged Sportswear Production"
        />
      </div>

      <h2 className="mt-16 font-display text-xl font-bold uppercase tracking-tight text-white">
        Behind The Scenes
      </h2>
      <p className="mt-2 max-w-xl text-sm text-brand-muted">
        Raw clips straight from our print floor — hover or tap to see designs come to life.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {clips.map((clip) => (
          <ProcessClip key={clip.src} src={clip.src} poster={clip.poster} />
        ))}
      </div>
    </div>
  );
}
