'use client';

import { useState, useEffect, useCallback } from 'react';
import { Filter, Plane, Clock, DollarSign, MapPin, Calendar, Users } from 'lucide-react';
import FilterSidebar from '@/components/search/FilterSidebar';
import FlightCard from '@/components/flight/FlightCard';
import { flights } from '@/lib/mock-data';

interface SearchCriteria {
  origin: string;
  destination: string;
  departureDate: string;
  travelers: string;
  class: string;
}

interface FilterOptions {
  maxPrice?: number;
  airlines?: string[];
  stops?: number;
}

export default function SearchPage() {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | null>(null);
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    const savedCriteria = localStorage.getItem('searchCriteria');
    if (savedCriteria) {
      setSearchCriteria(JSON.parse(savedCriteria));
    }
  }, []);

  const handleSort = (sortType: string) => {
    setSortBy(sortType);
    const sorted = [...filteredFlights].sort((a, b) => {
      switch (sortType) {
        case 'price':
          return a.price - b.price;
        case 'duration':
          return a.duration - b.duration;
        case 'departure':
          return new Date(a.departureTime).getTime() - new Date(b.departureTime).getTime();
        default:
          return 0;
      }
    });
    setFilteredFlights(sorted);
  };

  const handleFilter = useCallback((filters: FilterOptions) => {
    let filtered = flights;

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(flight => flight.price <= filters.maxPrice!);
    }

    if (filters.airlines && filters.airlines.length > 0) {
      filtered = filtered.filter(flight => filters.airlines!.includes(flight.airline));
    }

    if (filters.stops !== undefined) {
      filtered = filtered.filter(flight => flight.stops === filters.stops);
    }

    setFilteredFlights(filtered);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin size={20} />
                <span className="font-medium">
                  {searchCriteria?.origin || 'Origin'} → {searchCriteria?.destination || 'Destination'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Calendar size={20} />
                <span>{searchCriteria?.departureDate || 'Date'}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Users size={20} />
                <span>{searchCriteria?.travelers || '1'} Passenger{searchCriteria?.travelers !== '1' ? 's' : ''}</span>
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              {filteredFlights.length} flights found
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80">
            <FilterSidebar onFilter={handleFilter} />
          </div>

          <div className="flex-1">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 mb-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</span>
                  <div className="flex space-x-2">
                    {[
                      { key: 'price', label: 'Price', icon: DollarSign },
                      { key: 'duration', label: 'Duration', icon: Clock },
                      { key: 'departure', label: 'Departure', icon: Plane }
                    ].map((option) => (
                      <button
                        key={option.key}
                        onClick={() => handleSort(option.key)}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors ${
                          sortBy === option.key
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <option.icon size={16} />
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Filter size={20} />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {isFilterOpen && (
              <div className="lg:hidden mb-6">
                <FilterSidebar onFilter={handleFilter} />
              </div>
            )}

            <div className="space-y-4">
              {filteredFlights.length > 0 ? (
                filteredFlights.map((flight) => (
                  <FlightCard key={flight.id} flight={flight} />
                ))
              ) : (
                <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center shadow-sm border border-gray-200 dark:border-gray-700">
                  <Plane size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No flights found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search criteria or filters to find available flights.
                  </p>
                </div>
              )}
            </div>

            {filteredFlights.length > 0 && (
              <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Load More Flights
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 