import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">TravelEase is your one-stop solution for all your travel needs. We provide the best deals on flights, hotels, and vacation packages.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
<li><Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-300 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-sm text-gray-300">123 Travel Street, City, Country</p>
            <p className="text-sm text-gray-300">Phone: +1 234 567 890</p>
            <p className="text-sm text-gray-300">Email: info@travelease.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">&copy; 2023 TravelEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

