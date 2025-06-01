
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';

export const Cart = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotalPrice } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent side="left" className="w-full sm:w-96 bg-background border-border">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <ShoppingBag className="w-5 h-5" />
            سبد خرید
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">سبد خرید شما خالی است</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{item.name}</h4>
                    <p className="text-sm text-primary font-bold">
                      {item.price.toLocaleString()} تومان
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-foreground">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-foreground">مجموع:</span>
                <span className="text-primary">{getTotalPrice().toLocaleString()} تومان</span>
              </div>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                تکمیل سفارش
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
