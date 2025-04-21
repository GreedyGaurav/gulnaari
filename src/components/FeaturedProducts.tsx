import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, image, rating, isNew, isBestseller }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
            New Arrival
          </div>
        )}
        {isBestseller && (
          <div className="absolute top-3 left-3 bg-gold-400 text-gray-900 text-xs px-2 py-1 rounded">
            Bestseller
          </div>
        )}
        
        {/* Quick add */}
        <div className="absolute bottom-0 left-0 w-full p-3 bg-white/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full flex items-center justify-center space-x-2 bg-maroon-600 text-white py-2 rounded hover:bg-maroon-700 transition-colors">
            <ShoppingBag size={16} />
            <span>Quick Add</span>
          </button>
        </div>
      </div>
      
      <h3 className="font-medium text-gray-800 mb-1">{name}</h3>
      
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={14} 
            className={i < rating ? "fill-gold-400 text-gold-400" : "text-gray-300"}
          />
        ))}
        <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
      </div>
      
      <p className="text-maroon-600 font-medium">₹{price.toLocaleString()}</p>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Royal Maroon Anarkali Suit",
      price: 4999,
      image: "https://images.pexels.com/photos/14704611/pexels-photo-14704611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "Teal Embroidered Palazzo Set",
      price: 5499,
      image: "https://images.pexels.com/photos/12017177/pexels-photo-12017177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.7,
      isBestseller: true
    },
    {
      id: 3,
      name: "Pastel Green Sharara Suit",
      price: 6299,
      image: "https://images.pexels.com/photos/4124201/pexels-photo-4124201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.9,
      isNew: true
    },
    {
      id: 4,
      name: "Burgundy Wedding Collection",
      price: 8999,
      image: "https://images.pexels.com/photos/14704619/pexels-photo-14704619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5.0,
      isBestseller: true
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-maroon-600 font-medium mb-3">WHAT'S NEW</h6>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Featured Products</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;