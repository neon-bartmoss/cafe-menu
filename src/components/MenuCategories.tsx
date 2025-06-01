
import { Coffee, IceCream, Cake, Milk } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MenuCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'hot-drinks', name: 'نوشیدنی گرم', icon: Coffee },
  { id: 'cold-drinks', name: 'نوشیدنی سرد', icon: IceCream },
  { id: 'desserts', name: 'دسر و شیرینی', icon: Cake },
  { id: 'milkshakes', name: 'میلک شیک', icon: Milk },
];

export const MenuCategories = ({ selectedCategory, onCategoryChange }: MenuCategoriesProps) => {
  return (
    <div className="mb-12 animate-fade-in">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="lg"
              className={`flex items-center gap-2 px-6 py-3 transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                  : 'border-primary/20 hover:bg-primary/10 hover:border-primary/40'
              }`}
            >
              <Icon className="w-5 h-5" />
              {category.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
