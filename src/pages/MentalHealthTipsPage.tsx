
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MentalHealthTipsPage = () => {
  const categories = ["All", "Anxiety", "Self-Care", "Depression", "Relationships", "Work Stress", "Digital Wellbeing"];
  
  const tips = [
    {
      id: 1,
      category: "Self-Awareness",
      title: "Why Am I Feeling This Way?",
      description: "Understanding the underlying causes of unexpected emotions and how to process them effectively.",
      image: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZSUyMHN1biUyMHJheXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      category: "Anxiety Relief",
      title: "Overthinking to Calm Thinking",
      description: "Practical techniques to break the cycle of overthinking and find mental clarity.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      readTime: "5 min read"
    },
    {
      id: 3,
      category: "Digital Wellbeing",
      title: "The Silent Pressure of Growing Up Online",
      description: "How social media impacts mental health and strategies for a healthier digital life.",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBkaWdpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      readTime: "5 min read"
    },
    {
      id: 4,
      category: "Self-Discovery",
      title: "Finding Your Inner Voice",
      description: "Connecting with your authentic self amid the noise of modern expectations.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5vbG9neSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      readTime: "5 min read"
    },
    {
      id: 5,
      category: "Relationships",
      title: "Building Healthy Boundaries",
      description: "How to set and maintain boundaries in personal and professional relationships.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZW5kcyUyMHRhbGtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      readTime: "7 min read"
    },
    {
      id: 6,
      category: "Work Stress",
      title: "Finding Balance in a Busy World",
      description: "Strategies to manage work-related stress and prevent burnout.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZXNzJTIwd29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      readTime: "6 min read"
    },
    {
      id: 7,
      category: "Depression",
      title: "Small Steps Toward Light",
      description: "Gentle practices to help navigate through depression one day at a time.",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBpbiUyMGRhcmtuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      readTime: "8 min read"
    },
    {
      id: 8,
      category: "Self-Care",
      title: "Creating Your Personal Wellness Routine",
      description: "How to design and maintain self-care practices that actually work for your life.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      readTime: "5 min read"
    }
  ];
  
  return (
    <div className="min-h-screen">
      <section className="py-16 px-6 md:px-10 bg-mindful-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mental Health Tips</h1>
          <p className="text-gray-600 mb-8">
            Evidence-based insights and practices to support your wellbeing journey.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm ${
                  index === 0 
                    ? "bg-mindful-500 text-white" 
                    : "bg-white text-gray-700 hover:bg-mindful-100"
                }`}
              >
                {category}
              </button>
            ))}
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
                  <div className="text-xs font-semibold text-mindful-600 mb-2">{tip.category}</div>
                  <h3 className="font-bold text-xl mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{tip.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                      </svg>
                      {tip.readTime}
                    </span>
                    <Button asChild variant="ghost" className="text-mindful-600 hover:text-mindful-700 text-sm p-0">
                      <Link to={`/tips/${tip.id}`}>
                        Read more →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-mindful-300 text-mindful-700">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthTipsPage;
