import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type Props = {
  image: string;
  alt: string;
  className?: string;
  /** Optional override; defaults to the shared dhol loop in /public */
  audioSrc?: string;
};

/**
 * A still image presented as a "video tile" with a looping dhol track
 * layered over it. Audio starts muted (browser autoplay policy) and the
 * user can tap the speaker icon to unmute. A subtle Ken Burns motion
 * keeps the tile feeling alive even though it is a static image.
 */
export function MediaTile({
  image,
  alt,
  className = "",
  audioSrc = "/audio/dhol-loop.mp3",
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = muted;
    if (!muted) {
      a.play().catch(() => {
        /* user gesture required — handled by next click */
      });
    }
  }, [muted]);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-md bg-ink ${className}`}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover ken-burns"
      />
      <audio ref={audioRef} src={audioSrc} loop preload="auto" muted />
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute dhol music" : "Mute dhol music"}
        className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-ink/70 backdrop-blur text-mustard flex items-center justify-center hover:bg-ink/90 transition-colors border border-mustard/30"
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
      <div className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase text-beige/80 bg-ink/60 backdrop-blur px-3 py-1 rounded-full border border-mustard/20">
        ♪ Dhol
      </div>
    </div>
  );
}
