import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import CategoryGrid from '@/components/CategoryGrid'
import DestinationCards from '@/components/DestinationCards'
import PromotionalSlider from '@/components/PromotionalSlider'
import BookingWidget from '@/components/BookingWidget'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/id/1039/1200/500)'}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Discover Your Next Adventure</h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <SearchBar />
          <CategoryGrid />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Destinations</h2>
          <DestinationCards />
          <PromotionalSlider />
          <div className="flex flex-col md:flex-row gap-8 my-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose TravelEase?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Best prices guaranteed on flights, hotels, and vacation packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>24/7 customer support to assist you throughout your journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Flexible booking options with free cancellation on select deals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Earn rewards points on every booking for future discounts</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <BookingWidget />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

