import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

export function PromotionalSlider() {
  const { t } = useTranslation();

  const promotions = [
    {
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
      title: t('promotions.summerSale.title'),
      subtitle: t('promotions.summerSale.subtitle'),
      special: true
    },
    {
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      title: t('destinations.cities.paris'),
      price: 599
    },
    {
      image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?w=800&q=80",
      title: t('destinations.cities.bali'),
      price: 799
    },
    {
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
      title: t('destinations.cities.tokyo'),
      price: 899
    }
  ];

  return (
    <Carousel 
      className="w-full max-w-6xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {promotions.map((promo, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="object-cover w-full h-full rounded-t-lg transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{promo.title}</h3>
                {promo.special ? (
                  <p className="text-red-600 font-semibold">{promo.subtitle}</p>
                ) : (
                  <p className="text-gray-600">
                    {t('destinations.from')} <span className="text-red-600 font-semibold">${promo.price}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12 hover:bg-red-100 hover:text-red-600 transition-colors" />
      <CarouselNext className="hidden md:flex -right-12 hover:bg-red-100 hover:text-red-600 transition-colors" />
    </Carousel>
  );
}
