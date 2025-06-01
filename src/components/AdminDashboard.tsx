
import { useState } from 'react';
import { Plus, LogOut, Edit, Trash2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { menuData } from '@/data/menuData';
import { Product } from '@/types/product';

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [selectedCategory, setSelectedCategory] = useState('hot-drinks');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: selectedCategory
  });

  const [categoryForm, setCategoryForm] = useState({
    id: '',
    name: ''
  });

  const categories = [
    { id: 'hot-drinks', name: 'نوشیدنی های گرم' },
    { id: 'cold-drinks', name: 'نوشیدنی های سرد' },
    { id: 'desserts', name: 'دسر و شیرینی' },
    { id: 'milkshakes', name: 'میلک شیک' }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        setFormData({ ...formData, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      image: '',
      category: selectedCategory
    });
    setEditingProduct(null);
    setImageFile(null);
    setImagePreview('');
  };

  const resetCategoryForm = () => {
    setCategoryForm({
      id: '',
      name: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product data:', formData);
    // In a real app, this would save to database
    setIsAddingProduct(false);
    resetForm();
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Category data:', categoryForm);
    // In a real app, this would save to database
    setIsAddingCategory(false);
    resetCategoryForm();
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description || '',
      price: product.price.toString(),
      image: product.image,
      category: product.category
    });
    setImagePreview(product.image);
    setIsAddingProduct(true);
  };

  const handleDelete = (productId: string) => {
    console.log('Delete product:', productId);
    // In a real app, this would delete from database
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">پنل مدیریت کافه</h1>
          <Button onClick={onLogout} variant="outline" size="sm">
            <LogOut className="w-4 h-4 ml-2" />
            خروج
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Dialog open={isAddingCategory} onOpenChange={setIsAddingCategory}>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setIsAddingCategory(true)}>
                  <Plus className="w-4 h-4 ml-2" />
                  افزودن دسته‌بندی
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>افزودن دسته‌بندی جدید</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCategorySubmit} className="space-y-4">
                  <Input
                    placeholder="شناسه دسته‌بندی (انگلیسی)"
                    value={categoryForm.id}
                    onChange={(e) => setCategoryForm({ ...categoryForm, id: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="نام دسته‌بندی"
                    value={categoryForm.name}
                    onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                    required
                  />
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      افزودن
                    </Button>
                    <Button type="button" variant="outline" onClick={() => { setIsAddingCategory(false); resetCategoryForm(); }}>
                      لغو
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isAddingProduct} onOpenChange={setIsAddingProduct}>
              <DialogTrigger asChild>
                <Button onClick={() => setIsAddingProduct(true)}>
                  <Plus className="w-4 h-4 ml-2" />
                  افزودن محصول جدید
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {editingProduct ? 'ویرایش محصول' : 'افزودن محصول جدید'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="نام محصول"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="توضیحات"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                  <Input
                    type="number"
                    placeholder="قیمت (تومان)"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">تصویر محصول</label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="flex-1">
                        <Button type="button" variant="outline" className="w-full" asChild>
                          <span>
                            <Upload className="w-4 h-4 ml-2" />
                            انتخاب تصویر
                          </span>
                        </Button>
                      </label>
                    </div>
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="پیش‌نمایش"
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      {editingProduct ? 'ویرایش' : 'افزودن'}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => { setIsAddingProduct(false); resetForm(); }}>
                      لغو
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[selectedCategory]?.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                {product.description && (
                  <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                )}
                <p className="text-primary font-bold mb-4">
                  {product.price.toLocaleString()} تومان
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(product)}
                    className="flex-1"
                  >
                    <Edit className="w-4 h-4 ml-1" />
                    ویرایش
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};
