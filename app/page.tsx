"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const heroCards = [
    {
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Are you ready to create images with the latest WAN model powered by OpenAI's newest AI model. Experimental pipelines of creativity and logic.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
      bgColor: "from-amber-900 to-amber-700",
      textColor: "text-white",
      buttonText: "Try WAN 2.2",
      buttonLink: "https://openai.com/dall-e-3"
    },
    {
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description: "Work FLUX.1 is the flagship text-to-FLUX.1 Krea online model. All-new technology of flux.1 dev models accessible from krea launch pipelines of creativity.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center",
      bgColor: "from-blue-900 to-blue-700", 
      textColor: "text-white",
      buttonText: "Try FLUX.1",
      buttonLink: "https://krea.ai/"
    },
    {
      title: "Creative AI",
      subtitle: "Midjourney V6",
      description: "Experience the next generation of AI art creation with Midjourney's latest model featuring enhanced photorealism and artistic control.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop&crop=center",
      bgColor: "from-purple-900 to-purple-700",
      textColor: "text-white", 
      buttonText: "Try Midjourney",
      buttonLink: "https://midjourney.com"
    }
  ];

  const toolsData = [
    { name: "MidJourney", description: "An independent research lab producing generative artificial intelligence program...", color: "bg-purple-500", link: "https://midjourney.com" },
    { name: "Stable Diffusion", description: "Generate an image from a text prompt using a diffusion model that...", color: "bg-orange-500", link: "https://stability.ai" },
    { name: "DALL-E 3", description: "Generate and edit images using sophisticated support mode...", color: "bg-pink-500", link: "https://openai.com/dall-e-3" },
    { name: "RunwayML", description: "Machine learning tools for business. Train, create and deploy sophisticated...", color: "bg-blue-500", link: "https://runwayml.com" },
    { name: "Leonardo AI", description: "Automated agents that leverage content market intelligence and...", color: "bg-purple-600", link: "https://leonardo.ai" },
    { name: "Firefly", description: "Intelligent scriptboard building! Analytics to increase capability...", color: "bg-green-600", link: "https://firefly.adobe.com" },
    { name: "Claude", description: "AI-powered created by Anthropic. A data ready to help without...", color: "bg-orange-600", link: "https://claude.ai" },
    { name: "Replicate", description: "AI image and facial compositing professional assistance from an easy setup...", color: "bg-red-500", link: "https://replicate.com" },
    { name: "GPT-4 Vision", description: "GPT-4 with the ability to understand images and provide text and visual...", color: "bg-purple-700", link: "https://openai.com/gpt-4" },
    { name: "Jasper AI", description: "AI content platform that helps teams create high-quality content faster...", color: "bg-green-500", link: "https://jasper.ai" },
    { name: "Lightning AI", description: "Build and train no global talent with our Lightning Live environments...", color: "bg-yellow-500", link: "https://lightning.ai" },
    { name: "Hugging Face", description: "The platform where the machine learning community collaborates on models...", color: "bg-indigo-500", link: "https://huggingface.co" }
  ];

  const filteredTools = toolsData.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`flex items-center justify-between px-4 sm:px-6 py-4 border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className={`font-semibold hidden sm:block transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Cartolinks Solutions</span>
          <span className={`font-semibold sm:hidden transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Cartolinks</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-64 lg:w-80 px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-gray-50 border-gray-200 text-gray-900'
              }`}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className={`w-4 h-4 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Mobile Search Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg className={`w-5 h-5 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          
          {/* Notifications and Profile */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17H9a2 2 0 01-2-2V7a7 7 0 1114 0v8a2 2 0 01-2 2z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              
              {/* Notification Dropdown */}
              {isNotificationOpen && (
                <div className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg border z-50 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}>
                  <div className="p-4">
                    <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Notifications
                    </h3>
                    <div className="space-y-3">
                      <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          New model available
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          DALL-E 3 is now available for testing
                        </p>
                      </div>
                      <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          System update
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Performance improvements deployed
                        </p>
                      </div>
                      <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Welcome to Cartolinks
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Get started with our AI tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border z-50 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}>
                  <div className="py-1">
                    <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        John Doe
                      </p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        john@example.com
                      </p>
                    </div>
                    <a href="#" className={`block px-4 py-2 text-sm transition-colors ${
                      isDarkMode 
                        ? 'text-gray-200 hover:bg-gray-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}>
                      Profile Settings
                    </a>
                    <a href="#" className={`block px-4 py-2 text-sm transition-colors ${
                      isDarkMode 
                        ? 'text-gray-200 hover:bg-gray-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}>
                      Billing
                    </a>
                    <a href="#" className={`block px-4 py-2 text-sm transition-colors ${
                      isDarkMode 
                        ? 'text-gray-200 hover:bg-gray-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}>
                      API Keys
                    </a>
                    <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <a href="#" className={`block px-4 py-2 text-sm transition-colors ${
                        isDarkMode 
                          ? 'text-red-400 hover:bg-gray-700' 
                          : 'text-red-600 hover:bg-gray-100'
                      }`}>
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section className={`px-4 sm:px-6 py-8 sm:py-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Carousel Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroCards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`relative h-80 sm:h-96 bg-gradient-to-r ${card.bgColor} rounded-2xl overflow-hidden`}>
                    <div className="absolute inset-0 bg-opacity-20"></div>
                    
                    <div className="relative z-10 h-full flex items-center justify-between px-8 sm:px-12">
                      {/* Left Content */}
                      <div className="flex-1 max-w-2xl">
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 ${card.textColor} animate-fade-in-up`}>
                          {card.title}
                        </h1>
                        <h2 className={`text-lg sm:text-xl mb-4 ${card.textColor} opacity-90 animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
                          {card.subtitle}
                        </h2>
                        <p className={`text-sm sm:text-base mb-6 ${card.textColor} opacity-80 max-w-lg leading-relaxed animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                          {card.description}
                        </p>
                        <button 
                          onClick={() => window.open(card.buttonLink, '_blank')}
                          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-lg animate-fade-in-up"
                          style={{ animationDelay: '0.3s' }}
                        >
                          {card.buttonText} ↗
                        </button>
                      </div>
                      
                      {/* Right Image */}
                      <div className="hidden lg:block flex-shrink-0 ml-8">
                        <div className="w-64 h-48  bg-opacity-20 rounded-xl backdrop-blur-sm border border-white border-opacity-20 animate-fade-in-right overflow-hidden">
                          <Image
                            src={card.image}
                            alt={card.title}
                            width={256}
                            height={192}
                            className="w-full h-full object-cover mix-blend-overlay"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'bg-white shadow-lg scale-110' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                ></button>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + heroCards.length) % heroCards.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroCards.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Generate Tools Section */}
      <section className={`px-4 sm:px-6 py-8 sm:py-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-700' : 'bg-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-2">
            <h2 className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Generate</h2>
            <span className={`text-sm sm:text-base transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-500'
            }`}>Explore our ecosystem of AI models</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTools.map((tool, index) => (
              <ToolCard 
                key={tool.name}
                name={tool.name}
                description={tool.description}
                color={tool.color}
                link={tool.link}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.008-5.824-2.563" />
              </svg>
              <p className="text-lg font-medium mb-1">No models found</p>
              <p className="text-sm">Try searching for something else</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`px-4 sm:px-6 py-8 sm:py-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-2">
            <h2 className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Gallery</h2>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              <span className={`text-sm sm:text-base transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>Explore creations by our generative AI models</span>
              <button className="text-blue-500 hover:text-blue-400 hover:underline text-sm sm:text-base self-start sm:self-auto transition-colors duration-200">
                Upload ↗
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Gallery Items */}
            <GalleryCard 
              title="Cyberpunk Portrait" 
              creator="by AI Artist"
              tags={["Portrait", "Cyberpunk", "Retro"]}
              likes="1.4K"
              views="3K"
              image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop"
              isDarkMode={isDarkMode}
            />
            <GalleryCard 
              title="Cosmic Dreamscape" 
              creator="by Neural Net"
              tags={["Space", "Abstract", "Digital"]}
              likes="2.3K"
              views="4.1K"
              image="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=400&fit=crop"
              isDarkMode={isDarkMode}
            />
            <GalleryCard 
              title="AI Generated Face" 
              creator="by Deep Learning"
              tags={["Portrait", "Realistic", "AI"]}
              likes="1.8K"
              views="3.2K"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
              isDarkMode={isDarkMode}
            />
            <GalleryCard 
              title="Digital Art Fusion" 
              creator="by Algorithm X"
              tags={["Abstract", "Colorful", "Modern"]}
              likes="1.2K"
              views="2.7K"
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
              isDarkMode={isDarkMode}
            />
            
            <GalleryCard 
              title="Synthetic Landscape" 
              creator="by AI Vision"
              tags={["Landscape", "Surreal", "Nature"]}
              likes="2.1K"
              views="4.2K"
              image="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop"
              isDarkMode={isDarkMode}
            />
            <GalleryCard 
              title="Neural Architecture" 
              creator="by Code Artist"
              tags={["Architecture", "3D", "Futuristic"]}
              likes="1.6K"
              views="3.1K"
              image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=400&fit=crop"
              isDarkMode={isDarkMode}
            />
            <GalleryCard 
              title="Generative Pattern" 
              creator="by Pattern AI"
              tags={["Pattern", "Geometric", "Clean"]}
              likes="945"
              views="1.9K"
              image="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop"
              isDarkMode={isDarkMode}
            />
            <GalleryCard 
              title="Digital Portrait" 
              creator="by Style GAN"
              tags={["Portrait", "Artistic", "AI"]}
              likes="1.7K"
              views="2.9K"
              image="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Tool Card Component
function ToolCard({ name, description, color, link, isDarkMode }: { 
  name: string; 
  description: string; 
  color: string; 
  link: string; 
  isDarkMode: boolean; 
}) {
  return (
    <div 
      onClick={() => window.open(link, '_blank')}
      className={`rounded-xl p-4 shadow-sm border hover-lift cursor-pointer transition-all duration-300 animate-scale-in ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-600 hover:bg-gray-750' 
          : 'bg-white border-gray-200 hover:shadow-md'
      }`}
    >
      <div className={`w-12 h-12 ${color} rounded-lg mb-3 flex items-center justify-center transform transition-transform hover:scale-110`}>
        <span className="text-white font-bold text-xl">{name[0]}</span>
      </div>
      <h3 className={`font-semibold mb-2 transition-colors ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>{name}</h3>
      <p className={`text-sm line-clamp-3 transition-colors ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>{description}</p>
      <div className="mt-3 flex items-center gap-2">
        <button className={`text-xs px-2 py-1 rounded transition-colors ${
          isDarkMode 
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}>
          FREE GENERATION
        </button>
      </div>
    </div>
  );
}

// Gallery Card Component
function GalleryCard({ title, creator, tags, likes, views, image, isDarkMode }: { 
  title: string; 
  creator: string; 
  tags: string[]; 
  likes: string; 
  views: string; 
  image: string;
  isDarkMode: boolean;
}) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-sm border hover-lift cursor-pointer transition-all duration-300 animate-scale-in ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-600 hover:bg-gray-750' 
        : 'bg-white border-gray-200 hover:shadow-md'
    }`}>
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-600 relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-lg font-bold opacity-90">AI Generated</div>
        </div>
        <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-10 transition-all duration-200"></div>
      </div>
      <div className="p-4">
        <h3 className={`font-semibold mb-1 hover:text-blue-500 transition-colors ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        <p className={`text-sm mb-3 transition-colors ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>{creator}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className={`text-xs px-2 py-1 rounded transition-colors ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}>
              {tag}
            </span>
          ))}
        </div>
        <div className={`flex items-center justify-between text-sm transition-colors ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <span className="hover:text-red-500 transition-colors cursor-pointer">❤️ {likes}</span>
          <span>👁️ {views}</span>
        </div>
      </div>
    </div>
  );
}
