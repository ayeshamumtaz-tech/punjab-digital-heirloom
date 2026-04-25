type Props = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
};

/**
 * Self-hosted, autoplay-friendly video clip.
 * Muted + playsInline + loop so it autoplays in all browsers.
 * Includes native controls so users can unmute and rewatch.
 */
export function VideoClip({ src, poster, className = "", ariaLabel }: Props) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-md bg-ink ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={ariaLabel}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
