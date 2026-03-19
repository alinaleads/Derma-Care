import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const categories = ["All", "Acne", "Hair Loss", "Pigmentation", "Laser"]

const galleryItems = [
  { id: 1, category: "Acne", before: "acne_before_1", after: "acne_after_1", title: "Severe Cystic Acne", time: "3 Months" },
  { id: 2, category: "Hair Loss", before: "hair_before_1", after: "hair_after_1", title: "Male Pattern Baldness", time: "6 Months" },
  { id: 3, category: "Pigmentation", before: "pigment_before_1", after: "pigment_after_1", title: "Melasma Treatment", time: "4 Sessions" },
  { id: 4, category: "Acne", before: "acne_before_2", after: "acne_after_2", title: "Hormonal Breakouts", time: "2 Months" },
  { id: 5, category: "Laser", before: "laser_before_1", after: "laser_after_1", title: "Tattoo Removal", time: "8 Sessions" },
  { id: 6, category: "Hair Loss", before: "hair_before_2", after: "hair_after_2", title: "Female Hair Thinning", time: "4 Months" },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Real Results</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the transformative power of our treatments. These are unretouched photos of real patients.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                <div className="relative h-64 flex">
                  <div className="w-1/2 relative border-r border-white">
                    <img
                      src={`https://picsum.photos/seed/${item.before}/400/600`}
                      alt={`Before ${item.title}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Before</div>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src={`https://picsum.photos/seed/${item.after}/400/600`}
                      alt={`After ${item.title}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded">After</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{item.category}</span>
                  </div>
                  <p className="text-sm text-gray-500">Result after: <span className="font-semibold text-gray-700">{item.time}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Want to see these results for yourself?</h2>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
