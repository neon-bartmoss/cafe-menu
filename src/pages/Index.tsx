
import { useState } from 'react';
import { Header } from '@/components/Header';
import { MenuCategories } from '@/components/MenuCategories';
import { ProductGrid } from '@/components/ProductGrid';
import { CartProvider } from '@/contexts/CartContext';
import { Cart } from '@/components/Cart';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('hot-drinks');

  return (
    <CartProvider>
      <div className="min-h-screen bg-background font-vazir">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <MenuCategories 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
          <ProductGrid category={selectedCategory} />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
