
import { Heart, MapPin, Clock, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Create floating particles effect
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Magical floating particles */}
      <div className="absolute top-20 left-[10%] w-3 h-3 bg-lotus-gold rounded-full opacity-60 animate-magical-shimmer"></div>
      <div className="absolute top-40 right-[15%] w-2 h-2 bg-lotus-sky-blue rounded-full opacity-50 animate-magical-shimmer" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-60 left-[20%] w-4 h-4 bg-lotus-gold-light rounded-full opacity-40 animate-magical-shimmer" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-[25%] w-3 h-3 bg-lotus-ocean-blue rounded-full opacity-70 animate-magical-shimmer" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-60 left-[30%] w-2 h-2 bg-lotus-gold rounded-full opacity-80 animate-magical-shimmer" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-32 left-[60%] w-5 h-5 bg-lotus-mist rounded-full opacity-30 animate-gentle-sway" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-32 right-[40%] w-3 h-3 bg-lotus-sky-blue rounded-full opacity-60 animate-gentle-sway" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-water-gradient font-inter relative overflow-hidden">
      {/* Flowing background animation */}
      <div className="fixed inset-0 bg-marble-flow opacity-30 animate-water-flow bg-[length:400%_400%]"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <FloatingParticles />
        
        {/* Ripple effect backgrounds */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-lotus-sky-blue/20 rounded-full animate-water-ripple"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-2 border-lotus-gold/15 rounded-full animate-water-ripple" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-lotus-ocean-blue/10 rounded-full animate-water-ripple" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className={`text-center max-w-4xl mx-auto relative z-10 transition-all duration-1500 ${isVisible ? 'animate-lotus-bloom' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Heart className="text-lotus-gold w-12 h-12 animate-pulse drop-shadow-lg" />
              <div className="absolute inset-0 animate-water-ripple">
                <Heart className="text-lotus-sky-blue/30 w-12 h-12" />
              </div>
            </div>
          </div>
          
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-lotus-deep-blue mb-6 drop-shadow-sm">
            Thimira
            <span className="text-lotus-gold mx-4 drop-shadow-md"> & </span>
            Semini
          </h1>
          
          {/* Flowing divider */}
          <div className="relative mx-auto mb-8 h-2 w-48">
            <div className="absolute inset-0 bg-gradient-to-r from-lotus-sky-blue via-lotus-gold to-lotus-ocean-blue rounded-full opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-50 animate-water-flow"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-lotus-deep-blue/80 mb-8 font-light drop-shadow-sm">
            Together with our families, we invite you to celebrate our wedding
          </p>
          
          <div className="text-lg text-lotus-ocean-blue space-y-2">
            <p className="font-medium drop-shadow-sm">September 7th, 2024 • Thursday</p>
            <p className="text-lotus-gold-accent font-semibold drop-shadow-sm">Save the Date</p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 relative">
        {/* Flowing background for this section */}
        <div className="absolute inset-0 bg-gradient-to-br from-lotus-mist/50 via-lotus-pearl/30 to-lotus-water/40"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-lotus-deep-blue mb-16 drop-shadow-sm animate-float-up">
            Wedding Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Timeline Card */}
            <div className="group relative">
              {/* Magical glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-lotus-sky-blue via-lotus-gold to-lotus-ocean-blue rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative bg-lotus-pearl/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-lotus-gold/30 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl animate-float-up">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <Clock className="text-lotus-ocean-blue w-6 h-6 mr-3" />
                    <div className="absolute inset-0 animate-water-ripple opacity-30">
                      <Clock className="text-lotus-gold w-6 h-6 mr-3" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-lotus-deep-blue">Schedule</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group/item">
                    <div className="bg-gradient-to-r from-lotus-gold to-lotus-gold-accent rounded-full w-4 h-4 mt-2 flex-shrink-0 shadow-lg group-hover/item:animate-magical-shimmer"></div>
                    <div>
                      <p className="font-semibold text-lotus-deep-blue">8:30 AM - Event Begins</p>
                      <p className="text-lotus-ocean-blue">Welcome & preparations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group/item">
                    <div className="bg-gradient-to-r from-lotus-sky-blue to-lotus-ocean-blue rounded-full w-4 h-4 mt-2 flex-shrink-0 shadow-lg group-hover/item:animate-magical-shimmer"></div>
                    <div>
                      <p className="font-semibold text-lotus-deep-blue">9:00 AM - Poruwa Ceremony</p>
                      <p className="text-lotus-ocean-blue">Traditional Sri Lankan wedding ceremony</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group/item">
                    <div className="bg-gradient-to-r from-lotus-gold to-lotus-gold-accent rounded-full w-4 h-4 mt-2 flex-shrink-0 shadow-lg group-hover/item:animate-magical-shimmer"></div>
                    <div>
                      <p className="font-semibold text-lotus-deep-blue">3:30 PM - Event Concludes</p>
                      <p className="text-lotus-ocean-blue">Celebration continues</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Card */}
            <div className="group relative" style={{ animationDelay: '0.3s' }}>
              {/* Magical glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-lotus-ocean-blue via-lotus-gold to-lotus-sky-blue rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative bg-lotus-pearl/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-lotus-sky-blue/30 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl animate-float-up">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <MapPin className="text-lotus-ocean-blue w-6 h-6 mr-3" />
                    <div className="absolute inset-0 animate-water-ripple opacity-30">
                      <MapPin className="text-lotus-gold w-6 h-6 mr-3" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-lotus-deep-blue">Venue</h3>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-lotus-deep-blue">The Golden Crown Hotel</h4>
                  <p className="text-lotus-ocean-blue leading-relaxed">
                    322 Udugama Ampitiya Rd<br />
                    Kandy 20000<br />
                    Sri Lanka
                  </p>
                  
                  <div className="pt-4">
                    <a 
                      href="https://maps.google.com/?q=The+Golden+Crown+Hotel+322+Udugama+Ampitiya+Rd+Kandy+20000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-lotus-gold to-lotus-gold-accent text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-lotus-gold-accent hover:to-lotus-gold"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Date Highlight Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-lotus-magic opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="group relative">
            {/* Magical outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-lotus-sky-blue via-lotus-gold to-lotus-ocean-blue rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-water-ripple"></div>
            
            <div className="relative bg-lotus-pearl/95 backdrop-blur-lg rounded-3xl p-12 shadow-3xl border-2 border-lotus-gold/40 transform transition-all duration-700 hover:scale-105">
              <div className="relative">
                <Calendar className="text-lotus-gold w-16 h-16 mx-auto mb-6 drop-shadow-lg" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-water-ripple opacity-40">
                  <Calendar className="text-lotus-sky-blue w-16 h-16" />
                </div>
              </div>
              
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-lotus-deep-blue mb-4 drop-shadow-sm">
                Mark Your Calendar
              </h3>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-lotus-gold to-lotus-gold-accent bg-clip-text text-transparent mb-2 drop-shadow-sm">
                September 7, 2024
              </div>
              <div className="text-lg text-lotus-ocean-blue">
                Thursday • 8:30 AM - 3:30 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-br from-lotus-deep-blue to-lotus-ocean-blue text-center relative overflow-hidden">
        {/* Subtle flowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lotus-sky-blue/10 to-transparent animate-water-flow"></div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="relative">
            <Heart className="text-lotus-gold w-8 h-8 mx-auto mb-4 drop-shadow-lg" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-water-ripple opacity-30">
              <Heart className="text-lotus-mist w-8 h-8" />
            </div>
          </div>
          <p className="text-lotus-mist mb-2 drop-shadow-sm">
            We can't wait to celebrate with you!
          </p>
          <p className="text-lotus-water text-sm">
            Thimira & Semini • September 7, 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
