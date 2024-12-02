import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';

interface DestinationCardProps {
  city: string;
  price: number;
  image: string;
}

export function DestinationCard({ city, price, image }: DestinationCardProps) {
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={t(`destinations.cities.${city.toLowerCase()}`)} 
          className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg md:text-xl font-semibold transition-colors duration-300 hover:text-red-600">
          {t(`destinations.cities.${city.toLowerCase()}`)}
        </h3>
        <p className="text-gray-600 mt-2">
          {t('destinations.from')} <span className="text-red-600 font-semibold">${price}</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105">
          {t('destinations.bookNow')}
        </Button>
      </CardFooter>
    </Card>
  );
}
