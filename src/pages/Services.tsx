import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const services = [
  {
    id: "acne",
    title: "Acne & Scar Treatment",
    description: "Medical-grade solutions to clear active acne and fade stubborn scars.",
    problem: "Struggling with persistent breakouts, painful cysts, or dark spots left behind by old pimples?",
    solution: "We use a combination of prescription topicals, chemical peels, and advanced laser therapy to target acne at its root and resurface the skin.",
    benefits: ["Clears active breakouts", "Reduces inflammation", "Fades acne scars", "Prevents future flare-ups"],
    timeline: "Visible improvement in 2-4 weeks. Significant clearing in 3 months.",
    img: "acne_treatment"
  },
  {
    id: "hair",
    title: "Hair Loss Treatment",
    description: "Clinically proven therapies to stop hair fall and stimulate regrowth.",
    problem: "Noticing thinning hair, a receding hairline, or excessive shedding in the shower?",
    solution: "Our comprehensive approach includes PRP (Platelet-Rich Plasma) therapy, mesotherapy, and customized medical plans to awaken dormant hair follicles.",
    benefits: ["Stops excessive hair fall", "Stimulates new growth", "Thickens existing hair", "Improves scalp health"],
    timeline: "Reduced shedding in 4 weeks. New growth visible in 3-4 months.",
    img: "hair_treatment"
  },
  {
    id: "glow",
    title: "Skin Whitening & Glow",
    description: "Safe, effective treatments for pigmentation, melasma, and dull skin.",
    problem: "Dealing with uneven skin tone, sun damage, dark patches, or a generally dull complexion?",
    solution: "We utilize advanced Q-switch lasers, glutathione therapy, and specialized peels to break down excess melanin and restore a radiant glow.",
    benefits: ["Evens skin tone", "Reduces dark spots", "Brightens complexion", "Improves skin texture"],
    timeline: "Brighter skin immediately after peels. Pigmentation fades over 3-6 sessions.",
    img: "skin_glow"
  },
  {
    id: "laser",
    title: "Advanced Laser Treatments",
    description: "State-of-the-art laser technology for hair removal, tattoo removal, and anti-aging.",
    problem: "Tired of shaving, regretting an old tattoo, or noticing fine lines and wrinkles?",
    solution: "Our clinic is equipped with FDA-approved lasers tailored for various skin types and concerns, ensuring safe and effective results.",
    benefits: ["Permanent hair reduction", "Safe tattoo removal", "Collagen stimulation", "Wrinkle reduction"],
    timeline: "Varies by treatment. Hair reduction visible after 1st session.",
    img: "laser_treatment"
  }
]

export function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive, doctor-led treatments designed to address your specific skin and hair concerns with proven results.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <img
                    src={`https://picsum.photos/seed/${service.img}/800/600`}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-blue-600 font-medium mb-6">{service.description}</p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">The Problem:</h4>
                      <p className="text-gray-600">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Our Solution:</h4>
                      <p className="text-gray-600">{service.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-1">Expected Timeline:</h4>
                      <p className="text-blue-800 text-sm">{service.timeline}</p>
                    </div>
                  </div>
                  
                  <Button size="lg" asChild>
                    <Link to={`/services/${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Not sure which treatment is right for you?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our dermatologists. We'll analyze your skin/hair and create a customized treatment plan just for you.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
