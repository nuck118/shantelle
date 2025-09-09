import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SparkleEffect } from "./SparkleEffect";
import { Crown, ChevronDown, Gem, Wine } from "lucide-react";
import { Card } from "./ui/card";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(255, 215, 0, 0.3)",
        "0 0 40px rgba(255, 215, 0, 0.5)",
        "0 0 20px rgba(255, 215, 0, 0.3)",
      ],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 flex items-center justify-center p-4 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{ scale, y }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729720667599-535661fc4bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMHRpZSUyMGdhbGElMjBjaGFuZGVsaWVyfGVufDF8fHx8MTc1NjgyMzk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury black tie gala with chandelier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </motion.div>

      {/* Sparkle Effects */}
      <SparkleEffect />
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, #ffd700 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #ffd700 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, #ffd700 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <motion.div variants={glowVariants} animate="animate">
          <Card className="max-w-3xl w-full mx-auto overflow-hidden shadow-2xl bg-gradient-to-b from-slate-900 to-black border-2 border-yellow-500/30">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative h-80 overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729720667599-535661fc4bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMHRpZSUyMGdhbGElMjBjaGFuZGVsaWVyfGVufDF8fHx8MTc1NjgyMzk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury black tie gala with chandelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              {/* Crown decoration */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="absolute top-6 left-1/2 transform -translate-x-1/2"
              >
                <Crown className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                  className="text-center"
                >
                  <motion.h1
                    className="text-yellow-400 text-4xl sm:text-5xl md:text-7xl font-serif tracking-widest mb-4"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255, 215, 0, 0.5)",
                        "0 0 20px rgba(255, 215, 0, 0.8)",
                        "0 0 10px rgba(255, 215, 0, 0.5)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    SHANTEL
                  </motion.h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 1 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Content Section */}
            <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-b from-black to-slate-900 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                  className="flex space-x-4"
                >
                  <Gem className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  <Wine className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  <Gem className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                </motion.div>
              </div>

              <div className="text-center space-y-6 pt-8">
                {/* Main Invitation Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3, duration: 0.8 }}
                  className="space-y-4"
                >
                  <motion.h2
                    className="text-xl sm:text-2xl md:text-4xl font-serif text-yellow-400 tracking-wide"
                    whileHover={{ scale: 1.05 }}
                  >
                    cordially invites you to
                  </motion.h2>
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-5xl font-serif text-white tracking-wider leading-tight"
                    initial={{ opacity: 0, letterSpacing: "0em" }}
                    animate={{ opacity: 1, letterSpacing: "0.1em" }}
                    transition={{ delay: 3.5, duration: 1 }}
                  >
                    An Evening of
                  </motion.h3>
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-5xl font-serif bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 4, duration: 0.8 }}
                  >
                    PURE LUXURY
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4.5, duration: 0.6 }}
                    className="text-lg sm:text-xl text-yellow-200 italic font-light px-4"
                  >
                    An exclusive celebration of opulence and sophistication
                  </motion.p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5, duration: 1 }}
                  className="pt-8"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-yellow-400"
                  >
                    <p className="text-xs sm:text-sm tracking-widest mb-2">SCROLL TO DISCOVER</p>
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Gradient Overlay for Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </motion.div>
  );
}