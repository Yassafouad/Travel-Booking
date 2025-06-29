import SearchForm from "@/components/search/SearchForm";
import { Plane, Shield, Heart } from "lucide-react";
import { popularDestinations } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Discover Your Next
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Book flights to the world's most amazing destinations with ease. 
              Find the best deals and create unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">500+ Destinations</h3>
              <p className="text-gray-600 dark:text-gray-400">Explore cities around the world</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Safe & Secure</h3>
              <p className="text-gray-600 dark:text-gray-400">Your data is protected</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">We're here to help anytime</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <SearchForm />
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Popular Destinations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {popularDestinations.map((destination) => (
                <div
                  key={destination.city}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 aspect-square mb-3">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="font-semibold">{destination.city}</h3>
                      <p className="text-sm opacity-90">{destination.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
