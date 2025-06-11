
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, MicOff, SendIcon, Brain, Users } from "lucide-react";

const Talk = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'Hi there! I\'m Klarzo, your AI mental health companion. How are you feeling today?'}
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = input;
    setMessages([...messages, {role: 'user', content: userMessage}]);
    setInput("");
    setIsProcessing(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let response: string;
      
      // Simple response logic based on keywords
      if (userMessage.toLowerCase().includes('anxious') || userMessage.toLowerCase().includes('anxiety')) {
        response = "I understand feeling anxious can be challenging. Let's try a quick breathing exercise: breathe in slowly for 4 counts, hold for 2, and exhale for 6. Would you like to tell me more about what's making you feel anxious?";
      } else if (userMessage.toLowerCase().includes('sad') || userMessage.toLowerCase().includes('depressed')) {
        response = "I'm sorry you're feeling down. Remember that your feelings are valid, and it's okay to not be okay sometimes. Would it help to talk about what might be contributing to these feelings?";
      } else if (userMessage.toLowerCase().includes('stressed')) {
        response = "Stress can be overwhelming. Is there a specific situation that's causing you stress right now? Sometimes breaking problems down into smaller, manageable parts can help us feel more in control.";
      } else if (userMessage.toLowerCase().includes('help') || userMessage.toLowerCase().includes('suicide') || userMessage.toLowerCase().includes('hurt')) {
        response = "I'm concerned about what you're sharing. While I'm here to support you, it sounds like connecting with a mental health professional would be beneficial. Would you like me to provide resources for immediate help? Remember, if you're in crisis, please call a crisis hotline or emergency services.";
      } else {
        response = "Thank you for sharing that with me. How does talking about this make you feel? Is there anything specific you'd like to explore or understand better about what you're experiencing?";
      }
      
      setMessages(prev => [...prev, {role: 'assistant', content: response}]);
      setIsProcessing(false);
    }, 1500);
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would normally implement actual voice recording functionality
    if (!isRecording) {
      // Start recording
      console.log("Started recording...");
    } else {
      // Stop recording and process
      console.log("Stopped recording, processing audio...");
      setTimeout(() => {
        setInput("This is a simulated voice input that would come from speech-to-text conversion.");
      }, 1000);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-6 px-6 md:px-10 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-center">Talking with Klarzo</h1>
        </div>
      </div>
      
      <div className="flex-grow p-6 md:p-10 flex flex-col max-w-4xl mx-auto w-full">
        <div className="mb-6 bg-klarzo-50 rounded-lg p-4 border border-klarzo-100">
          <h2 className="font-semibold text-klarzo-700 mb-2">Step 2: Voice-Based AI Therapy</h2>
          <p className="text-gray-600 text-sm">
            You're using Klarzo's AI therapy feature. Speak naturally about your thoughts and feelings, and I'll respond with empathy and guidance.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="flex items-center text-sm text-gray-600">
              <Brain className="w-4 h-4 mr-1 text-klarzo-400" />
              <span>Self-Assessment</span>
            </div>
            <div className="flex items-center text-sm font-medium text-klarzo-600">
              <span className="w-5 h-5 rounded-full bg-klarzo-100 flex items-center justify-center mr-1">
                <Mic className="w-3 h-3 text-klarzo-500" />
              </span>
              <span>AI Therapy</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-klarzo-100 text-klarzo-600 rounded-full">Active</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-1 text-klarzo-400" />
              <span>Professional Help</span>
            </div>
          </div>
        </div>
        
        <div className="flex-grow bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="flex-grow overflow-y-auto p-6">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] md:max-w-[70%] rounded-2xl p-4 ${
                      message.role === 'user' 
                        ? 'bg-klarzo-500 text-white rounded-tr-none' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none p-4 max-w-[80%] md:max-w-[70%]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-klarzo-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-klarzo-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-klarzo-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSubmit} className="flex items-end space-x-2">
              <Button
                type="button"
                onClick={toggleRecording}
                className={`rounded-full flex-shrink-0 ${
                  isRecording 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                size="icon"
              >
                {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
              </Button>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message or click the mic to speak..."
                className="flex-grow resize-none"
                rows={1}
              />
              <Button 
                type="submit" 
                disabled={!input.trim() || isProcessing}
                className="bg-klarzo-500 hover:bg-klarzo-600 text-white rounded-full"
                size="icon"
              >
                <SendIcon size={18} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Remember: Klarzo is here to support you, but it's not a replacement for professional help.</p>
          <p className="mt-2">If you're in crisis, please call <a href="tel:988" className="text-klarzo-600 font-medium">988</a> (US) or your local emergency number.</p>
        </div>
      </div>
    </div>
  );
};

export default Talk;
