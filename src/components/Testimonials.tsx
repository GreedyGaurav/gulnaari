import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Delhi",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The Anarkali suit I purchased from Gulnaari exceeded all my expectations. The craftsmanship is exquisite, and the fit is perfect. I received so many compliments at my sister's wedding!"
    },
    {
      id: 2,
      name: "Ananya Patel",
      location: "Mumbai",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "I've been a loyal customer of Gulnaari for over two years now. Their attention to detail and commitment to quality is unmatched. Every piece feels special and made with love."
    },
    {
      id: 3,
      name: "Meera Reddy",
      location: "Bangalore",
      image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      text: "The palazzo suit I ordered arrived promptly and was even more beautiful in person than in the photos. The fabric quality is exceptional, and the embroidery is detailed and intricate."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-maroon-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-maroon-600 font-medium mb-3">TESTIMONIALS</h6>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-4"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16} 
                      className={i < testimonials[currentIndex].rating ? "fill-gold-400 text-gold-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-4">"{testimonials[currentIndex].text}"</p>
                
                <div>
                  <h4 className="font-serif font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-maroon-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-maroon-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-maroon-500"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-maroon-600" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-maroon-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;