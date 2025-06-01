
import { ProductCard } from './ProductCard';
import { menuData } from '@/data/menuData';

interface ProductGridProps {
  category: string;
}

export const ProductGrid = ({ category }: ProductGridProps) => {
  const products = menuData[category] || [];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8 gradient-text">
        {category === 'hot-drinks' && 'نوشیدنی های گرم'}
        {category === 'cold-drinks' && 'نوشیدنی های سرد'}
        {category === 'desserts' && 'دسر و شیرینی'}
        {category === 'milkshakes' && 'میلک شیک'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
