import { Brain, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-mindful-700 tracking-tight">
            The Klarzo Approach
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every step with Klarzo is a gentle upward movement—here's your calm, guided journey to mental success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageCircle size={32} className="text-mindful-600" />,
              title: "Share What's On Your Mind",
              items: ["Type freely, no judgments.", "Start with any emotion, any time."]
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-mindful-600">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
                </svg>
              ),
              title: "Klarzo Gently Listens",
              items: ["Reads and reflects what you wrote.", "Asks caring follow-ups."]
            },
            {
              icon: <Brain size={32} className="text-mindful-600" />,
              title: "Spot New Insights",
              items: ["Offers perspective and gentle reframing.", "Highlights patterns."]
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-mindful-600">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                  <path d="M8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11Z" fill="currentColor"/>
                  <path d="M15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11Z" fill="currentColor"/>
                  <path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5Z" fill="currentColor"/>
                </svg>
              ),
              title: "Try Calming Actions",
              items: ["Guided grounding or breathing exercises.", "Choose supportive next steps."]
            },
            {
              icon: <Heart size={32} className="text-mindful-600" />,
              title: "Feel Relief & Growth",
              items: ["Celebrate your progress.", "Come back any time!"]
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow min-h-[240px]"
            >
              <div className="mb-4 p-3 bg-mindful-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-mindful-700">{feature.title}</h3>
              <ul className="text-gray-600 text-sm sm:text-base space-y-2 text-center">
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed p-8"
        >
          Calm, clarity, and self-growth—at your own pace with Klarzo.
        </motion.div>
      </div>
    </section>
  );
};

export default Features;