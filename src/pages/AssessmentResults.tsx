
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowDown } from "lucide-react";

const AssessmentResults = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Check className="text-green-500" size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Your Assessment Results</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Based on your responses, we've created a personalized wellness plan for you.
          </p>
        </div>
        
        <Card className="mb-8 border-klarzo-200">
          <CardHeader className="bg-klarzo-50 border-b border-klarzo-100">
            <CardTitle className="text-klarzo-700">Your Personalized Plan</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Summary of Your Responses</h3>
                <p className="text-gray-600">
                  Your assessment indicates mild to moderate stress levels with some challenges related to sleep quality. 
                  We've tailored a program specifically to address these areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Recommended Course</h3>
                <div className="bg-klarzo-50 border border-klarzo-100 rounded-lg p-4">
                  <h4 className="font-medium text-klarzo-700 mb-2">Stress Management & Sleep Improvement</h4>
                  <p className="text-gray-600 mb-4">This 4-week program will help you develop coping skills for stress and establish healthier sleep patterns.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-klarzo-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-xs font-medium text-klarzo-600">1</span>
                      </div>
                      <span className="text-gray-700">Daily mindfulness exercises (5-10 minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-klarzo-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-xs font-medium text-klarzo-600">2</span>
                      </div>
                      <span className="text-gray-700">Guided sleep preparation techniques</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-klarzo-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-xs font-medium text-klarzo-600">3</span>
                      </div>
                      <span className="text-gray-700">Weekly journaling prompts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-klarzo-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-xs font-medium text-klarzo-600">4</span>
                      </div>
                      <span className="text-gray-700">Cognitive restructuring exercises</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-stretch space-y-4">
            <Button className="bg-klarzo-500 hover:bg-klarzo-600" onClick={() => navigate("/courses/stress-management")}>
              Start Your Course Now
            </Button>
            <Button variant="outline" onClick={() => navigate("/talk")}>
              Talk to Klarzo AI First
            </Button>
          </CardFooter>
        </Card>
        
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Need immediate support? Our AI therapist is available 24/7</p>
          <div className="flex justify-center">
            <ArrowDown className="text-klarzo-400 animate-bounce" />
          </div>
          <Button 
            variant="outline" 
            className="mt-2 border-klarzo-200 text-klarzo-700"
            onClick={() => navigate("/talk")}
          >
            Talk to Klarzo Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;
