import React from 'react';
import { Button } from './ui/Button';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-ivory-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8354158/pexels-photo-8354158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Artisan working on embroidery" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-gold-400 rounded-lg hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-44 h-44 bg-maroon-600 rounded-lg hidden md:block"></div>
          </div>

          <div>
            <h6 className="text-maroon-600 font-medium mb-3">ABOUT US</h6>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              The Story of Gulnaari
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in 2018, Gulnaari was born from a passion for preserving India's rich textile heritage while embracing contemporary design sensibilities. Our journey began in the vibrant lanes of Delhi's textile markets, where tradition meets innovation.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Each Gulnaari piece is a celebration of craftsmanship, with meticulous attention to detail in embroidery, fabric selection, and silhouette. We work directly with artisans across India, ensuring fair trade practices while bringing authentic designs to modern wardrobes.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-serif font-bold text-maroon-600 mb-1">200+</h3>
                <p className="text-sm text-gray-600">Artisans</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-serif font-bold text-maroon-600 mb-1">5000+</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-serif font-bold text-maroon-600 mb-1">15+</h3>
                <p className="text-sm text-gray-600">Collections</p>
              </div>
            </div>
            
            <Button>Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;