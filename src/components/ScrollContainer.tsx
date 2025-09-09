import { useEffect, useState } from "react";
import { AppleHeroSection } from "./AppleHeroSection";
import { AppleInvitation } from "./AppleInvitation";

export function ScrollContainer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showInvitation, setShowInvitation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      const totalScrollableHeight = docHeight - windowHeight;
      const progress = scrollTop / totalScrollableHeight;
      
      setScrollProgress(progress);
      setShowInvitation(progress > 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section - visible until 50% scroll */}
      <div 
        className="fixed inset-0 z-0"
        style={{ 
          display: showInvitation ? 'none' : 'block'
        }}
      >
        <AppleHeroSection />
      </div>

      {/* Spacer to create scroll distance */}
      <div className="h-[200vh] relative z-10">
        {/* Invitation Section - visible after 50% scroll */}
        <div
          style={{ 
            display: showInvitation ? 'block' : 'none'
          }}
          className="absolute top-0 left-0 right-0 z-20 min-h-screen"
        >
          <div className="bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen">
            <AppleInvitation />
          </div>
        </div>
      </div>
    </div>
  );
}