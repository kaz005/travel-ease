import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { CategoryIcons } from '../components/CategoryIcons';
import { DestinationCard } from '../components/DestinationCard';
import { PromotionalSlider } from '../components/PromotionalSlider';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BookingWidget } from '../components/BookingWidget';
import { Footer } from '../components/Footer';

export function Home() {
  const { t } = useTranslation();

  const destinations = [
    { city: 'paris', price: 599, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80' },
    { city: 'bali', price: 799, image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=800&q=80' },
    { city: 'tokyo', price: 899, image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div 
          className="h-[600px] bg-cover bg-center relative"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-8">
              {t('hero.title')}
            </h1>
            <SearchBar />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <CategoryIcons />

          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t('destinations.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <DestinationCard
                  key={dest.city}
                  city={dest.city}
                  price={dest.price}
                  image={dest.image}
                />
              ))}
            </div>
          </section>

          <section className="py-12">
            <PromotionalSlider />
          </section>

          <WhyChooseUs />

          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto">
                <BookingWidget />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
