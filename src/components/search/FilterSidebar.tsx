'use client';

import { useState, useEffect, useRef } from 'react';
import { Filter, DollarSign, Plane, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FilterOptions {
  maxPrice?: number;
  airlines?: string[];
  stops?: number;
}

interface FilterSidebarProps {
  onFilter: (filters: FilterOptions) => void;
}

export default function FilterSidebar({ onFilter }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<number | null>(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    
    onFilter({
      maxPrice: priceRange,
      airlines: selectedAirlines.length > 0 ? selectedAirlines : undefined,
      stops: selectedStops !== null ? selectedStops : undefined
    });
  }, [priceRange, selectedAirlines, selectedStops, onFilter]);

  const airlines = [
    'American Airlines',
    'Delta Air Lines',
    'United Airlines',
    'Southwest Airlines',
    'JetBlue Airways',
    'Alaska Airlines',
    'Spirit Airlines',
    'Frontier Airlines'
  ];

  const handleAirlineToggle = (airline: string) => {
    setSelectedAirlines(prev => 
      prev.includes(airline) 
        ? prev.filter(a => a !== airline)
        : [...prev, airline]
    );
  };

  const handleStopToggle = (stops: number) => {
    setSelectedStops(prev => prev === stops ? null : stops);
  };

  const clearFilters = () => {
    setPriceRange(1000);
    setSelectedAirlines([]);
    setSelectedStops(null);
  };

  return (
    <aside className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter size={20} className="text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
          <DollarSign size={16} />
          <span>Price Range</span>
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>$0</span>
            <span>${priceRange}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex space-x-2">
            {[500, 1000, 1500, 2000].map((price) => (
              <button
                key={price}
                onClick={() => setPriceRange(price)}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  priceRange === price
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                ${price}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
          <Plane size={16} />
          <span>Airlines</span>
        </h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {airlines.map((airline) => (
            <label key={airline} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedAirlines.includes(airline)}
                onChange={() => handleAirlineToggle(airline)}
                className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{airline}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
          <Clock size={16} />
          <span>Stops</span>
        </h3>
        <div className="space-y-2">
          {[
            { value: 0, label: 'Direct flights only' },
            { value: 1, label: '1 stop' },
            { value: 2, label: '2+ stops' }
          ].map((option) => (
            <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="stops"
                checked={selectedStops === option.value}
                onChange={() => handleStopToggle(option.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Button
        onClick={clearFilters}
        variant="outline"
        className="w-full"
      >
        Clear All Filters
      </Button>

      {(selectedAirlines.length > 0 || selectedStops !== null) && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">
            Applied Filters:
          </h4>
          <div className="space-y-1">
            {selectedAirlines.length > 0 && (
              <p className="text-xs text-blue-700 dark:text-blue-400">
                Airlines: {selectedAirlines.length} selected
              </p>
            )}
            {selectedStops !== null && (
              <p className="text-xs text-blue-700 dark:text-blue-400">
                Stops: {selectedStops === 0 ? 'Direct' : `${selectedStops} stop${selectedStops > 1 ? 's' : ''}`}
              </p>
            )}
          </div>
        </div>
      )}
    </aside>
  );
} 