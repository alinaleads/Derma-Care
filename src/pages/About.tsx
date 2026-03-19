import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, GraduationCap, Heart } from "lucide-react"

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About DermaCare</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a team of board-certified dermatologists dedicated to providing advanced, evidence-based skin and hair treatments.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Dr. Emily Chen</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in clinical and cosmetic dermatology, Dr. Chen leads our team with a commitment to patient-first care and proven results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-3 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">MD, Harvard Medical School</h4>
                    <p className="text-gray-600">Specialized in Dermatology and Cutaneous Surgery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mr-3 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Board Certified</h4>
                    <p className="text-gray-600">American Board of Dermatology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-blue-600 mr-3 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Patient Choice Award</h4>
                    <p className="text-gray-600">Voted Top Dermatologist 2021, 2022, 2023</p>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link to="/contact">Book Consultation with Dr. Chen</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://picsum.photos/seed/doctor_profile/800/1000"
                alt="Dr. Emily Chen"
                className="rounded-2xl shadow-xl w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, DermaCare was built on a simple premise: everyone deserves to feel confident in their own skin. We noticed a gap between luxury spas that lacked medical expertise and clinical offices that felt cold and impersonal.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              We bridge that gap by offering medical-grade, highly effective treatments in a warm, welcoming environment. Our state-of-the-art facility is equipped with the latest technology, ensuring safe and fast results for all our patients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">10k+</h3>
                <p className="text-gray-600">Patients Treated</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">5+</h3>
                <p className="text-gray-600">Advanced Lasers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-2">100%</h3>
                <p className="text-gray-600">Commitment to Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to start your skin journey?</h2>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link to="/contact">Schedule Your Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
