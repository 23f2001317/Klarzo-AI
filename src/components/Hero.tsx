
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, MessageCircle, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-klarzo-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-klarzo-300">Your mind.</span> <span className="text-klarzo-600">Our mission.</span>
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Klarzo AI Therapist is here to listen.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience a complete mental health journey with our 3-step approach: <span className="text-klarzo-500">self-assessment</span>, <span className="text-klarzo-500">AI therapy</span>, and <span className="text-klarzo-500">expert support</span> when you need it most.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Button asChild className="bg-klarzo-500 hover:bg-klarzo-600 text-white rounded-full px-8 py-6 text-lg">
            <Link to="/assessment">
              Start Your Assessment
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-klarzo-300 text-gray-700 rounded-full px-8 py-6 text-lg">
            <Link to="/how-it-works">
              Learn How It Works
            </Link>
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-klarzo-500">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
          </svg>
          <p>Your journey to better mental health begins here.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
