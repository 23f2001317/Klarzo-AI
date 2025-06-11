import { Brain, MessageCircle, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ThreeStepApproach = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-mindful-700 tracking-tight">
            Our Three-Step Approach
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've designed a comprehensive system to support your mental health journey at every stage, from self-help to professional intervention when needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Brain size={32} className="text-mindful-500" />,
              step: "1",
              title: "Self-Assessment & Courses",
              description: [
                "Begin with a comprehensive mental health assessment using our guided survey with emotional, behavioral, and cognitive inputs.",
                "Our AI analyzes your responses and recommends a personalized self-help course tailored to your needs."
              ],
              list: [
                "Journaling exercises",
                "CBT techniques",
                "Breathing & meditation",
                "Habit tracking tools",
                "Goal-setting frameworks"
              ],
              buttonText: "Start Assessment",
              buttonLink: "/assessment"
            },
            {
              icon: <MessageCircle size={32} className="text-mindful-500" />,
              step: "2",
              title: "Voice-Based AI Therapist",
              description: [
                "If your progress stalls or distress increases, connect with our voice-based AI therapist for real-time support.",
                "Engage in natural, therapeutic conversations with an AI that listens, speaks, and responds with empathy."
              ],
              list: [
                "Speech analysis technology",
                "Emotion recognition",
                "Stress pattern detection",
                "Guided coping strategies",
                "24/7 availability"
              ],
              buttonText: "Connect Now",
              buttonLink: "/connect"
            },
            {
              icon: <Users size={32} className="text-mindful-500" />,
              step: "3",
              title: "Human Expert Connection",
              description: [
                "When our AI detects patterns requiring professional help, we immediately escalate to our network of experts.",
                "Get connected to licensed psychologists, psychiatrists, or counselors based on your specific needs."
              ],
              list: [
                "Smart triage system",
                "Pre-vetted professional network",
                "Urgent case prioritization",
                "Seamless referral process",
                "Continued support integration"
              ],
              buttonText: "Connect Now",
              buttonLink: "/experts"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="flex flex-col border border-mindful-100 shadow-sm hover:shadow-md transition-shadow min-h-[400px] max-w-full">
                <CardHeader className="pb-4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-mindful-100 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold flex items-center justify-center w-full">
                    <span className="text-left flex-1">{step.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  {step.description.map((text, i) => (
                    <p key={i} className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed text-left">
                      {text}
                    </p>
                  ))}
                  <ul className="text-gray-600 list-disc pl-5 space-y-1 text-left">
                    {step.list.map((item, i) => (
                      <li key={i} className="text-sm sm:text-base">{item}</li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-6 w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg shadow-md hover:shadow-xl transition-all duration-300 self-start"
                  >
                    <a href={step.buttonLink}>{step.buttonText}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepApproach;