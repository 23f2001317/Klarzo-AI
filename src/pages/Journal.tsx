
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState<{ date: Date, content: string }[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entry.trim()) {
      setJournalEntries([...journalEntries, { date: new Date(), content: entry }]);
      setEntry("");
      setFeedback("Your journal entry has been saved. Reflecting on your thoughts can help you gain clarity and insight.");
      setTimeout(() => setFeedback(null), 5000);
    }
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const journalPrompts = [
    "How are you feeling today, and why might you be feeling this way?",
    "What's one thing that brought you joy today?",
    "What's something that challenged you today, and how did you handle it?",
    "What are three things you're grateful for right now?",
    "What's something you'd like to improve about yourself, and what steps can you take?",
    "How can you show yourself more compassion today?"
  ];
  
  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * journalPrompts.length);
    setEntry(journalPrompts[randomIndex]);
  };
  
  return (
    <div className="min-h-screen">
      <section className="py-16 px-6 md:px-10 bg-mindful-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Journaling</h1>
          <p className="text-gray-600 mb-8">
            Express your thoughts and feelings freely. Your journal entries are private and saved locally on your device.
          </p>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="journal-entry" className="text-lg font-medium">Today's Entry</label>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={getRandomPrompt}
                    className="bg-blue-800 hover:bg-blue-600 text-white"
                  >
                    Add Entry
                  </Button>
                </div>
                <Textarea 
                  id="journal-entry"
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder="Write your thoughts here..."
                  className="min-h-[200px]"
                />
              </div>
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-mindful-500 hover:bg-mindful-600 text-white"
                >
                  Save Entry
                </Button>
              </div>
            </form>
          </div>
          
          {feedback && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
              {feedback}
            </div>
          )}
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Previous Entries</h2>
            {journalEntries.length === 0 ? (
              <p className="text-gray-500 italic">No journal entries yet. Start writing to see your entries here.</p>
            ) : (
              journalEntries.map((entry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-mindful-400">
                  <p className="text-sm text-gray-500 mb-2">{formatDate(entry.date)}</p>
                  <p className="whitespace-pre-wrap">{entry.content}</p>
                </div>
              )).reverse()
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
