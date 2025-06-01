
import { Product } from '@/types/product';

export const menuData: Record<string, Product[]> = {
  'hot-drinks': [
    {
      id: 'espresso',
      name: 'اسپرسو',
      description: 'قهوه تک‌شات فشرده و ۳۰ میلی‌لیتری',
      price: 65000,
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=300&fit=crop',
      category: 'hot-drinks'
    },
    {
      id: 'americano',
      name: 'آمریکانو',
      description: 'اسپرسو با آب داغ',
      price: 75000,
      image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=300&h=300&fit=crop',
      category: 'hot-drinks'
    },
    {
      id: 'cappuccino',
      name: 'کاپوچینو',
      description: 'اسپرسو با شیر بخارپز شده و فوم',
      price: 85000,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop',
      category: 'hot-drinks'
    },
    {
      id: 'latte',
      name: 'لاته',
      description: 'اسپرسو با شیر بخارپز شده',
      price: 90000,
      image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&h=300&fit=crop',
      category: 'hot-drinks'
    },
    {
      id: 'mocha',
      name: 'موکا',
      description: 'اسپرسو با شکلات و شیر',
      price: 95000,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      category: 'hot-drinks'
    },
    {
      id: 'macchiato',
      name: 'ماکیاتو',
      description: 'اسپرسو با کمی شیر بخارپز',
      price: 80000,
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=300&fit=crop',
      category: 'hot-drinks'
    },
    {
      id: 'turkish-coffee',
      name: 'قهوه ترک',
      description: 'قهوه سنتی ترکی',
      price: 70000,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      category: 'hot-drinks'
    },
    {
      id: 'green-tea',
      name: 'چای سبز',
      description: 'چای سبز ارگانیک',
      price: 55000,
      image: 'https://images.unsplash.com/photo-1556881286-fcf744d5de73?w=300&h=300&fit=crop',
      category: 'hot-drinks'
    }
  ],
  'cold-drinks': [
    {
      id: 'iced-americano',
      name: 'آیس آمریکانو',
      description: 'اسپرسو با آب سرد و یخ',
      price: 80000,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&h=300&fit=crop',
      category: 'cold-drinks'
    },
    {
      id: 'iced-latte',
      name: 'آیس لاته',
      description: 'اسپرسو با شیر سرد و یخ',
      price: 95000,
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop',
      category: 'cold-drinks'
    },
    {
      id: 'frappuccino',
      name: 'فراپوچینو',
      description: 'نوشیدنی یخی قهوه با فوم',
      price: 110000,
      image: 'https://images.unsplash.com/photo-1506372023823-6d85fba68bb2?w=300&h=300&fit=crop',
      category: 'cold-drinks'
    },
    {
      id: 'cold-brew',
      name: 'کولد برو',
      description: 'قهوه دم کرده سرد',
      price: 85000,
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=300&fit=crop',
      category: 'cold-drinks'
    },
    {
      id: 'iced-tea',
      name: 'آیس تی',
      description: 'چای سرد با لیمو',
      price: 60000,
      image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=300&h=300&fit=crop',
      category: 'cold-drinks'
    },
    {
      id: 'lemonade',
      name: 'لیموناد',
      description: 'نوشیدنی تازه لیمو',
      price: 65000,
      image: 'https://images.unsplash.com/photo-1523371683702-bed2ff2abb87?w=300&h=300&fit=crop',
      category: 'cold-drinks'
    }
  ],
  'desserts': [
    {
      id: 'cheesecake',
      name: 'چیز کیک',
      description: 'کیک پنیری خوشمزه',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=300&fit=crop',
      category: 'desserts'
    },
    {
      id: 'tiramisu',
      name: 'تیرامیسو',
      description: 'دسر ایتالیایی با قهوه',
      price: 135000,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop',
      category: 'desserts'
    },
    {
      id: 'brownie',
      name: 'براونی',
      description: 'کیک شکلاتی فادج',
      price: 95000,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop',
      category: 'desserts'
    },
    {
      id: 'croissant',
      name: 'کروسان',
      description: 'نان فرانسوی ورقه‌ای',
      price: 75000,
      image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=300&h=300&fit=crop',
      category: 'desserts'
    },
    {
      id: 'muffin',
      name: 'مافین',
      description: 'کیک کوچک با طعم‌های مختلف',
      price: 65000,
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop',
      category: 'desserts'
    },
    {
      id: 'donut',
      name: 'دونات',
      description: 'شیرینی حلقه‌ای با طعم‌های مختلف',
      price: 55000,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
      category: 'desserts'
    }
  ],
  'milkshakes': [
    {
      id: 'vanilla-shake',
      name: 'میلک شیک وانیل',
      description: 'شیک خامه‌ای با طعم وانیل',
      price: 110000,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=300&fit=crop',
      category: 'milkshakes'
    },
    {
      id: 'chocolate-shake',
      name: 'میلک شیک شکلات',
      description: 'شیک شکلاتی غنی',
      price: 115000,
      image: 'https://images.unsplash.com/photo-1541508959477-de5e13dc0b58?w=300&h=300&fit=crop',
      category: 'milkshakes'
    },
    {
      id: 'strawberry-shake',
      name: 'میلک شیک توت فرنگی',
      description: 'شیک با طعم توت فرنگی طبیعی',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=300&fit=crop',
      category: 'milkshakes'
    },
    {
      id: 'banana-shake',
      name: 'میلک شیک موز',
      description: 'شیک طبیعی موز',
      price: 105000,
      image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=300&h=300&fit=crop',
      category: 'milkshakes'
    },
    {
      id: 'oreo-shake',
      name: 'میلک شیک اوریو',
      description: 'شیک با قطعات بیسکویت اوریو',
      price: 125000,
      image: 'https://images.unsplash.com/photo-1517512006864-7edfdbdba49a?w=300&h=300&fit=crop',
      category: 'milkshakes'
    },
    {
      id: 'caramel-shake',
      name: 'میلک شیک کارامل',
      description: 'شیک با سس کارامل',
      price: 118000,
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=300&h=300&fit=crop',
      category: 'milkshakes'
    }
  ]
};
