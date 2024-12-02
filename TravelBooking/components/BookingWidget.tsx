'use client'

import { useState } from 'react'
import { Calendar, Users } from 'lucide-react'

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('')

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Stay</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <div className="relative">
            <input
              type="date"
              id="check-in"
              className="w-full p-2 pl-8 border border-gray-300 rounded-md"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <div className="relative">
            <input
              type="date"
              id="check-out"
              className="w-full p-2 pl-8 border border-gray-300 rounded-md"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
          <div className="relative">
            <input
              type="number"
              id="guests"
              className="w-full p-2 pl-8 border border-gray-300 rounded-md"
              placeholder="Number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
            />
            <Users className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
          Book Now
        </button>
      </form>
    </div>
  )
}

export default BookingWidget

