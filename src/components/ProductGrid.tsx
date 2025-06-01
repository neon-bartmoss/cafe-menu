
import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { dataService } from '@/services/dataService';
import { Product } from '@/types/product';

interface ProductGridProps {
  category: string;
}

export const ProductGrid = ({ category }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{id: string, name: string}[]>([]);

  useEffect(() => {
    const menuData = dataService.getMenuData();
    const categoriesData = dataService.getCategories();
    setProducts(menuData[category] || []);
    setCategories(categoriesData);
  }, [category]);

  const getCategoryName = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.name || categoryId;
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8 gradient-text">
        {getCategoryName(category)}
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
