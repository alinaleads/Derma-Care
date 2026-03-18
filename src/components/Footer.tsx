import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">Derma<span className="text-blue-500">Care</span></span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Safe, doctor-led skin & hair treatments with visible results in 30 days. Your journey to confidence starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">All Services</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-blue-400 transition-colors">Before & After</Link></li>
              <li><Link to="/reviews" className="text-sm hover:text-blue-400 transition-colors">Patient Reviews</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/acne" className="text-sm hover:text-blue-400 transition-colors">Acne Treatment</Link></li>
              <li><Link to="/services/hair-loss" className="text-sm hover:text-blue-400 transition-colors">Hair Loss Therapy</Link></li>
              <li><Link to="/services/skin-whitening" className="text-sm hover:text-blue-400 transition-colors">Skin Brightening</Link></li>
              <li><Link to="/services/laser" className="text-sm hover:text-blue-400 transition-colors">Laser Treatments</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Wellness Avenue, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-sm">hello@dermacare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} DermaCare Clinic. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
