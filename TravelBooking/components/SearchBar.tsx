'use client'

import { useState } from 'react'
import { Search, Calendar, Users } from 'lucide-react'

const SearchBar = () => {
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [guests, setGuests] = useState('')

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto -mt-10 relative z-10">
      <form className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <div className="relative">
            <input
              type="text"
              id="destination"
              className="w-full p-2 pl-8 border border-gray-300 rounded-md"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
          <div className="relative">
            <input
              type="text"
              id="dates"
              className="w-full p-2 pl-8 border border-gray-300 rounded-md"
              placeholder="Check in - Check out"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
            <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
          <div className="relative">
            <input
              type="text"
              id="guests"
              className="w-full p-2 pl-8 border border-gray-300 rounded-md"
              placeholder="Adults - Children"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            <Users className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <button type="submit" className="w-full md:w-auto bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar

