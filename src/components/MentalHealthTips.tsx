
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MentalHealthTips = () => {
  const tips = [
    {
      id: 1,
      category: "Self-Awareness",
      title: "Why Am I Feeling This Way?",
      description: "Understanding the underlying causes of unexpected emotions and how to process them effectively.",
      image: "https://img.freepik.com/free-vector/hand-drawn-person-with-mental-health-problems_23-2149048436.jpg?w=600&h=350&t=st=1684335600",
      readTime: "5 min read"
    },
    {
      id: 2,
      category: "Anxiety Relief",
      title: "Overthinking to Calm Thinking",
      description: "Practical techniques to break the cycle of overthinking and find mental clarity.",
      image: "https://img.freepik.com/free-vector/hand-drawn-worried-person-illustration_23-2149193388.jpg?w=600&h=350&t=st=1684335622",
      readTime: "5 min read"
    },
    {
      id: 3,
      category: "Digital Wellbeing",
      title: "The Silent Pressure of Growing Up Online",
      description: "How social media impacts mental health and strategies for a healthier digital life.",
      image: "https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-smartphone-addiction_23-2149153371.jpg?w=600&h=350&t=st=1684335750",
      readTime: "5 min read"
    },
    {
      id: 4,
      category: "Self-Discovery",
      title: "Finding Your Inner Voice",
      description: "Connecting with your authentic self amid the noise of modern expectations.",
      image: "https://img.freepik.com/free-vector/sketch-woman-meditation-concept_23-2149143568.jpg?w=600&h=350&t=st=1684335661",
      readTime: "5 min read"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Mental Health Tips</h2>
            <p className="text-gray-600">Evidence-based insights and practices to support your wellbeing journey.</p>
          </div>
          <div className="hidden md:block">
            <Button asChild variant="ghost" className="text-klarzo-600 hover:text-klarzo-700">
              <Link to="/tips">
                View all articles →
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map(tip => (
            <div key={tip.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-klarzo-600 mb-2">{tip.category}</div>
                <h3 className="font-bold text-xl mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{tip.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs flex items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                    </svg>
                    {tip.readTime}
                  </span>
                  <Button asChild variant="ghost" className="text-klarzo-600 hover:text-klarzo-700 text-sm p-0">
                    <Link to={`/tips/${tip.id}`}>
                      Read more →
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Button asChild variant="outline" className="border-klarzo-300 text-klarzo-700">
            <Link to="/tips">
              View all articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthTips;
