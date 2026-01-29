// BNC Builders - Customer Referral Program Page

import { Metadata } from 'next';
import { HeroSubpage } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { bannerImages, specialImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { ReferralForm } from './ReferralForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Refer a Friend, Earn Rewards | BNC Builders Customer Referral Program',
  description: 'Know someone who needs a kitchen remodel Escondido CA, bathroom remodeling San Diego, ADU construction, or home renovation? Refer them to BNC Builders and earn rewards through our Refer and Dine program.',
});

export default function CustomerReferralProgramPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Share the BNC Builders Experience, Earn Rewards"
        subtitle="Our best projects come from referrals. When you send friends, family, or neighbors our way for kitchen remodel San Diego, bathroom remodeling Escondido, ADUs San Diego, or any remodeling Escondido project, we say thank you with rewards you'll actually use."
        backgroundImage={bannerImages.faq}
      />

      {/* Program Info */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                The Refer and Dine Program
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                You trusted BNC Builders with your kitchen remodel Escondido CA, bathroom remodeling San Diego, deck repair San Diego, or exterior remodeling project. Now share that experience. When someone you refer completes a project with us, we send you a gift card to your favorite restaurant - our way of thanking you for spreading the word about quality remodeling Escondido craftsmanship.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Simple process - just fill out the form below with your referral details</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Reward sent after your referral completes their kitchen remodeling services, ADUs Los Angeles, or other project</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">No limit on referrals - refer as many friends as you like for kitchen renovation San Diego, garage remodeling, or outdoor kitchens projects</span>
                </li>
              </ul>
            </div>
            <div>
              <CloudinaryImage
                publicId={specialImages.referAndDine}
                alt="BNC Builders Refer and Dine Rewards Program"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Referral Form */}
      <Section background="gray">
        <Container size="md">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-8">
            Submit Your Referral
          </h2>
          <ReferralForm />
        </Container>
      </Section>
    </>
  );
}
