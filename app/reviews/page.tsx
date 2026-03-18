// BNC Builders - Reviews Page

'use client';

import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { ReviewTicker } from '@/components/ui/ReviewTicker';
import { bannerImages } from '@/lib/constants/images';
import { company } from '@/lib/constants/company';
import { useInView } from '@/lib/hooks/useInView';

const reviews = [
  {
    name: 'David & Maria T.',
    location: 'Escondido, CA',
    rating: 5,
    text: 'We were nervous about our first major renovation, but BNC Builders made the whole process feel effortless. They kept us informed daily and the final result looks like something from a magazine.',
    project: 'Kitchen Remodel',
  },
  {
    name: 'Robert H.',
    location: 'Carlsbad, CA',
    rating: 5,
    text: 'After interviewing five contractors, BNC stood out for their communication style. They actually listened to what we wanted and delivered exactly that - no surprises, no excuses.',
    project: 'Bathroom Renovation',
  },
  {
    name: 'Patricia W.',
    location: 'Poway, CA',
    rating: 5,
    text: 'BNC turned our unused backyard space into a beautiful rental unit. The permit process seemed daunting, but they handled everything. Now we have monthly income covering our mortgage.',
    project: 'ADU Construction',
  },
  {
    name: 'James & Linda K.',
    location: 'Encinitas, CA',
    rating: 5,
    text: 'The outdoor kitchen they built transformed how our family lives. We spend every weekend out there now. The quality of materials and craftsmanship exceeded our expectations.',
    project: 'Outdoor Kitchen',
  },
  {
    name: 'Michael S.',
    location: 'La Mesa, CA',
    rating: 5,
    text: 'Kitchen, two bathrooms, and new flooring throughout - BNC coordinated everything seamlessly. Their project manager became like a trusted family friend.',
    project: 'Whole Home Remodel',
  },
  {
    name: 'Angela R.',
    location: 'Oceanside, CA',
    rating: 5,
    text: 'Our room addition gave our growing family the space we desperately needed without having to leave the neighborhood we love. The addition looks like it was always part of our home.',
    project: 'Room Addition',
  },
  {
    name: 'Thomas & Susan B.',
    location: 'San Marcos, CA',
    rating: 5,
    text: 'Years of neglect left our deck dangerous. The BNC team diagnosed structural issues we had no idea existed and rebuilt it with quality materials that will last decades.',
    project: 'Deck Restoration',
  },
  {
    name: 'Jennifer M.',
    location: 'Vista, CA',
    rating: 5,
    text: 'We chose BNC based on neighbor recommendations. Now I understand why - the attention to detail is remarkable. Every cabinet aligns perfectly.',
    project: 'Kitchen Remodel',
  },
  {
    name: 'Richard & Carol P.',
    location: 'Escondido, CA',
    rating: 5,
    text: 'Our master bathroom remodel transformed a cramped space into a spa-like retreat. The heated floors and walk-in shower make every morning feel luxurious.',
    project: 'Master Bath Remodel',
  },
  {
    name: 'Margaret L.',
    location: 'Rancho Santa Fe, CA',
    rating: 5,
    text: 'The 3D design service showed us exactly what our backyard would become. The finished landscape exceeded those renderings - BNC truly created paradise.',
    project: 'Landscape Transformation',
  },
  {
    name: 'William & Nancy D.',
    location: 'Poway, CA',
    rating: 5,
    text: 'Our garage conversion created a beautiful home office. Working from home no longer means working from the kitchen table. The team was professional throughout.',
    project: 'Garage Conversion',
  },
  {
    name: 'Elizabeth C.',
    location: 'La Jolla, CA',
    rating: 5,
    text: 'After disappointing experiences with other contractors, BNC restored my faith. Our kitchen remodel came in on budget and finished ahead of schedule. That rarely happens in construction.',
    project: 'Kitchen Renovation',
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="What Our Clients Say About BNC Builders"
        subtitle="Real stories from homeowners who trusted us with their remodeling projects. Their experiences speak louder than our promises."
        backgroundImage={bannerImages.reviews}
      />

      {/* Review Ticker */}
      <ReviewTicker reviews={reviews} />

      {/* Stats */}
      <StatsSection />

      {/* Reviews Grid */}
      <ReviewsGrid reviews={reviews} />

      {/* CTA */}
      <CTABanner
        title="Ready to Become Our Next Success Story?"
        subtitle="Join hundreds of satisfied homeowners who trusted BNC Builders to transform their homes."
      />
    </>
  );
}

// Stats Section with animations
function StatsSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const stats = [
    { value: company.projectsCompleted, label: 'Happy Homeowners' },
    { value: company.experience, label: 'Years Building Trust' },
    { value: '5.0', label: 'Average Star Rating' },
    { value: 'A+', label: 'BBB Accredited' },
  ];

  return (
    <Section background="gray" padding="md">
      <Container>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`card-animate ${inView ? 'in-view' : ''} hover:scale-110 transition-transform`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-gold">{stat.value}</div>
              <div className="text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Reviews Grid with animations
interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="white">
      <Container>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-zinc-50 rounded-lg p-6 hover-lift card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="#CF9C39" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-zinc-700 mb-4">&quot;{review.text}&quot;</p>

              {/* Reviewer Info */}
              <div className="border-t border-zinc-200 pt-4">
                <p className="font-semibold text-zinc-900">{review.name}</p>
                <p className="text-sm text-zinc-500">{review.location}</p>
                <p className="text-sm text-gold">{review.project}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
