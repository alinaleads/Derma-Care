import CTASection from '../components/CTASection';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      category: 'Acne Treatment',
      before: 'https://images.unsplash.com/photo-1512496015851-a1cbfc38f7ef?auto=format&fit=crop&q=80&w=600',
      after: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600',
      timeline: '12 Weeks',
      description: 'Severe cystic acne treated with our comprehensive protocol.'
    },
    {
      id: 2,
      category: 'Hair Loss Therapy',
      before: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600',
      after: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=600',
      timeline: '6 Months',
      description: 'Significant hair regrowth after 4 PRP sessions.'
    },
    {
      id: 3,
      category: 'Skin Brightening',
      before: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=600',
      after: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600',
      timeline: '8 Weeks',
      description: 'Reduction in melasma and overall skin tone improvement.'
    },
    {
      id: 4,
      category: 'Laser Treatment',
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
      after: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600',
      timeline: '4 Sessions',
      description: 'Acne scar reduction using fractional laser resurfacing.'
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
            Real Results
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            See the transformative power of our medical-grade treatments.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-900">{item.category}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                    {item.timeline}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100">
                  <div className="relative group">
                    <img
                      src={item.before}
                      alt={`${item.category} Before`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      Before
                    </div>
                  </div>
                  <div className="relative group">
                    <img
                      src={item.after}
                      alt={`${item.category} After`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      After
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-50">
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to see your own transformation?"
        subtitle="Book a consultation today and let's create your personalized treatment plan."
      />
    </div>
  );
}
