import { Star, Quote } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Emily R.',
      service: 'Acne Treatment',
      rating: 5,
      text: 'I struggled with cystic acne for years and tried everything. Dr. Jenkins created a custom plan for me, and within 3 months, my skin is completely clear. I finally have my confidence back!',
      date: '2 months ago'
    },
    {
      id: 2,
      name: 'Michael T.',
      service: 'Hair Loss Therapy',
      rating: 5,
      text: 'The PRP treatments here are incredible. I was skeptical at first, but after 4 sessions, my hair is noticeably thicker and the shedding has stopped completely. Highly recommend.',
      date: '4 months ago'
    },
    {
      id: 3,
      name: 'Sarah L.',
      service: 'Skin Brightening',
      rating: 5,
      text: 'My melasma was really affecting my self-esteem. The laser and peel combination they used faded my dark spots significantly. The staff is so professional and caring.',
      date: '1 month ago'
    },
    {
      id: 4,
      name: 'David K.',
      service: 'Laser Hair Removal',
      rating: 5,
      text: 'Virtually painless and super effective. I\'ve had 5 sessions on my back and the hair is almost completely gone. The clinic is spotless and the technology is top-notch.',
      date: '3 weeks ago'
    },
    {
      id: 5,
      name: 'Jessica M.',
      service: 'Acne Scar Treatment',
      rating: 5,
      text: 'The fractional laser treatments smoothed out my deep acne scars more than I thought possible. It\'s truly life-changing. Thank you DermaCare team!',
      date: '5 months ago'
    },
    {
      id: 6,
      name: 'Amanda B.',
      service: 'General Consultation',
      rating: 5,
      text: 'Dr. Jenkins takes the time to listen and explain everything clearly. You never feel rushed. Best dermatologist experience I\'ve ever had.',
      date: '1 week ago'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-blue-600 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Patient Reviews
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our happy patients.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-slate-900 mb-2">4.9</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-500 font-medium">Average Rating</p>
            </div>
            <div className="hidden md:block w-px h-24 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-slate-900 mb-2">1,000+</p>
              <p className="text-slate-500 font-medium mt-8">Happy Patients</p>
            </div>
            <div className="hidden md:block w-px h-24 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-slate-900 mb-2">15+</p>
              <p className="text-slate-500 font-medium mt-8">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{review.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{review.service}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100 -z-10" />
                  <p className="text-slate-600 leading-relaxed relative z-10">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-50">
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
