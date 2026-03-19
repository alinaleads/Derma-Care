import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    treatment: "Acne Treatment",
    rating: 5,
    text: "I struggled with severe cystic acne for years. After just one month of treatment here, my skin is finally clear. The doctors are incredibly knowledgeable and caring. I finally feel confident going out without makeup.",
    date: "2 months ago",
    platform: "Google"
  },
  {
    id: 2,
    name: "David K.",
    treatment: "Hair Loss Treatment",
    rating: 5,
    text: "Started noticing significant hair thinning in my late 20s. The PRP sessions here worked wonders. It took about 3 months to see the real difference, but my hair is visibly thicker now. Highly recommend.",
    date: "4 months ago",
    platform: "Google"
  },
  {
    id: 3,
    name: "Emily R.",
    treatment: "Laser Hair Removal",
    rating: 5,
    text: "The laser hair removal process was painless and fast. The clinic is spotless and the staff makes you feel so comfortable. Best investment I've made in myself.",
    date: "1 week ago",
    platform: "Facebook"
  },
  {
    id: 4,
    name: "Michael T.",
    treatment: "Pigmentation Treatment",
    rating: 4,
    text: "Had stubborn dark spots from sun damage. The chemical peels and laser combo they suggested faded them by 80%. Very happy with the results, though the peeling phase was a bit annoying.",
    date: "5 months ago",
    platform: "Google"
  },
  {
    id: 5,
    name: "Jessica L.",
    treatment: "Acne Scar Treatment",
    rating: 5,
    text: "Dr. Chen is a miracle worker. My acne scars were deep and I thought they were permanent. After a series of microneedling and laser sessions, my skin texture is so much smoother.",
    date: "1 month ago",
    platform: "Google"
  },
  {
    id: 6,
    name: "Amanda P.",
    treatment: "Skin Whitening",
    rating: 5,
    text: "My skin was looking very dull and uneven. The glow treatment they provided gave me instant results. I get compliments on my skin all the time now.",
    date: "3 weeks ago",
    platform: "Facebook"
  }
]

export function Reviews() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Patient Reviews</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Don't just take our word for it. Read what our patients have to say about their experience at DermaCare.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-500">Based on 500+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 relative z-10">"{review.text}"</p>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                      <p className="text-xs text-gray-500">{review.treatment}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block">{review.date}</span>
                    <span className="text-xs font-medium text-blue-600">{review.platform}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">View All Google Reviews</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to write your own success story?</h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
