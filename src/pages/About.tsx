import { Award, ShieldCheck, Heart, GraduationCap } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function About() {
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
            About DermaCare Clinic
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted destination for medical-grade skin and hair treatments.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000"
                alt="Dr. Sarah Jenkins"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                <h2 className="text-3xl font-bold text-white mb-1">Dr. Sarah Jenkins</h2>
                <p className="text-blue-200 font-medium">MD, FAAD - Lead Dermatologist</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Meet Your Expert</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over 15 years of clinical experience, Dr. Jenkins is a board-certified dermatologist specializing in advanced acne protocols, hair restoration, and laser therapies. She believes in a holistic, patient-first approach, combining medical expertise with the latest aesthetic technologies.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "My goal is not just to treat skin conditions, but to restore confidence. Every patient deserves a personalized plan that delivers real, visible results."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-slate-900">Education</h4>
                    <p className="text-sm text-slate-500">Harvard Medical School</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-50 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-slate-900">Board Certified</h4>
                    <p className="text-sm text-slate-500">American Board of Dermatology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Story & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story & Values</h2>
            <p className="text-lg text-slate-600">Built on trust, driven by results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Safety First</h3>
              <p className="text-slate-600 leading-relaxed">
                All our treatments are FDA-approved and performed under strict medical supervision. We never compromise on your safety or health.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Proven Results</h3>
              <p className="text-slate-600 leading-relaxed">
                We don't do guesswork. Our protocols are evidence-based, designed to deliver visible, long-lasting improvements in 30 days.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Patient Care</h3>
              <p className="text-slate-600 leading-relaxed">
                From your first consultation to your final follow-up, we provide compassionate, personalized care tailored to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Start Your Journey?"
        subtitle="Schedule a consultation with Dr. Jenkins and discover the right treatment plan for you."
      />
    </div>
  );
}
