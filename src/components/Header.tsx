
import { Coffee, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export const Header = () => {
  const { items, toggleCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-full">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">کافه شاپ</h1>
              <p className="text-muted-foreground text-sm">منوی نوشیدنی های گرم و سرد</p>
            </div>
          </div>
          
          <Button 
            onClick={toggleCart}
            variant="outline" 
            size="lg" 
            className="relative hover:bg-primary/10 border-primary/20"
          >
            <ShoppingCart className="w-5 h-5 ml-2" />
            سبد خرید
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
