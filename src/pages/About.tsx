import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-mindful-50 to-mindful-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-mindful-800 tracking-tight"
          >
            About Klarzo AI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Transforming mental wellness with empathetic AI, delivering support that's accessible, private, and compassionate.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-mindful-700">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At Klarzo, we’re committed to democratizing mental health support, making it affordable, private, and available 24/7. Our AI-driven platform offers compassionate wellness assistance to people worldwide.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1508672019048-805c376b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Mission - Serene Landscape" 
              className="w-full h-auto max-h-96 rounded-2xl shadow-lg lg:block hidden object-cover" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-mindful-700 text-center">How Klarzo Works</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Powered by cutting-edge AI, Klarzo delivers personalized mental health support rooted in evidence-based practices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🧠", text: "Cognitive Behavioral Therapy (CBT)" },
                { icon: "🧘", text: "Mindfulness Techniques" },
                { icon: "📝", text: "Journaling & Self-Reflection" },
                { icon: "👂", text: "Active Listening Principles" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-mindful-50 border border-mindful-200 p-6 sm:p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-mindful-800">Important Note</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Klarzo is a supportive tool, not a replacement for professional care. If you’re in crisis, please contact a qualified mental health professional or crisis service immediately.
            </p>
            <Button 
              asChild 
              className="border-2 border-mindful-600 text-mindful-600 bg-transparent hover:bg-mindful-600 hover:text-white font-semibold rounded-full px-6 py-2 transition-all duration-300"
            >
              <Link to="/crisis">Crisis Resources</Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1516321310763-4933b7e5334f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Technology - AI Interface" 
              className="w-full h-auto max-h-96 rounded-2xl shadow-lg lg:block hidden object-cover order-2 lg:order-1" 
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-mindful-700">Our Technology</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Klarzo’s advanced natural language processing understands human emotions and nuances, delivering empathetic, tailored support for your unique needs.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-mindful-700 text-center">Privacy & Security</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
              Your privacy is sacred. Klarzo ensures end-to-end encryption for all conversations, with no third-party data sharing and complete user control over personal data.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-t from-mindful-100 to-white py-12 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-mindful-700">Start Your Wellness Journey</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our mission to redefine mental wellness. Your feedback shapes Klarzo into the ultimate AI companion for support and growth.
            </p>
            <Button 
              asChild 
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-8 py-3 text-lg shadow-md hover:shadow-xl hover:ring-2 hover:ring-mindful-200 transition-all duration-300"
            >
              <Link to="/talk">Begin with Klarzo</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;