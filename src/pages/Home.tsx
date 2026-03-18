import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import CTASection from '../components/CTASection';
import { services } from '../data/services';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
            alt="Clinic Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6 border border-blue-100">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Certified Dermatologists
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Safe, doctor-led skin & hair treatments with <span className="text-blue-600">visible results in 30 days</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Struggling with acne, hair loss, or pigmentation? Our expert dermatologists provide personalized, medical-grade solutions that actually work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                See Real Results
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-slate-900">15+ Years</p>
                  <p className="text-xs text-slate-500">Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-emerald-100 rounded-full p-2">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-slate-900">10,000+</p>
                  <p className="text-xs text-slate-500">Happy Patients</p>
                </div>
              </div>
              <div className="flex items-center col-span-2 md:col-span-1">
                <div className="flex-shrink-0 bg-amber-100 rounded-full p-2">
                  <Star className="w-6 h-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-slate-900">4.9/5 Rating</p>
                  <p className="text-xs text-slate-500">On Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Specialized Treatments</h2>
            <p className="text-lg text-slate-600">We offer advanced, medical-grade solutions tailored to your unique skin and hair needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.shortDescription}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting Formula Section (Problem -> Agitate -> Solution -> Proof) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Tired of trying everything but seeing no results?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">1</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">The Problem</h4>
                    <p className="text-slate-600">Struggling with stubborn acne, hair fall, or pigmentation that won't go away.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">2</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">The Agitation</h4>
                    <p className="text-slate-600">Wasting money on over-the-counter creams and home remedies that only mask the issue temporarily.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">The Solution</h4>
                    <p className="text-slate-600">Our dermatologist-approved, medical-grade treatments target the root cause for lasting results.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
              >
                Get Your Free Consultation
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                alt="Doctor consulting patient"
                className="relative rounded-3xl shadow-xl z-10 w-full object-cover h-[500px]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">98%</p>
                  <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
