import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We&apos;re here to help you plan your next adventure. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    placeholder="Yassa"
                    required
                  />
                  <Input
                    label="Last Name"
                    placeholder="Fouad"
                    required
                  />
                </div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="yassa@example.com"
                  required
                />
                <Input
                  label="Subject"
                  placeholder="How can we help you?"
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
                    placeholder="Tell us about your travel plans..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Have questions about our services? We&apos;re here to help you plan the perfect trip.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "support@travelui.com",
                    description: "We&apos;ll respond within 24 hours"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    description: "Available 24/7 for urgent matters"
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    content: "123 Travel Street, New York, NY 10001",
                    description: "Visit us during business hours"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Friday: 9:00 AM - 6:00 PM",
                    description: "Saturday: 10:00 AM - 4:00 PM"
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-900 dark:text-white font-medium mb-1">
                        {item.content}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I book a flight?",
                answer: "Simply use our search form on the homepage to find available flights, select your preferred option, and follow the booking process."
              },
              {
                question: "Can I cancel or modify my booking?",
                answer: "Yes, most bookings can be modified or cancelled. Check your booking confirmation for specific terms and conditions."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, and digital payment methods including PayPal and Apple Pay."
              },
              {
                question: "Is my payment information secure?",
                answer: "Absolutely! We use industry-standard encryption and security measures to protect your payment information."
              }
            ].map((faq) => (
              <div
                key={faq.question}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 