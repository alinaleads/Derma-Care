import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function CTASection({
  title = "Ready for Clear, Healthy Skin?",
  subtitle = "Book your free consultation today and let our experts create a personalized treatment plan just for you.",
  buttonText = "Get Your Free Consultation"
}: CTASectionProps) {
  return (
    <section className="bg-blue-600 py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-blue-600 bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 mr-2" />
            {buttonText}
          </Link>
          <a
            href="tel:+15551234567"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            Call Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
