
import { Brain, Heart, BookOpen, Activity } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Offerings = () => {
  const offeringCards = [
    {
      title: "AI Therapy Sessions",
      description: "Private, guided conversations with our AI therapist to help process emotions and find clarity",
      icon: <Brain size={24} />,
      link: "/talk",
      image: "https://img.freepik.com/free-vector/hand-drawn-person-with-mental-health-problem_23-2149048431.jpg?w=600&h=350&t=st=1684335455"
    },
    {
      title: "Mental Health Assessment",
      description: "Comprehensive screening tools to understand your current mental wellbeing",
      icon: <Activity size={24} />,
      link: "/assessment",
      image: "https://img.freepik.com/free-vector/person-with-mental-health-problem_23-2149048425.jpg?w=600&h=350&t=st=1684335479"
    },
    {
      title: "Educational Resources",
      description: "Expert-backed guides and resources to help you understand and improve your mental health",
      icon: <BookOpen size={24} />,
      link: "/tips",
      image: "https://img.freepik.com/free-vector/hand-drawn-person-with-mental-health-problem_23-2149048433.jpg?w=600&h=350&t=st=1684335512"
    },
    {
      title: "Daily Wellness Toolkit",
      description: "Track your mood and journal your thoughts with our interactive wellness tools",
      icon: <Heart size={24} />,
      link: "/mood",
      image: "https://img.freepik.com/free-vector/hand-drawn-world-mental-health-day-background-with-head-and-gears_23-2149088501.jpg?w=600&h=350&t=st=1684335537"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Offerings</h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-klarzo-500 mb-8"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Delivering comprehensive mental health solutions through our AI technology,
            personalized assessments, and expert-backed resources to improve wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offeringCards.map((card, index) => (
            <Card key={index} className="overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-klarzo-600 mb-2">
                  {card.icon}
                </div>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{card.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-klarzo-500 hover:bg-klarzo-600">
                  <Link to={card.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
