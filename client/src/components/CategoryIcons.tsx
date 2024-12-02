import { 
  Plane, 
  Building2, 
  Car, 
  Map, 
  Activity, 
  UtensilsCrossed 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CategoryIcons() {
  const { t } = useTranslation();

  const categories = [
    { icon: Plane, label: 'categories.flights' },
    { icon: Building2, label: 'categories.hotels' },
    { icon: Car, label: 'categories.carRentals' },
    { icon: Map, label: 'categories.tours' },
    { icon: Activity, label: 'categories.activities' },
    { icon: UtensilsCrossed, label: 'categories.restaurants' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-8">
      {categories.map(({ icon: Icon, label }) => (
        <div 
          key={label} 
          className="flex flex-col items-center gap-3 p-4 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        >
          <div className="p-4 bg-red-50 rounded-full text-red-600 transition-all duration-300 hover:bg-red-100 hover:scale-110">
            <Icon className="w-6 h-6 transition-transform duration-300" />
          </div>
          <span className="text-sm font-medium text-center transition-colors duration-300 group-hover:text-red-600">{t(label)}</span>
        </div>
      ))}
    </div>
  );
}
