import { Link } from "react-router-dom"
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
                D
              </div>
              <span className="text-xl font-bold text-white">DermaCare</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Safe, doctor-led skin & hair treatments with visible results in 30 days. Your journey to flawless skin starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Acne Treatment</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Hair Loss Treatment</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Skin Whitening & Glow</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Laser Treatments</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Anti-Aging Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Before & After</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Patient Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                <span>123 Medical Center Blvd, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                <a href="mailto:hello@dermacare.com" className="hover:text-white">hello@dermacare.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                <span>Mon-Fri: 9am - 6pm<br />Sat: 10am - 2pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} DermaCare Clinic. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
