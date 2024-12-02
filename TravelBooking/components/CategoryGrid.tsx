import { Plane, Hotel, Car, Umbrella, Map, Utensils } from 'lucide-react'

const categories = [
  { name: 'Flights', icon: Plane },
  { name: 'Hotels', icon: Hotel },
  { name: 'Car Rentals', icon: Car },
  { name: 'Tours', icon: Map },
  { name: 'Activities', icon: Umbrella },
  { name: 'Restaurants', icon: Utensils },
]

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8">
      {categories.map((category) => (
        <div key={category.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <category.icon size={32} className="text-red-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">{category.name}</span>
        </div>
      ))}
    </div>
  )
}

export default CategoryGrid

