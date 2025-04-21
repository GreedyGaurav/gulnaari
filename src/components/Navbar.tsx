import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Link } from "./ui/Link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/logo.jpg"
                alt="Gulnaari Logo"
                className="h-18 w-40" // adjust height/width as needed
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/collections" className="nav-link">
              Collections
            </Link>
            <Link href="/new-arrivals" className="nav-link">
              New Arrivals
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="nav-icon" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="nav-icon" aria-label="Account">
              <User size={20} />
            </button>
            <button className="nav-icon relative" aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-maroon-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="md:hidden nav-icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-lg px-4 py-5 space-y-4">
          <Link href="/" className="block py-2">
            Home
          </Link>
          <Link href="/collections" className="block py-2">
            Collections
          </Link>
          <Link href="/new-arrivals" className="block py-2">
            New Arrivals
          </Link>
          <Link href="/about" className="block py-2">
            About
          </Link>
          <Link href="/contact" className="block py-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
