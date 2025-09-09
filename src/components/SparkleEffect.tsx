import { motion } from "motion/react";
import { Star, Sparkles, Crown } from "lucide-react";
import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  type: 'star' | 'sparkle' | 'crown';
  color: 'gold' | 'white' | 'pearl';
}

export function SparkleEffect() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      // Adjusted for luxury - fewer but more impactful sparkles
      const sparkleCount = (typeof window !== 'undefined' && window.innerWidth < 768) ? 8 : 15;
      
      for (let i = 0; i < sparkleCount; i++) {
        const types: Array<'star' | 'sparkle' | 'crown'> = ['star', 'sparkle', 'crown'];
        const colors: Array<'gold' | 'white' | 'pearl'> = ['gold', 'white', 'pearl'];
        
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 12 + 6, // Larger, more luxurious sparkles
          delay: Math.random() * 4,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 12000); // Slower regeneration for elegance
    
    const handleResize = () => generateSparkles();
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getSparkleComponent = (sparkle: Sparkle) => {
    const colorClasses = {
      gold: "text-amber-300 fill-amber-300",
      white: "text-white fill-white",
      pearl: "text-slate-100 fill-slate-100"
    };

    const glowClasses = {
      gold: "drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]",
      white: "drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]",
      pearl: "drop-shadow-[0_0_3px_rgba(248,250,252,0.5)]"
    };

    const IconComponent = sparkle.type === 'star' ? Star : 
                         sparkle.type === 'sparkle' ? Sparkles : Crown;

    return (
      <IconComponent
        size={sparkle.size}
        className={`${colorClasses[sparkle.color]} ${glowClasses[sparkle.color]}`}
      />
    );
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0, 
            rotate: 0,
            filter: "blur(2px)"
          }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            scale: [0, 1.2, 1, 0],
            rotate: [0, 180, 360],
            filter: ["blur(2px)", "blur(0px)", "blur(0px)", "blur(1px)"]
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {getSparkleComponent(sparkle)}
        </motion.div>
      ))}
      
      {/* Additional floating luxury particles */}
      {Array.from({ length: (typeof window !== 'undefined' && window.innerWidth < 768) ? 3 : 6 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-amber-300 to-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}