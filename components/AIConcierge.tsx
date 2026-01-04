
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Button from './Button';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string; sources?: { uri: string; title: string }[] }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleAsk = async (e?: React.FormEvent, presetQuery?: string) => {
    if (e) e.preventDefault();
    const finalQuery = presetQuery || query;
    if (!finalQuery.trim()) return;

    const userMsg = { role: 'user' as const, text: finalQuery };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: finalQuery,
        config: {
          tools: [{ googleSearch: {} }],
          systemInstruction: "You are the Kiboko Hotel Digital Concierge. You are helpful, elegant, and professional. Provide information about Kiboko Hotel in Limuru, Kenya, and local attractions, weather, and travel tips. Always maintain a 5-star hospitality tone.",
        },
      });

      const text = response.text || "I apologize, I'm having trouble finding that information right now. Please contact our reception for immediate assistance.";
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = chunks
        .filter(chunk => chunk.web)
        .map(chunk => ({
          uri: chunk.web!.uri,
          title: chunk.web!.title || 'Source'
        }));

      // Remove duplicates
      const uniqueSources = Array.from(new Map(sources.map(item => [item.uri, item])).values());

      setMessages(prev => [...prev, { role: 'bot', text, sources: uniqueSources }]);
    } catch (error) {
      console.error("AI Concierge Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm sorry, I encountered an error connecting to our information system." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] bg-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Open AI Concierge"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="absolute right-full mr-4 bg-charcoal text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          How can I help you today?
        </span>
      </button>

      {/* Chat Panel */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-charcoal p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-serif text-gold">AI Concierge</h3>
            <p className="text-xs opacity-70">Powered by Gemini & Google Search</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-ivory">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-slate/60 text-sm mb-6">Welcome to Kiboko Hotel. Ask me anything about our facilities or the beautiful Limuru area.</p>
              <div className="grid grid-cols-1 gap-2">
                {['Best tea farms to visit in Limuru?', 'What is the weather like today?', 'Dining options at Kiboko Hotel'].map(q => (
                  <button 
                    key={q} 
                    onClick={() => handleAsk(undefined, q)}
                    className="text-left text-xs bg-white border border-gold/20 p-3 hover:bg-gold/10 transition-colors rounded"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-lg text-sm leading-relaxed ${msg.role === 'user' ? 'bg-gold text-white' : 'bg-white text-slate shadow-sm border border-slate/10'}`}>
                {msg.text}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-4 pt-2 border-t border-slate/10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate/40 mb-1">Sources</p>
                    <ul className="space-y-1">
                      {msg.sources.map((s, idx) => (
                        <li key={idx}>
                          <a href={s.uri} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline text-[11px] block truncate">
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate/10">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleAsk} className="p-4 bg-white border-t border-slate/10">
          <div className="flex space-x-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-slate/20 focus:ring-1 focus:ring-gold focus:border-gold outline-none text-sm"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !query.trim()}
              className="bg-charcoal text-white px-4 py-2 hover:bg-gold transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIConcierge;
