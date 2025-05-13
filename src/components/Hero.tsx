import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20 md:pt-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bee-black">
              Откройте мир <span className="text-bee-yellow">языка</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Языковой центр <span className="font-semibold">Bee Class</span> — ваш надёжный путеводитель в мире Английского языка. 
              Профессиональные преподаватели, специальная методика и индивидуальный подход к каждому ученику.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#level-test" 
                className="bg-bee-yellow text-bee-black font-semibold px-8 py-3 rounded-full inline-block shadow-md hover:shadow-lg transition-all duration-300"
              >
                Пройти тест на уровень английского
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Placeholder for logo/illustration */}
              <div className="absolute inset-0 bg-bee-yellow rounded-full opacity-20"></div>
              <div className="absolute inset-8 bg-bee-yellow rounded-full flex items-center justify-center">
                <span className="font-bold text-4xl text-white">
                  Bee<span className="text-bee-black">Class</span>
                </span>
              </div>
              
              {/* Animated elements */}
              <motion.div 
                className="absolute w-8 h-8 bg-bee-yellow rounded-full"
                style={{ top: '10%', left: '10%' }}
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <motion.div 
                className="absolute w-6 h-6 bg-bee-yellow rounded-full"
                style={{ bottom: '15%', right: '10%' }}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute w-4 h-4 bg-bee-yellow rounded-full"
                style={{ bottom: '30%', left: '15%' }}
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-full left-0 w-full h-24 bg-gray-900 transform -translate-y-12 skew-y-3 z-10"></div>
    </section>
  );
};

export default Hero; 