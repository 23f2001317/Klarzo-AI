
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-klarzo-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-600 mb-8">
          Take the first step toward better mental wellbeing with Klarzo's supportive AI companion.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-klarzo-500 hover:bg-klarzo-600 text-white rounded-full px-6 py-5 text-lg flex items-center gap-2">
            <Link to="/assessment">
              <Brain size={20} />
              <span>Take the Assessment</span>
            </Link>
          </Button>
          <Button asChild className="bg-klarzo-600 hover:bg-klarzo-700 text-white rounded-full px-6 py-5 text-lg flex items-center gap-2">
            <Link to="/talk">
              <MessageCircle size={20} />
              <span>Talk to Klarzo AI</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
