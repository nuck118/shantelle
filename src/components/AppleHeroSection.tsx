import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import { SparkleEffect } from "./SparkleEffect";

export function AppleHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Sophisticated layered background */}
      <motion.div
        className="absolute inset-0"
        style={{ scale, y }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
        
        {/* Luxury gold accent gradients */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Secondary pearl white highlights */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)",
              "radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)",
              "radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Sophisticated sparkle overlay */}
      <SparkleEffect />

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full">
        {/* Luxury glass morphism card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 w-full h-full overflow-hidden shadow-2xl"
          style={{
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 215, 0, 0.1)",
          }}
        >
          {/* Elegant header section */}
          <div className="relative h-screen overflow-hidden">
            {/* Hero image with sophisticated overlay */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1729720667599-535661fc4bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMHRpZSUyMGdhbGElMjBjaGFuZGVsaWVyfGVufDF8fHx8MTc1NjgyMzk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Elegant venue"
              className="w-full h-full object-cover"
            />
            
            {/* Sophisticated gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-500/10 to-transparent"></div>
            
            {/* Premium floating date badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-8 right-8"
            >
              <div className="backdrop-blur-xl bg-gradient-to-r from-white/15 to-white/10 border border-white/30 rounded-2xl px-6 py-3 shadow-xl">
                <div className="flex items-center space-x-3 text-white/95">
                  <Calendar className="w-5 h-5 text-amber-300" />
                  <div>
                    <div className="text-sm tracking-wide">Sept 21</div>
                    <div className="text-xs text-amber-200 tracking-wider">2025</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main hero title with luxury typography */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                {/* Luxury title with gold accent */}
                <motion.h1
                  className="text-white text-6xl sm:text-7xl lg:text-8xl font-extralight tracking-tight mb-6"
                  initial={{ letterSpacing: "0.1em", opacity: 0 }}
                  animate={{ letterSpacing: "0.05em", opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                  style={{
                    textShadow: "0 0 30px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.1)"
                  }}
                >
                  SHANTEL
                </motion.h1>
                
                {/* Elegant animated divider */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                  className="h-px bg-gradient-to-r from-transparent via-amber-300/80 via-white/60 via-amber-300/80 to-transparent max-w-lg mx-auto"
                />
                
                {/* Sparkle accent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="mt-4"
                >
                  <Sparkles className="w-6 h-6 text-amber-300 mx-auto" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Refined content section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 bg-gradient-to-t from-black/90 via-black/60 to-transparent min-h-[60vh] flex flex-col justify-end">
            {/* Elegant invitation text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="text-center space-y-6 sm:space-y-8 mb-8 sm:mb-12"
            >
              <h2 className="text-white/90 text-xl sm:text-2xl font-light tracking-widest leading-relaxed">
                cordially invites you to
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-wide leading-relaxed">
                  An Evening of
                </h3>
                
                <motion.h3
                  className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-wider leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #ffd700 0%, #ffffff 50%, #ffd700 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(255, 215, 0, 0.5)"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  Elegance
                </motion.h3>
              </div>
              
              <p className="text-white/80 text-lg sm:text-xl font-light max-w-xl mx-auto leading-loose tracking-widest">
                A sophisticated celebration of refinement and grace
              </p>
            </motion.div>

            {/* Premium detail cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2 sm:px-0"
            >
              {[
                { icon: Clock, title: "8:00 PM", subtitle: "Saturday Evening", accent: "amber" },
                { icon: MapPin, title: "Four Seasons", subtitle: "Beverly Hills", accent: "emerald" },
                { icon: Sparkles, title: "Black Tie", subtitle: "Formal Attire", accent: "rose" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 + index * 0.1, duration: 0.8 }}
                  className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 text-center hover:border-white/30 transition-all duration-500"
                  style={{
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${item.accent}-400/20 to-${item.accent}-600/20 border border-${item.accent}-400/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 text-${item.accent}-300`} />
                  </div>
                  <p className="text-white font-medium text-lg mb-2 tracking-wide">{item.title}</p>
                  <p className="text-white/70 text-sm tracking-widest">{item.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Sophisticated scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex flex-col items-center text-white/70 group cursor-pointer"
              >
                <span className="text-xs tracking-[0.3em] mb-3 group-hover:text-amber-300 transition-colors duration-300">
                  DETAILS BELOW
                </span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-amber-300/50 transition-colors duration-300">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-3 bg-gradient-to-b from-white/60 to-amber-300/60 rounded-full mt-2"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Sophisticated gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
    </motion.div>
  );
}