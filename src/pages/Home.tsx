import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react"

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
                #1 Rated Dermatology Clinic
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Safe, Doctor-Led Skin & Hair Treatments
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Get visible results in 30 days. Expert care for acne, hair loss, and pigmentation by certified dermatologists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/contact">Book Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src={`https://picsum.photos/seed/face${i}/100/100`}
                      alt=""
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">1000+ Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
              <img
                src="https://picsum.photos/seed/clinic/800/600"
                alt="Dermatology Clinic"
                className="rounded-2xl shadow-2xl relative z-10 object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Certified</p>
                  <p className="text-lg font-bold text-gray-900">Dermatologists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="h-10 w-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <ShieldCheck className="h-10 w-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Board</h3>
              <p className="text-gray-600">Certified Doctors</p>
            </div>
            <div>
              <Star className="h-10 w-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
              <p className="text-gray-600">Patient Rating</p>
            </div>
            <div>
              <Clock className="h-10 w-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">30 Days</h3>
              <p className="text-gray-600">Visible Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Treatments</h2>
            <p className="text-lg text-gray-600">Advanced solutions tailored to your unique skin and hair needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Acne Treatment",
                desc: "Clear your skin permanently with our customized, medical-grade acne protocols.",
                img: "acne",
              },
              {
                title: "Hair Loss Solutions",
                desc: "Regrow your hair with advanced PRP and laser therapies proven to work.",
                img: "hair",
              },
              {
                title: "Skin Rejuvenation",
                desc: "Restore your youthful glow with our premium laser and peeling treatments.",
                img: "skin",
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
                <img
                  src={`https://picsum.photos/seed/${service.img}/600/400`}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link to="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* High-Converting Formula Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Struggling with stubborn skin issues?</h2>
                <ul className="space-y-4 mb-8 text-blue-100 text-lg">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 mr-3 shrink-0 text-emerald-400" />
                    <span>Tried everything but seeing no results?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 mr-3 shrink-0 text-emerald-400" />
                    <span>Tired of wasting money on products that don't work?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 mr-3 shrink-0 text-emerald-400" />
                    <span>Our dermatologist-approved treatments work in 30 days.</span>
                  </li>
                </ul>
                <div>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8" asChild>
                    <Link to="/contact">Get Your Free Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://picsum.photos/seed/doctor/800/800"
                  alt="Doctor consulting patient"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Real Patients, Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-left">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "I struggled with severe acne for years. After just one month of treatment here, my skin is finally clear. The doctors are incredibly knowledgeable and caring."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="Patient"
                    className="h-12 w-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah M.</h4>
                    <p className="text-sm text-gray-500">Acne Treatment</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button size="lg" asChild>
            <Link to="/reviews">Read More Reviews</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
