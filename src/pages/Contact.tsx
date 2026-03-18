import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'acne',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you! Your consultation request has been received. We will contact you shortly.');
    setFormData({ name: '', phone: '', service: 'acne', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Book your free consultation or ask us any questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                We're here to help you achieve your skin and hair goals. Reach out to us via phone, email, or visit our clinic.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Clinic Location</h3>
                    <p className="text-slate-600 leading-relaxed">
                      123 Wellness Avenue, Suite 400<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-100 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phone & WhatsApp</h3>
                    <p className="text-slate-600 leading-relaxed">
                      +1 (555) 123-4567<br />
                      Available Mon-Sat, 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 p-4 rounded-2xl">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Opening Hours</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Book a Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="acne">Acne Treatment</option>
                    <option value="hair-loss">Hair Loss Therapy</option>
                    <option value="skin-whitening">Skin Brightening</option>
                    <option value="laser">Laser Treatments</option>
                    <option value="other">Other / General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us briefly about your concerns..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  Request Appointment
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map (Placeholder) */}
      <section className="h-96 bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-slate-400" />
            <p className="font-medium">Interactive Google Map Integration Here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
