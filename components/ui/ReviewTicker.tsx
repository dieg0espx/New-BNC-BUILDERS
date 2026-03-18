// BNC Builders - Review Ticker Banner Component

'use client';

interface ReviewSnippet {
  name: string;
  text: string;
  rating: number;
  project: string;
}

interface ReviewTickerProps {
  reviews: ReviewSnippet[];
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 inline-block" fill="#CF9C39" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function ReviewTicker({ reviews }: ReviewTickerProps) {
  // Double the reviews for seamless loop
  const items = [...reviews, ...reviews];

  return (
    <section className="bg-zinc-900 py-3 overflow-hidden border-y border-zinc-800">
      <div className="review-ticker-track flex items-center gap-12 whitespace-nowrap">
        {items.map((review, index) => (
          <div key={index} className="flex items-center gap-3 flex-shrink-0 px-2">
            <div className="flex gap-0.5">
              {[...Array(review.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="text-zinc-300 text-sm max-w-[280px] truncate">
              &ldquo;{review.text}&rdquo;
            </span>
            <span className="text-zinc-500 text-xs font-medium">
              — {review.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
