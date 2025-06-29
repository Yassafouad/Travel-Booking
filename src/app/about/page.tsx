import { Users, Globe, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About TravelUI
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We&apos;re passionate about making travel accessible, affordable, and unforgettable for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To revolutionize the way people discover and book their travel experiences. We believe that 
                everyone deserves to explore the world, and we&apos;re here to make that journey seamless and 
                enjoyable.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With cutting-edge technology and a customer-first approach, we&apos;re building the future of 
                travel booking - one adventure at a time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">500+ Destinations</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Worldwide coverage</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1M+ Travelers</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Happy customers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">50+ Airlines</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Partner carriers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Always here for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experiences we create for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries to create the best travel booking experience possible.",
                icon: "🚀"
              },
              {
                title: "Trust",
                description: "Building lasting relationships through transparency, reliability, and exceptional service.",
                icon: "🤝"
              },
              {
                title: "Adventure",
                description: "Inspiring and enabling people to explore the world and create unforgettable memories.",
                icon: "🌍"
              }
            ].map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 