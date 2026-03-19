import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const servicesData = {
  acne: {
    title: "Acne & Scar Treatment",
    description: "Medical-grade solutions to clear active acne and fade stubborn scars.",
    problem: "Struggling with persistent breakouts, painful cysts, or dark spots left behind by old pimples?",
    solution: "We use a combination of prescription topicals, chemical peels, and advanced laser therapy to target acne at its root and resurface the skin.",
    benefits: ["Clears active breakouts", "Reduces inflammation", "Fades acne scars", "Prevents future flare-ups"],
    timeline: "Visible improvement in 2-4 weeks. Significant clearing in 3 months.",
    img: "acne_treatment"
  },
  hair: {
    title: "Hair Loss Treatment",
    description: "Clinically proven therapies to stop hair fall and stimulate regrowth.",
    problem: "Noticing thinning hair, a receding hairline, or excessive shedding in the shower?",
    solution: "Our comprehensive approach includes PRP (Platelet-Rich Plasma) therapy, mesotherapy, and customized medical plans to awaken dormant hair follicles.",
    benefits: ["Stops excessive hair fall", "Stimulates new growth", "Thickens existing hair", "Improves scalp health"],
    timeline: "Reduced shedding in 4 weeks. New growth visible in 3-4 months.",
    img: "hair_treatment"
  },
  glow: {
    title: "Skin Whitening & Glow",
    description: "Safe, effective treatments for pigmentation, melasma, and dull skin.",
    problem: "Dealing with uneven skin tone, sun damage, dark patches, or a generally dull complexion?",
    solution: "We utilize advanced Q-switch lasers, glutathione therapy, and specialized peels to break down excess melanin and restore a radiant glow.",
    benefits: ["Evens skin tone", "Reduces dark spots", "Brightens complexion", "Improves skin texture"],
    timeline: "Brighter skin immediately after peels. Pigmentation fades over 3-6 sessions.",
    img: "skin_glow"
  },
  laser: {
    title: "Advanced Laser Treatments",
    description: "State-of-the-art laser technology for hair removal, tattoo removal, and anti-aging.",
    problem: "Tired of shaving, regretting an old tattoo, or noticing fine lines and wrinkles?",
    solution: "Our clinic is equipped with FDA-approved lasers tailored for various skin types and concerns, ensuring safe and effective results.",
    benefits: ["Permanent hair reduction", "Safe tattoo removal", "Collagen stimulation", "Wrinkle reduction"],
    timeline: "Varies by treatment. Hair reduction visible after 1st session.",
    img: "laser_treatment"
  }
}

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const service = id ? servicesData[id as keyof typeof servicesData] : null

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Button asChild>
          <Link to="/services">Back to Services</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{service.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={`https://picsum.photos/seed/${service.img}/800/600`}
                alt={service.title}
                className="rounded-2xl shadow-lg w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">The Problem</h3>
                  <p className="text-gray-600 text-lg">{service.problem}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Solution</h3>
                  <p className="text-gray-600 text-lg">{service.solution}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 shrink-0" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2 text-lg">Expected Timeline</h4>
                  <p className="text-blue-800">{service.timeline}</p>
                </div>
              </div>
              
              <div className="mt-10">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8" asChild>
                  <Link to={`/contact?service=${id}`}>Book This Treatment <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Is the treatment painful?</h4>
              <p className="text-gray-600">We use topical numbing creams and advanced cooling systems to ensure your comfort during all procedures.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">How many sessions will I need?</h4>
              <p className="text-gray-600">The number of sessions varies depending on your specific condition and goals. We will provide a customized plan during your consultation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Are there any side effects?</h4>
              <p className="text-gray-600">Minor redness or swelling may occur temporarily. Our doctor-led approach minimizes risks and ensures safe recovery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
