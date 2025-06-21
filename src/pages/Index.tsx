
import { Heart, MapPin, Clock, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-white to-wedding-rose font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-wedding-gold-light rounded-full opacity-20 animate-sparkle"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-wedding-gold rounded-full opacity-30 animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-wedding-gold-light rounded-full opacity-25 animate-sparkle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-10 w-8 h-8 bg-wedding-gold rounded-full opacity-40 animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-wedding-gold w-8 h-8 animate-pulse" />
          </div>
          
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gray-800 mb-4">
            Thimira
            <span className="text-wedding-gold"> & </span>
            Semini
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-wedding-gold-light via-wedding-gold to-wedding-gold-light mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Together with our families, we invite you to celebrate our wedding
          </p>
          
          <div className="text-lg text-gray-700 space-y-2">
            <p className="font-medium">September 7th, 2024 • Thursday</p>
            <p className="text-wedding-gold-dark font-semibold">Save the Date</p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Wedding Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Timeline */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-wedding-gold/20 animate-scale-in">
              <div className="flex items-center mb-6">
                <Clock className="text-wedding-gold w-6 h-6 mr-3" />
                <h3 className="font-playfair text-2xl font-semibold text-gray-800">Schedule</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-800">8:30 AM - Event Begins</p>
                    <p className="text-gray-600">Welcome & preparations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-800">9:00 AM - Poruwa Ceremony</p>
                    <p className="text-gray-600">Traditional Sri Lankan wedding ceremony</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-800">3:30 PM - Event Concludes</p>
                    <p className="text-gray-600">Celebration continues</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-wedding-gold/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <MapPin className="text-wedding-gold w-6 h-6 mr-3" />
                <h3 className="font-playfair text-2xl font-semibold text-gray-800">Venue</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800">The Golden Crown Hotel</h4>
                <p className="text-gray-600 leading-relaxed">
                  322 Udugama Ampitiya Rd<br />
                  Kandy 20000<br />
                  Sri Lanka
                </p>
                
                <div className="pt-4">
                  <a 
                    href="https://maps.google.com/?q=The+Golden+Crown+Hotel+322+Udugama+Ampitiya+Rd+Kandy+20000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-wedding-gold text-white rounded-lg hover:bg-wedding-gold-dark transition-all duration-300 transform hover:scale-105"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Date Highlight Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-wedding-gold-light/30 to-wedding-rose/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-wedding-gold/30">
            <Calendar className="text-wedding-gold w-16 h-16 mx-auto mb-6" />
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mark Your Calendar
            </h3>
            <div className="text-2xl md:text-3xl font-bold text-wedding-gold-dark mb-2">
              September 7, 2024
            </div>
            <div className="text-lg text-gray-600">
              Thursday • 8:30 AM - 3:30 PM
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="text-wedding-gold w-8 h-8 mx-auto mb-4" />
          <p className="text-gray-300 mb-2">
            We can't wait to celebrate with you!
          </p>
          <p className="text-gray-400 text-sm">
            Thimira & Semini • September 7, 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
