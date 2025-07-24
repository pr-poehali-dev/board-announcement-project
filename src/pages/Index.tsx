import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'property', name: 'Недвижимость', icon: 'Home', color: 'bg-orange-500' },
    { id: 'transport', name: 'Транспорт', icon: 'Car', color: 'bg-blue-500' },
    { id: 'electronics', name: 'Электроника', icon: 'Smartphone', color: 'bg-teal-500' },
    { id: 'services', name: 'Услуги', icon: 'Briefcase', color: 'bg-purple-500' },
    { id: 'jobs', name: 'Работа', icon: 'Users', color: 'bg-green-500' },
    { id: 'fashion', name: 'Одежда', icon: 'ShoppingBag', color: 'bg-pink-500' }
  ];

  const popularAds = [
    {
      id: 1,
      title: 'Продается 3-комнатная квартира',
      price: '8 500 000 ₽',
      location: 'Москва, Центральный район',
      image: '/img/c0dc8658-5760-43e2-94e9-846390dba1fb.jpg',
      category: 'Недвижимость',
      featured: true
    },
    {
      id: 2,
      title: 'BMW X5 2019 года',
      price: '3 200 000 ₽',
      location: 'Санкт-Петербург',
      image: '/img/29655c5c-97e2-41e9-b3d2-7d4bfeb3e2f0.jpg',
      category: 'Транспорт',
      featured: false
    },
    {
      id: 3,
      title: 'iPhone 15 Pro Max 256GB',
      price: '120 000 ₽',
      location: 'Екатеринбург',
      image: '/img/67fd3a79-0138-42e0-998c-3ac2769cdb87.jpg',
      category: 'Электроника',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Icon name="Megaphone" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Доска Объявлений
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hover:bg-orange-50">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Icon name="Plus" size={18} className="mr-2" />
                Подать объявление
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Найди всё, что нужно
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
              рядом с тобой
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Тысячи объявлений в твоем городе. Покупай, продавай, находи услуги и работу легко и быстро.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Что ищете?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 text-lg border-2 border-gray-200 focus:border-orange-500"
                />
              </div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-orange-500">
                  <Icon name="MapPin" size={18} className="mr-2 text-gray-500" />
                  <SelectValue placeholder="Город" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="moscow">Москва</SelectItem>
                  <SelectItem value="spb">Санкт-Петербург</SelectItem>
                  <SelectItem value="ekb">Екатеринбург</SelectItem>
                  <SelectItem value="nsk">Новосибирск</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg font-semibold">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Популярные категории
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon as any} size={28} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Ads */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              Популярные объявления
            </h3>
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              Смотреть все
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularAds.map((ad) => (
              <Card key={ad.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <div className="relative">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {ad.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярное
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{ad.category}</Badge>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{ad.title}</h4>
                  <p className="text-2xl font-bold text-orange-600 mb-2">{ad.price}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span className="text-sm">{ad.location}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Search */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 flex items-center justify-center">
                <Icon name="Filter" size={24} className="mr-2 text-orange-600" />
                Расширенный поиск
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Категория
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-orange-500">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Радиус поиска
                  </label>
                  <Select>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-orange-500">
                      <SelectValue placeholder="В пределах..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 км</SelectItem>
                      <SelectItem value="10">10 км</SelectItem>
                      <SelectItem value="25">25 км</SelectItem>
                      <SelectItem value="50">50 км</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Цена от
                  </label>
                  <Input placeholder="0 ₽" className="border-2 border-gray-200 focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Цена до
                  </label>
                  <Input placeholder="∞ ₽" className="border-2 border-gray-200 focus:border-orange-500" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12">
                  <Icon name="Search" size={18} className="mr-2" />
                  Найти объявления
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Icon name="Megaphone" size={20} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">Доска Объявлений</h4>
              </div>
              <p className="text-gray-400">
                Найди всё, что нужно рядом с тобой. Быстро, удобно, безопасно.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Категории</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Недвижимость</li>
                <li>Транспорт</li>
                <li>Электроника</li>
                <li>Услуги</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Помощь</li>
                <li>Безопасность</li>
                <li>Правила</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Скачать приложение</h5>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-gray-800">
                  <Icon name="Smartphone" size={16} className="mr-2" />
                  App Store
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-gray-800">
                  <Icon name="PlayCircle" size={16} className="mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Доска Объявлений. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;