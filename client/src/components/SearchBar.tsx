import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';

export function SearchBar() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto -mt-8 relative z-10 transition-all duration-300 hover:shadow-xl">
      <div className="flex-1">
        <Input 
          type="text" 
          placeholder={t('search.destination')} 
          className="w-full transition-all duration-300 hover:border-red-300 focus:border-red-500"
        />
      </div>
      <div className="flex-1">
        <Input 
          type="text" 
          placeholder={t('search.dates')} 
          className="w-full transition-all duration-300 hover:border-red-300 focus:border-red-500"
        />
      </div>
      <div className="flex-1">
        <Input 
          type="text" 
          placeholder={t('search.guests')} 
          className="w-full transition-all duration-300 hover:border-red-300 focus:border-red-500"
        />
      </div>
      <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105">
        {t('search.search')}
      </Button>
    </div>
  );
}
