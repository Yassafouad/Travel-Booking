export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: number;
  stops: number;
  price: number;
  class: 'Economy' | 'Business' | 'First';
  departureDate: string;
  returnDate?: string;
  rating: number;
  aircraft: string;
}

export const flights: Flight[] = [
  {
    id: '1',
    airline: 'Emirates',
    airlineLogo: '✈️',
    flightNumber: 'EK123',
    origin: 'New York',
    destination: 'London',
    departureTime: '08:30',
    arrivalTime: '20:45',
    duration: 435,
    stops: 0,
    price: 850,
    class: 'Economy',
    departureDate: '2024-07-15',
    rating: 4.5,
    aircraft: 'Boeing 777-300ER'
  },
  {
    id: '2',
    airline: 'British Airways',
    airlineLogo: '✈️',
    flightNumber: 'BA456',
    origin: 'New York',
    destination: 'London',
    departureTime: '14:20',
    arrivalTime: '02:35',
    duration: 435,
    stops: 0,
    price: 920,
    class: 'Economy',
    departureDate: '2024-07-15',
    rating: 4.2,
    aircraft: 'Airbus A350-1000'
  },
  {
    id: '3',
    airline: 'Delta Airlines',
    airlineLogo: '✈️',
    flightNumber: 'DL789',
    origin: 'New York',
    destination: 'London',
    departureTime: '19:45',
    arrivalTime: '08:00',
    duration: 435,
    stops: 0,
    price: 780,
    class: 'Economy',
    departureDate: '2024-07-15',
    rating: 4.0,
    aircraft: 'Boeing 767-400ER'
  },
  {
    id: '4',
    airline: 'American Airlines',
    airlineLogo: '✈️',
    flightNumber: 'AA321',
    origin: 'New York',
    destination: 'Paris',
    departureTime: '10:15',
    arrivalTime: '22:30',
    duration: 435,
    stops: 0,
    price: 950,
    class: 'Economy',
    departureDate: '2024-07-15',
    rating: 4.3,
    aircraft: 'Boeing 787-9'
  },
  {
    id: '5',
    airline: 'Air France',
    airlineLogo: '✈️',
    flightNumber: 'AF654',
    origin: 'New York',
    destination: 'Paris',
    departureTime: '16:30',
    arrivalTime: '04:45',
    duration: 435,
    stops: 0,
    price: 890,
    class: 'Economy',
    departureDate: '2024-07-15',
    rating: 4.1,
    aircraft: 'Airbus A330-300'
  },
  {
    id: '6',
    airline: 'Lufthansa',
    airlineLogo: '✈️',
    flightNumber: 'LH987',
    origin: 'New York',
    destination: 'Berlin',
    departureTime: '12:00',
    arrivalTime: '02:15',
    duration: 495,
    stops: 1,
    price: 1100,
    class: 'Economy',
    departureDate: '2024-07-15',
    rating: 4.4,
    aircraft: 'Airbus A340-600'
  },
];

export const popularDestinations = [
  { city: 'London', country: 'UK', image: '/api/placeholder/300/200' },
  { city: 'Paris', country: 'France', image: '/api/placeholder/300/200' },
  { city: 'Tokyo', country: 'Japan', image: '/api/placeholder/300/200' },
  { city: 'Sydney', country: 'Australia', image: '/api/placeholder/300/200' },
  { city: 'Dubai', country: 'UAE', image: '/api/placeholder/300/200' },
  { city: 'New York', country: 'USA', image: '/api/placeholder/300/200' },
];

export const airlines = [
  'Emirates', 'British Airways', 'Delta Airlines', 'American Airlines',
  'Air France', 'Lufthansa', 'United Airlines', 'Air Canada'
]; 