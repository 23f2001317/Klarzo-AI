
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { Heart, Smile, Meh, Frown } from 'lucide-react';

const MoodTracker = () => {
  const [currentMood, setCurrentMood] = useState<number | null>(null);
  const [moodNote, setMoodNote] = useState("");
  const [moodHistory, setMoodHistory] = useState<{date: Date, mood: number, note: string}[]>([]);
  
  const moods = [
    { value: 5, label: "Great", icon: <Smile className="w-8 h-8" />, color: "#4ade80" },
    { value: 4, label: "Good", icon: <Smile className="w-8 h-8" />, color: "#a3e635" },
    { value: 3, label: "Okay", icon: <Meh className="w-8 h-8" />, color: "#facc15" },
    { value: 2, label: "Low", icon: <Meh className="w-8 h-8" />, color: "#fb923c" },
    { value: 1, label: "Awful", icon: <Frown className="w-8 h-8" />, color: "#f87171" }
  ];
  
  const handleSubmitMood = () => {
    if (currentMood !== null) {
      setMoodHistory([...moodHistory, {date: new Date(), mood: currentMood, note: moodNote}]);
      setMoodNote("");
      setCurrentMood(null);
    }
  };
  
  // Generate some sample data for the charts
  const last7Days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d;
  }).reverse();
  
  const sampleData = last7Days.map((date) => {
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    const existingEntry = moodHistory.find(entry => 
      entry.date.getDate() === date.getDate() && 
      entry.date.getMonth() === date.getMonth()
    );
    
    return {
      day,
      mood: existingEntry ? existingEntry.mood : Math.floor(Math.random() * 3) + 2, // Random value between 2-4 for sample data
      energy: Math.floor(Math.random() * 3) + 2,
      anxiety: Math.floor(Math.random() * 2) + 1
    };
  });
  
  return (
    <div className="min-h-screen">
      <section className="py-16 px-6 md:px-10 bg-mindful-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mood Tracker</h1>
          <p className="text-gray-600 mb-8">
            Track your emotional wellbeing over time to recognize patterns and gain insights.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Heart className="mr-2 text-mindful-500" />
                  How are you feeling today?
                </h2>
                
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {moods.map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() => setCurrentMood(mood.value)}
                      className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                        currentMood === mood.value 
                          ? 'bg-mindful-100 border-2 border-mindful-500 scale-105' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`${
                        currentMood === mood.value 
                          ? 'text-mindful-700' 
                          : 'text-gray-500'
                      }`}>
                        {mood.icon}
                      </div>
                      <span className={`text-sm mt-1 ${
                        currentMood === mood.value 
                          ? 'font-medium text-mindful-700' 
                          : 'text-gray-700'
                      }`}>
                        {mood.label}
                      </span>
                    </button>
                  ))}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mood-note" className="block mb-2 text-sm font-medium text-gray-700">
                    Add a note (optional)
                  </label>
                  <textarea
                    id="mood-note"
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    placeholder="What's contributing to your mood today?"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-mindful-500 focus:border-mindful-500"
                    rows={3}
                  />
                </div>
                
                <Button
                  onClick={handleSubmitMood}
                  disabled={currentMood === null}
                  className="w-full bg-blue-900 hover:bg-blue-600 text-white"
                >
                  Log Mood
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h2 className="text-xl font-bold mb-6">Mood Over Time</h2>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={moodHistory.length > 0 ? 
                        moodHistory.map(entry => ({
                          date: entry.date.toLocaleDateString('en-US', { weekday: 'short' }),
                          mood: entry.mood
                        })) :
                        sampleData
                      }
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                      <XAxis dataKey="day" />
                      <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} hide />
                      <Tooltip 
                        formatter={(value) => [`Mood: ${value}`, '']}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="mood" 
                        stroke="#9b87f5" 
                        fillOpacity={1} 
                        fill="url(#colorMood)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Mood vs. Energy</h3>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={sampleData}
                          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                          <XAxis dataKey="day" />
                          <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} hide />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="mood" stroke="#9b87f5" name="Mood" />
                          <Line type="monotone" dataKey="energy" stroke="#60a5fa" name="Energy" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Anxiety Levels</h3>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={sampleData}
                          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                          <XAxis dataKey="day" />
                          <YAxis domain={[0, 5]} hide />
                          <Tooltip />
                          <Bar dataKey="anxiety" name="Anxiety">
                            {sampleData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill="#f87171" />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Recent Mood Entries</h2>
            
            {moodHistory.length > 0 ? (
              <div className="space-y-4">
                {[...moodHistory].reverse().slice(0, 5).map((entry, index) => (
                  <div key={index} className="flex items-start p-4 border-b border-gray-100">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${moods.find(m => m.value === entry.mood)?.color}20` }}
                    >
                      <div className="text-2xl" style={{ color: moods.find(m => m.value === entry.mood)?.color }}>
                        {moods.find(m => m.value === entry.mood)?.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">
                            {moods.find(m => m.value === entry.mood)?.label}
                          </p>
                          <p className="text-sm text-gray-500">
                            {entry.date.toLocaleString('en-US', { 
                              weekday: 'long',
                              month: 'short', 
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      {entry.note && (
                        <p className="mt-2 text-gray-700">{entry.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No mood entries yet. Start tracking to see your entries here.</p>
            )}
            
            {moodHistory.length > 5 && (
              <div className="mt-4 text-center">
                <Button variant="outline" className="border-mindful-300 text-mindful-700">
                  View All Entries
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoodTracker;
