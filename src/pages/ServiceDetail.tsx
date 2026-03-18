import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, HelpCircle, ShieldCheck } from 'lucide-react';
import CTASection from '../components/CTASection';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6 border border-blue-500/30 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Dermatologist Approved
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution (High Converting Formula) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {service.problem}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {service.agitate}
              </p>
              
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Solution</h3>
                <p className="text-blue-800 leading-relaxed">
                  {service.solution}
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps & Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Procedure</h2>
            <p className="text-lg text-slate-600">What to expect during your {service.title.toLowerCase()} journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Steps */}
            <div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {service.procedureSteps.map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {index + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <p className="text-slate-700 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline & Expected Results */}
            <div className="flex flex-col justify-center">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Expected Timeline</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {service.timeline}
                </p>
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <p className="text-amber-800 font-medium flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    Results vary by individual. Consistency is key to achieving optimal outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about {service.title.toLowerCase()}.</p>
          </div>

          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                  <HelpCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-slate-600 pl-9 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title={`Ready to start your ${service.title.toLowerCase()}?`}
        subtitle="Book your free consultation today and let our experts create a personalized treatment plan just for you."
      />
    </div>
  );
}
