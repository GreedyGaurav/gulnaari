import React from "react";
import { Button } from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/10963356/pexels-photo-10963356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Indian traditional clothing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl">
            <h5 className="text-gold-400 font-medium mb-3 tracking-wide">
              PREMIUM COLLECTION
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6">
              Elegance Woven in Tradition
            </h1>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              {/* Discover exquisite Indian suits, crafted with love and tradition. Elevate your wardrobe with our handpicked collection. */}
              This website is for demo purpose we are launching soon !!
            </p>
            <div className="space-x-4">
              <Button variant="primary" size="lg">
                Shop Collection
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
