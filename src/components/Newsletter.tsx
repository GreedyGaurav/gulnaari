import React, { useState } from 'react';
import { Button } from './ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the submission state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-maroon-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Join the Gulnaari Family
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Subscribe to our newsletter for exclusive offers, new arrivals, styling tips, and a 10% discount on your first order.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
              required
            />
            <Button 
              type="submit" 
              variant="secondary"
              className="whitespace-nowrap"
            >
              {isSubmitted ? "Thank You!" : "Subscribe Now"}
            </Button>
          </form>
          
          <p className="text-white/70 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive our emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;