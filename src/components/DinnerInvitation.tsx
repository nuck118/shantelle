import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SparkleEffect } from "./SparkleEffect";
import { Crown, Gem, Wine } from "lucide-react";

export function DinnerInvitation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background sparkles */}
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10"
      >
        <motion.div variants={glowVariants} animate="animate">
          <Card className="max-w-3xl w-full overflow-hidden shadow-2xl bg-gradient-to-b from-slate-900 to-black border-2 border-yellow-500/30">
            {/* Header Section */}
            <motion.div
              variants={itemVariants}
              className="relative h-80 overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642346418524-2beb99e2d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMHRpZSUyMGV2ZW50JTIwYmFsbHJvb218ZW58MXx8fHwxNzU2ODIzNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury black tie ballroom"
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
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
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
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Invitation Content */}
            <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-b from-black to-slate-900 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="flex space-x-4"
                >
                  <Gem className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  <Wine className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  <Gem className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                </motion.div>
              </div>

              <div className="text-center space-y-8 pt-8">
                {/* Main Invitation Text */}
                <motion.div variants={itemVariants} className="space-y-6">
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
                    transition={{ delay: 2.5, duration: 1 }}
                  >
                    A Night of
                  </motion.h3>
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-5xl font-serif bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 0.8 }}
                  >
                    PURE LUXURY
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-yellow-200 italic font-light px-4"
                  >
                    An exclusive celebration of opulence and sophistication
                  </motion.p>
                </motion.div>

                {/* Event Details */}
                <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 py-8 sm:py-10">
                  <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3 tracking-wider">DATE</h4>
                      <p className="text-white text-base sm:text-lg">Saturday, September 21st</p>
                      <p className="text-yellow-200 text-base sm:text-lg">2025</p>
                    </motion.div>
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3 tracking-wider">TIME</h4>
                      <p className="text-white text-base sm:text-lg">8:00 PM</p>
                      <p className="text-yellow-200 text-sm sm:text-base">Premium cocktails at 7:30 PM</p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3 tracking-wider">VENUE</h4>
                    <p className="text-white text-base sm:text-lg">The Grand Ballroom</p>
                    <p className="text-white text-base sm:text-lg">Four Seasons Hotel</p>
                    <p className="text-yellow-200 text-sm sm:text-base">Beverly Hills, CA 90210</p>
                  </motion.div>
                </motion.div>

                {/* Dress Code & RSVP */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-6 border-t border-yellow-500/30 pt-8"
                >
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3 tracking-wider">DRESS CODE</h4>
                    <p className="text-white text-base sm:text-lg font-semibold">BLACK TIE REQUIRED</p>
                    <p className="text-yellow-200 text-xs sm:text-sm">Formal evening wear mandatory</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3 tracking-wider">RSVP</h4>
                    <p className="text-white text-sm sm:text-base">Please confirm by September 18th</p>
                    <p className="text-yellow-200 text-xs sm:text-sm break-all sm:break-normal">shantel@luxuryevents.com • (555) 123-GOLD</p>
                  </motion.div>
                </motion.div>

                {/* Footer Message */}
                <motion.div
                  variants={itemVariants}
                  className="text-center pt-8 border-t border-yellow-500/20"
                >
                  <motion.p
                    className="text-yellow-300 italic text-base sm:text-lg font-light px-4"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    "Where elegance meets extraordinary, and memories are forged in gold"
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}