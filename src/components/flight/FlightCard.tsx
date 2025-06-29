'use client';

import { useState } from 'react';
import { Plane, Star, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';

interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: number;
  price: number;
  stops: number;
  rating: number;
  aircraft: string;
}

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
            <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{flight.airline}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{flight.flightNumber}</p>
            <div className="flex items-center space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < flight.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
              <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                ({flight.rating})
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatTime(flight.departureTime)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{flight.origin}</p>
            </div>
            
            <div className="flex-1 mx-4">
              <div className="flex items-center justify-center">
                <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
                <Plane className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-2" />
                <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="text-center mt-2">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {formatDuration(flight.duration)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatTime(flight.arrivalTime)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{flight.destination}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-4">
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatPrice(flight.price)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">per passenger</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-lg transition-colors ${
                isFavorite
                  ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
              }`}
            >
              <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
            </button>
            <Button size="lg" className="px-6">
              Select Flight
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Aircraft: {flight.aircraft}</span>
          <span>Economy Class</span>
        </div>
      </div>
    </div>
  );
} 