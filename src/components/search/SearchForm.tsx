'use client';

import { useState } from 'react';
import { Search, Plane, Calendar, Users, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

export default function SearchForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: '1',
    class: 'Economy',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchCriteria', JSON.stringify(formData));
    router.push('/search');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const popularCities = [
    'New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Dubai',
    'Los Angeles', 'Chicago', 'Toronto', 'Berlin', 'Rome', 'Madrid'
  ];

  const travelClasses = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First Class' },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 lg:p-8 border border-white/30 dark:border-gray-700/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <MapPin size={16} />
            <span>From</span>
          </div>
          <Select
            value={formData.origin}
            onChange={(e) => handleInputChange('origin', e.target.value)}
            required
            className="w-full"
          >
            <option value="">Select origin</option>
            {popularCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Plane size={16} />
            <span>To</span>
          </div>
          <Select
            value={formData.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
            required
            className="w-full"
          >
            <option value="">Select destination</option>
            {popularCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Calendar size={16} />
            <span>Departure</span>
          </div>
          <Input
            type="date"
            value={formData.departureDate}
            onChange={(e) => handleInputChange('departureDate', e.target.value)}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Calendar size={16} />
            <span>Return (Optional)</span>
          </div>
          <Input
            type="date"
            value={formData.returnDate}
            onChange={(e) => handleInputChange('returnDate', e.target.value)}
            min={formData.departureDate || new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Users size={16} />
            <span>Travelers</span>
          </div>
          <Select
            value={formData.travelers}
            onChange={(e) => handleInputChange('travelers', e.target.value)}
            required
            className="w-full"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num.toString()}>
                {num} {num === 1 ? 'Passenger' : 'Passengers'}
              </option>
            ))}
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Plane size={16} />
            <span>Class</span>
          </div>
          <Select
            value={formData.class}
            onChange={(e) => handleInputChange('class', e.target.value)}
            required
            className="w-full"
          >
            {travelClasses.map(cls => (
              <option key={cls.value} value={cls.value}>{cls.label}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          type="submit"
          size="lg"
          className="w-full md:w-auto px-8 py-4"
        >
          <Search size={20} className="mr-2" />
          Search Flights
        </Button>
      </div>
    </form>
  );
} 