import React from 'react';
import { Link } from './ui/Link';

interface CategoryProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ title, image, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
        <Link 
          href={link} 
          className="inline-block text-gold-400 border-b border-gold-400 hover:text-gold-300 hover:border-gold-300"
        >
          View Collection
        </Link>
      </div>
    </div>
  );
};

const Categories: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: 'Anarkali Suits',
      image: 'https://images.pexels.com/photos/5559985/pexels-photo-5559985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/collections/anarkali'
    },
    {
      id: 2,
      title: 'Palazzo Suits',
      image: 'https://images.pexels.com/photos/12014286/pexels-photo-12014286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/collections/palazzo'
    },
    {
      id: 3,
      title: 'Sharara Suits',
      image: 'https://images.pexels.com/photos/3817447/pexels-photo-3817447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/collections/sharara'
    },
    {
      id: 4,
      title: 'Wedding Collection',
      image: 'https://images.pexels.com/photos/2814763/pexels-photo-2814763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/collections/wedding'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-ivory-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-maroon-600 font-medium mb-3">DISCOVER</h6>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Our Collections</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;