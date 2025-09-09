import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, MapPin, Mail, Phone, User, Sparkles, Crown, Star } from "lucide-react";
import { SparkleEffect } from "./SparkleEffect";

export function AppleInvitation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const detailCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Sophisticated ambient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Luxury sparkles */}
      <div className="absolute inset-0 opacity-60">
        <SparkleEffect />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full h-full"
      >
        {/* Main luxury invitation card */}
        <motion.div variants={itemVariants}>
          <Card 
            className="backdrop-blur-2xl bg-gradient-to-br from-white/12 to-white/5 w-full h-full overflow-hidden shadow-2xl"
            style={{
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 215, 0, 0.1)",
            }}
          >
            {/* Elegant header with premium image */}
            <motion.div
              variants={itemVariants}
              className="relative h-screen overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642346418524-2beb99e2d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMHRpZSUyMGV2ZW50JTIwYmFsbHJvb218ZW58MXx8fHwxNzU2ODIzNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant ballroom venue"
                className="w-full h-full object-cover"
              />
              
              {/* Sophisticated overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-500/10 to-transparent"></div>
              
              {/* Premium crown accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
                className="absolute top-12 left-12"
              >
                <div className="backdrop-blur-xl bg-gradient-to-r from-amber-400/20 to-amber-600/20 border border-amber-400/40 rounded-full p-3">
                  <Crown className="w-6 h-6 text-amber-300" />
                </div>
              </motion.div>

              {/* Luxury title with sophisticated animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <motion.h1
                    className="text-white text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-wider mb-6"
                    style={{
                      textShadow: "0 0 30px rgba(255, 215, 0, 0.4), 0 4px 20px rgba(0, 0, 0, 0.8)"
                    }}
                  >
                    SHANTEL
                  </motion.h1>
                  
                  {/* Animated luxury divider */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="h-px bg-gradient-to-r from-transparent via-amber-300/80 via-white/80 via-amber-300/80 to-transparent max-w-80 mx-auto"
                  />
                  
                  {/* Elegant subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-amber-200/80 text-lg tracking-[0.3em] mt-4"
                  >
                    PRESENTS
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Premium content section */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16 bg-gradient-to-t from-black/90 via-black/70 to-transparent min-h-[50vh]">
              {/* Luxury invitation headline */}
              <motion.div variants={itemVariants} className="text-center space-y-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-flex items-center space-x-3 mb-6"
                >
                  <Star className="w-5 h-5 text-amber-300" />
                  <span className="text-white/90 text-lg tracking-[0.3em]">CORDIALLY INVITES YOU TO</span>
                  <Star className="w-5 h-5 text-amber-300" />
                </motion.div>
                
                <div className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-white text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-wide leading-relaxed"
                  >
                    A Night of Pure
                  </motion.h2>
                  
                  <motion.h2
                    className="text-6xl sm:text-7xl lg:text-8xl font-extralight tracking-wider"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    style={{
                      background: "linear-gradient(135deg, #ffd700 0%, #ffffff 30%, #ffd700 60%, #ffffff 100%)",
                      backgroundSize: "300% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 50px rgba(255, 215, 0, 0.6)"
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    ELEGANCE
                  </motion.h2>
                </div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-white/80 text-xl sm:text-2xl font-light max-w-3xl mx-auto leading-loose tracking-widest"
                >
                  An exclusive celebration of sophistication and refinement
                </motion.p>
              </motion.div>

              {/* Premium event details grid */}
              <motion.div 
                variants={itemVariants} 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
              >
                {/* Date & Time Section */}
                <div className="space-y-6">
                  <motion.div 
                    variants={detailCardVariants}
                    className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 hover:border-amber-300/30 transition-all duration-500"
                    style={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Calendar className="w-7 h-7 text-amber-300" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 text-lg tracking-wide">Date</h4>
                        <p className="text-white/95 text-xl font-light">Saturday, September 21st</p>
                        <p className="text-amber-200/80 text-sm tracking-widest mt-1">2025</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={detailCardVariants}
                    className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 hover:border-emerald-300/30 transition-all duration-500"
                    style={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Clock className="w-7 h-7 text-emerald-300" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 text-lg tracking-wide">Time</h4>
                        <p className="text-white/95 text-xl font-light">8:00 PM</p>
                        <p className="text-emerald-200/80 text-sm tracking-widest mt-1">Cocktails at 7:30 PM</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Location & Dress Code Section */}
                <div className="space-y-6">
                  <motion.div 
                    variants={detailCardVariants}
                    className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 hover:border-blue-300/30 transition-all duration-500"
                    style={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-7 h-7 text-blue-300" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 text-lg tracking-wide">Venue</h4>
                        <p className="text-white/95 text-xl font-light">The Grand Ballroom</p>
                        <p className="text-white/90 text-lg">Four Seasons Hotel</p>
                        <p className="text-blue-200/80 text-sm tracking-wide mt-1">Beverly Hills, CA 90210</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={detailCardVariants}
                    className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 hover:border-rose-300/30 transition-all duration-500"
                    style={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400/20 to-rose-600/20 border border-rose-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <User className="w-7 h-7 text-rose-300" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 text-lg tracking-wide">Dress Code</h4>
                        <p className="text-white/95 text-xl font-medium">Black Tie Required</p>
                        <p className="text-rose-200/80 text-sm tracking-wide mt-1">Formal evening wear</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Luxury RSVP Section */}
              <motion.div variants={itemVariants} className="border-t border-white/20 pt-12">
                <motion.div
                  variants={detailCardVariants}
                  className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 sm:p-12"
                  style={{
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <div className="text-center space-y-8">
                    <div className="inline-flex items-center space-x-3">
                      <Sparkles className="w-6 h-6 text-amber-300" />
                      <h4 className="text-white text-2xl font-light tracking-widest">RSVP</h4>
                      <Sparkles className="w-6 h-6 text-amber-300" />
                    </div>
                    
                    <p className="text-white/80 text-lg tracking-wide">
                      Please confirm your attendance by September 18th
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12">
                      <motion.div 
                        className="flex items-center space-x-4 group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 border border-blue-400/30 flex items-center justify-center group-hover:border-blue-300/50 transition-colors duration-300">
                          <Mail className="w-5 h-5 text-blue-300" />
                        </div>
                        <span className="text-white/90 text-lg group-hover:text-blue-200 transition-colors duration-300">shantel@events.com</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center space-x-4 group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 border border-emerald-400/30 flex items-center justify-center group-hover:border-emerald-300/50 transition-colors duration-300">
                          <Phone className="w-5 h-5 text-emerald-300" />
                        </div>
                        <span className="text-white/90 text-lg group-hover:text-emerald-200 transition-colors duration-300">(555) 123-4567</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Elegant footer message */}
              <motion.div variants={itemVariants} className="text-center mt-16">
                <motion.div
                  className="inline-flex items-center space-x-4"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-300/60"></div>
                  <p className="text-white/70 italic text-xl font-light tracking-wide">
                    "Where sophistication meets unforgettable moments"
                  </p>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-300/60"></div>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}