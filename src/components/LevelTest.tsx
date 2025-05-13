import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LevelTest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Выберите правильный вариант: I ___ to the cinema yesterday.",
      options: ["go", "went", "gone", "going"],
      correct: "went"
    },
    {
      question: "Выберите правильный вариант: She ___ English for 5 years.",
      options: ["study", "studies", "has been studying", "is studying"],
      correct: "has been studying"
    },
    {
      question: "Выберите правильный вариант: If I ___ rich, I would buy a big house.",
      options: ["am", "was", "were", "be"],
      correct: "were"
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateLevel = () => {
    const correctAnswers = answers.filter((answer, index) => 
      answer === questions[index].correct
    ).length;

    if (correctAnswers === questions.length) return "Advanced";
    if (correctAnswers >= questions.length * 0.7) return "Upper Intermediate";
    if (correctAnswers >= questions.length * 0.5) return "Intermediate";
    if (correctAnswers >= questions.length * 0.3) return "Pre-Intermediate";
    return "Elementary";
  };

  return (
    <section id="level-test" className="py-20 bg-gray-900 text-white relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Определите свой уровень английского
          </h2>
          
          {!showResults ? (
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <p className="text-lg mb-6">
                {questions[currentQuestion].question}
              </p>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
              <p className="text-gray-400 mt-4 text-center">
                Вопрос {currentQuestion + 1} из {questions.length}
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-800 rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Ваш результат</h3>
              <p className="text-xl mb-6">
                Ваш уровень: <span className="text-bee-yellow font-bold">{calculateLevel()}</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResults(false);
                }}
                className="bg-bee-yellow text-bee-black font-semibold px-6 py-3 rounded-full inline-block shadow-md hover:shadow-lg transition-all duration-300"
              >
                Пройти тест заново
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Decorative wave element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gray-50 transform translate-y-12 skew-y-3 z-10"></div>
    </section>
  );
};

export default LevelTest; 