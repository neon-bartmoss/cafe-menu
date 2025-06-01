
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Card 
      className="group card-hover bg-card border-border overflow-hidden animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="absolute top-3 right-3 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              {product.price.toLocaleString()} تومان
            </span>
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              افزودن
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
