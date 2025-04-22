import React from "react";
import { Link } from "./ui/Link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Gulnaari</h3>
            <p className="mb-6 text-gray-400 leading-relaxed">
              Celebrating the rich textile heritage of India through
              contemporary designs that honor tradition and embrace modernity.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/_gulnaari?igsh=dHEyZzlzN2gyYWd3"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              {/* <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/collections"
                  className="text-gray-400 hover:text-white"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-gray-400 hover:text-white"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-medium mb-4 border-b border-gray-700 pb-2">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-400 hover:text-white"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-gray-400 hover:text-white"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/care-instructions"
                  className="text-gray-400 hover:text-white"
                >
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-gold-400 mr-2 mt-1 flex-shrink-0"
                />
                <span>xyz</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold-400 mr-2 flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold-400 mr-2 flex-shrink-0" />
                <span>demo@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Gulnaari. All rights reserved. Founder: Ishita Sharma</p>
          <p className="mt-2 md:mt-0">
            <span className="inline-flex items-center">
              Payment Methods:
              <span className="ml-2 font-medium">Visa</span>
              <span className="mx-1">|</span>
              <span className="font-medium">Mastercard</span>
              <span className="mx-1">|</span>
              <span className="font-medium">PayPal</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
