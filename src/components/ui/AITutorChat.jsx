import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PaperAirplaneIcon, 
  XMarkIcon,
  ArrowPathIcon,
  LightBulbIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function AITutorChat({ courseContext = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      role: 'assistant', 
      content: 'Hello! I\'m your AI tutor. How can I help you with your learning today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // Mock AI response function (replace with actual AI integration)
  const generateAIResponse = async (userMessage) => {
    setIsTyping(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let response;
    if (userMessage.toLowerCase().includes('help') || userMessage.toLowerCase().includes('stuck')) {
      response = "I see you're having trouble. Let's break this down step by step. Can you tell me specifically which part you're struggling with?";
    } else if (userMessage.toLowerCase().includes('concept') || userMessage.toLowerCase().includes('understand')) {
      response = "That's a great question about this concept! The key idea here is to connect it with what you already know. Think of it like [simplified analogy related to course context]. Does that help clarify things?";
    } else if (userMessage.toLowerCase().includes('example')) {
      response = "I'd be happy to provide an example. Here's a practical application of this concept: [detailed example relevant to course context]. Try working through this example step by step.";
    } else if (userMessage.toLowerCase().includes('practice') || userMessage.toLowerCase().includes('exercise')) {
      response = "Practice is essential for mastery! Here's a custom exercise for you based on your progress: [tailored exercise]. Once you've attempted it, we can discuss your approach.";
    } else {
      response = "That's an interesting question! Based on your current progress in this course, I'd suggest focusing on understanding the fundamentals first. Would you like me to explain any specific concept in more detail?";
    }
    
    setIsTyping(false);
    
    return response;
  };
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Generate AI response
    const aiResponse = await generateAIResponse(inputValue);
    
    // Add AI response
    const assistantMessage = {
      id: messages.length + 2,
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, assistantMessage]);
  };
  
  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed ${isOpen ? 'hidden' : 'flex'} bottom-6 right-6 z-30 items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AcademicCapIcon className="h-6 w-6" />
      </motion.button>
      
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-6 right-6 z-40 w-80 sm:w-96 h-96 flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Chat header */}
            <div className="px-4 py-3 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AcademicCapIcon className="h-5 w-5" />
                <span className="font-medium">AI Learning Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user' 
                        ? 'bg-primary text-white rounded-br-none' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {message.content}
                    <div className={`text-xs mt-1 ${
                      message.role === 'user' 
                        ? 'text-primary-100' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick suggestions */}
            <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 flex gap-2 overflow-x-auto">
              <button 
                onClick={() => setInputValue("Help me understand this concept")}
                className="flex-shrink-0 px-3 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Help with concept
              </button>
              <button 
                onClick={() => setInputValue("Can you give me an example?")}
                className="flex-shrink-0 px-3 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Need an example
              </button>
              <button 
                onClick={() => setInputValue("I'm stuck on this problem")}
                className="flex-shrink-0 px-3 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                I'm stuck
              </button>
            </div>
            
            {/* Input area */}
            <form onSubmit={handleSendMessage} className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask your learning assistant..."
                className="flex-1 input"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="ml-2 p-2 rounded-md bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}