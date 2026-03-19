import React, { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", phone: "", service: "", message: "" })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact & Booking</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready for clear skin and healthy hair? Book your free consultation today. Our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
              
              {isSuccess ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4">
                    <Send className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Request Sent Successfully!</h3>
                  <p>Thank you for reaching out. Our team will contact you shortly to confirm your appointment time.</p>
                  <Button className="mt-6" onClick={() => setIsSuccess(false)}>Book Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Treatment Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="acne">Acne Treatment</option>
                      <option value="hair">Hair Loss Treatment</option>
                      <option value="pigmentation">Skin Whitening & Glow</option>
                      <option value="laser">Laser Treatment</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us briefly about your skin/hair concerns..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full text-lg h-12" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Request Appointment"}
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions before booking? Call us or send a message on WhatsApp. Our friendly staff is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">Call us directly to book</p>
                    <a href="tel:+15551234567" className="text-blue-600 font-medium hover:underline text-lg">(555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">For general inquiries</p>
                    <a href="mailto:hello@dermacare.com" className="text-blue-600 font-medium hover:underline">hello@dermacare.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">123 Medical Center Blvd, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Clinic Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 font-medium">Google Maps Integration Here</p>
          </div>
        </div>
      </section>
    </div>
  )
}
