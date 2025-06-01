
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';

export const Cart = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotalPrice } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent side="left" className="w-full sm:w-96 bg-[#2a2a2a] border-[#444]">
        <SheetHeader className="mb-6 border-b border-[#444] pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-white text-lg">سبد خرید</SheetTitle>
            <Button
              onClick={toggleCart}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-[#444] p-1"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-500" />
            <p className="text-gray-400">سبد خرید شما خالی است</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-white text-sm font-medium">{item.name}</h4>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 p-0 text-gray-400 hover:text-white hover:bg-[#444]"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0 text-gray-400 hover:text-white hover:bg-[#444]"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    
                    <span className="w-8 text-center text-white text-sm">{item.quantity}</span>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0 text-gray-400 hover:text-white hover:bg-[#444]"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#444] pt-4 mt-6">
              <div className="flex justify-between items-center text-lg">
                <span className="text-white">مجموع:</span>
                <span className="text-white font-bold">{getTotalPrice().toLocaleString()} تومان</span>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
