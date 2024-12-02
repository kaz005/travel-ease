import Image from 'next/image'

const destinations = [
  { name: 'Paris', image: 'https://picsum.photos/id/1067/300/200', price: '$599' },
  { name: 'Bali', image: 'https://picsum.photos/id/1036/300/200', price: '$799' },
  { name: 'Tokyo', image: 'https://picsum.photos/id/1016/300/200', price: '$899' },
  { name: 'New York', image: 'https://picsum.photos/id/1029/300/200', price: '$699' },
  { name: 'Rome', image: 'https://picsum.photos/id/1041/300/200', price: '$649' },
  { name: 'Maldives', image: 'https://picsum.photos/id/1019/300/200', price: '$999' },
]

const DestinationCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {destinations.map((destination) => (
        <div key={destination.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48">
            <Image
              src={destination.image}
              alt={destination.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{destination.name}</h3>
            <p className="text-red-600 font-bold mt-2">From {destination.price}</p>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DestinationCards

