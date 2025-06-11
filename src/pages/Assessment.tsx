
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Brain } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const questions = [
    {
      id: "mood",
      question: "How would you describe your overall mood in the past two weeks?",
      type: "radio",
      options: [
        { value: "excellent", label: "Excellent - I've been feeling great" },
        { value: "good", label: "Good - Generally positive with some ups and downs" },
        { value: "neutral", label: "Neither particularly good nor bad" },
        { value: "low", label: "Low - I've been feeling down more often than not" },
        { value: "veryLow", label: "Very Low - I've been feeling consistently down" }
      ]
    },
    {
      id: "sleep",
      question: "How has your sleep been recently?",
      type: "radio",
      options: [
        { value: "excellent", label: "Excellent - I sleep well consistently" },
        { value: "good", label: "Good - I generally sleep well with occasional issues" },
        { value: "fair", label: "Fair - My sleep is inconsistent" },
        { value: "poor", label: "Poor - I often have trouble sleeping" },
        { value: "veryPoor", label: "Very Poor - I have significant sleep problems" }
      ]
    },
    {
      id: "anxiety",
      question: "How often do you experience anxiety or worry?",
      type: "radio",
      options: [
        { value: "never", label: "Never - I rarely feel anxious" },
        { value: "sometimes", label: "Sometimes - I occasionally feel anxious" },
        { value: "often", label: "Often - I frequently feel anxious" },
        { value: "veryOften", label: "Very Often - Anxiety is a regular part of my life" },
        { value: "constant", label: "Constantly - I feel anxious most of the time" }
      ]
    },
    {
      id: "energy",
      question: "How would you rate your energy levels day-to-day?",
      type: "radio",
      options: [
        { value: "veryHigh", label: "Very High - I have plenty of energy throughout the day" },
        { value: "high", label: "High - I generally have good energy" },
        { value: "moderate", label: "Moderate - My energy fluctuates throughout the day" },
        { value: "low", label: "Low - I often feel tired or sluggish" },
        { value: "veryLow", label: "Very Low - I struggle with fatigue consistently" }
      ]
    },
    {
      id: "concentration",
      question: "How well can you concentrate on tasks?",
      type: "radio",
      options: [
        { value: "veryWell", label: "Very Well - I can focus easily for extended periods" },
        { value: "well", label: "Well - I can generally focus with minor distractions" },
        { value: "moderate", label: "Moderate - I sometimes struggle to maintain focus" },
        { value: "poor", label: "Poor - I frequently have trouble concentrating" },
        { value: "veryPoor", label: "Very Poor - I find it extremely difficult to concentrate" }
      ]
    },
    {
      id: "concerns",
      question: "What are your primary mental health concerns right now?",
      type: "text",
      placeholder: "Please describe any concerns or challenges you're experiencing..."
    }
  ];

  const handleRadioChange = (questionId: string, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleTextChange = (questionId: string, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    console.log("Assessment submitted:", answers);
    
    // Navigate to results page
    navigate("/assessment/results");
  };

  const currentQuestion = questions[currentStep];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/e664677a-81db-4481-a49b-b7186cd15088.png" 
              alt="Klarzo Logo" 
              className="klarzo-logo-large"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">Mental Health Assessment</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Your answers will help us tailor a personalized plan to support your mental wellbeing.
          </p>
          
          <div className="mt-6 flex justify-center">
            <div className="flex items-center space-x-4 max-w-md w-full justify-between">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 0 ? 'bg-klarzo-500 text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="text-xs mt-1">Assessment</span>
              </div>
              <div className={`h-1 flex-grow ${currentStep >= 1 ? 'bg-klarzo-500' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= questions.length / 2 ? 'bg-klarzo-500 text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="text-xs mt-1">AI Analysis</span>
              </div>
              <div className={`h-1 flex-grow ${currentStep >= questions.length - 1 ? 'bg-klarzo-500' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= questions.length ? 'bg-klarzo-500 text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="text-xs mt-1">Results</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-klarzo-500 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-500 mt-1">
            Question {currentStep + 1} of {questions.length}
          </p>
        </div>
        
        <Card className="border border-klarzo-200 shadow-md">
          <CardHeader className="bg-klarzo-50 border-b border-klarzo-100">
            <CardTitle>{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {currentQuestion.type === 'radio' && (
              <RadioGroup 
                value={answers[currentQuestion.id] || ''}
                onValueChange={(value) => handleRadioChange(currentQuestion.id, value)}
                className="space-y-3"
              >
                {currentQuestion.options?.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value={option.value} id={`${currentQuestion.id}-${option.value}`} />
                    <Label htmlFor={`${currentQuestion.id}-${option.value}`} className="flex-grow cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
            
            {currentQuestion.type === 'text' && (
              <Textarea
                placeholder={currentQuestion.placeholder}
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleTextChange(currentQuestion.id, e.target.value)}
                className="min-h-[150px]"
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t border-klarzo-100 py-4">
            <Button 
              variant="outline" 
              onClick={handleBack}
              disabled={currentStep === 0}
              className="border-klarzo-200"
            >
              Back
            </Button>
            <Button 
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className="bg-klarzo-500 hover:bg-klarzo-600"
            >
              {currentStep === questions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This assessment is designed to understand your mental health needs. Your responses will be analyzed by our AI to create a personalized mental health program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
