
import { Product } from '@/types/product';

// Initialize with existing menu data
import { menuData as initialMenuData } from '@/data/menuData';

interface Category {
  id: string;
  name: string;
}

class DataService {
  private storageKey = 'cafe-menu-data';
  private categoriesKey = 'cafe-categories';
  private authKey = 'cafe-admin-auth';

  // Initialize categories
  private defaultCategories: Category[] = [
    { id: 'hot-drinks', name: 'نوشیدنی های گرم' },
    { id: 'cold-drinks', name: 'نوشیدنی های سرد' },
    { id: 'desserts', name: 'دسر و شیرینی' },
    { id: 'milkshakes', name: 'میلک شیک' }
  ];

  // Get all menu data
  getMenuData(): Record<string, Product[]> {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : initialMenuData;
  }

  // Save menu data
  saveMenuData(data: Record<string, Product[]>): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // Get categories
  getCategories(): Category[] {
    const stored = localStorage.getItem(this.categoriesKey);
    return stored ? JSON.parse(stored) : this.defaultCategories;
  }

  // Save categories
  saveCategories(categories: Category[]): void {
    localStorage.setItem(this.categoriesKey, JSON.stringify(categories));
  }

  // Add category
  addCategory(category: Category): void {
    const categories = this.getCategories();
    categories.push(category);
    this.saveCategories(categories);

    // Initialize empty array for new category in menu data
    const menuData = this.getMenuData();
    menuData[category.id] = [];
    this.saveMenuData(menuData);
  }

  // Add product
  addProduct(product: Omit<Product, 'id'>): void {
    const menuData = this.getMenuData();
    const newProduct: Product = {
      ...product,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
    };

    if (!menuData[product.category]) {
      menuData[product.category] = [];
    }

    menuData[product.category].push(newProduct);
    this.saveMenuData(menuData);
  }

  // Update product
  updateProduct(productId: string, updatedProduct: Omit<Product, 'id'>): void {
    const menuData = this.getMenuData();
    
    // Find and remove old product
    for (const category in menuData) {
      const index = menuData[category].findIndex(p => p.id === productId);
      if (index !== -1) {
        menuData[category].splice(index, 1);
        break;
      }
    }

    // Add updated product to correct category
    const newProduct: Product = {
      ...updatedProduct,
      id: productId
    };

    if (!menuData[updatedProduct.category]) {
      menuData[updatedProduct.category] = [];
    }

    menuData[updatedProduct.category].push(newProduct);
    this.saveMenuData(menuData);
  }

  // Delete product
  deleteProduct(productId: string): void {
    const menuData = this.getMenuData();
    
    for (const category in menuData) {
      const index = menuData[category].findIndex(p => p.id === productId);
      if (index !== -1) {
        menuData[category].splice(index, 1);
        break;
      }
    }
    
    this.saveMenuData(menuData);
  }

  // Auth methods
  setAuthState(isLoggedIn: boolean): void {
    localStorage.setItem(this.authKey, JSON.stringify(isLoggedIn));
  }

  getAuthState(): boolean {
    const stored = localStorage.getItem(this.authKey);
    return stored ? JSON.parse(stored) : false;
  }

  clearAuthState(): void {
    localStorage.removeItem(this.authKey);
  }
}

export const dataService = new DataService();
