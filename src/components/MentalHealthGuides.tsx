
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

const MentalHealthGuides = () => {
  const guides = [
    {
      id: 1,
      title: "Your Mind, Explained",
      description: "A comprehensive guide to understanding your thoughts and emotions.",
    },
    {
      id: 2,
      title: "Dealing with Exam Anxiety",
      description: "Practical strategies to manage stress before and during exams.",
    },
    {
      id: 3,
      title: "Journaling for Mental Clarity",
      description: "How to use journaling as a tool for self-reflection and growth.",
    },
    {
      id: 4,
      title: "Building Healthy Digital Habits",
      description: "Creating a balanced relationship with technology and social media.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Free Mental Health Guides</h2>
          <p className="text-gray-600">Explore our professionally crafted resources to support your mental wellbeing journey.</p>
        </div>
        
        <div className="space-y-4">
          {guides.map(guide => (
            <div key={guide.id} className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-mindful-50 flex items-center justify-center rounded-lg text-mindful-600 mr-4">
                  <Book size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{guide.title}</h3>
                  <p className="text-gray-600 text-sm">{guide.description}</p>
                </div>
              </div>
              <Button asChild className="bg-mindful-100 hover:bg-mindful-200 text-mindful-700">
                <Link to={`/guides/${guide.id}`}>
                  Read Now
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-mindful-300 text-mindful-700">
            <Link to="/guides">
              View all guides ↓
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthGuides;
