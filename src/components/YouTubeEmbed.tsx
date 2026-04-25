type Props = {
  videoId: string;
  title: string;
  className?: string;
};

/**
 * Privacy-friendly YouTube embed (youtube-nocookie.com).
 * Renders a responsive 16:9 iframe.
 */
export function YouTubeEmbed({ videoId, title, className = "" }: Props) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-md bg-ink ${className}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
