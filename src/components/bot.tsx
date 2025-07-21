import { useState, useRef, useEffect } from 'react';
import BotImage from '@/assets/Bot.jpg';

// Knowledge base for Wofga Digital Bot
const knowledgeBase = [
  {
    question: /hi|hello|hey/i,
    answer: "Hello! I'm Wofga Digital Bot. How can I help you today?"
  },
  {
    question: /services|what do you offer/i,
    answer: "Wofga Digital offers:\n- Custom Software Development\n- Cloud Solutions\n- AI & Machine Learning\n- Cybersecurity Services\n- IT Consulting\n- Digital Transformation"
  },
  {
    question: /contact|how to reach|phone|email/i,
    answer: "You can reach us at:\n📞 +1 (555) 123-4567\n✉️ contact@wofgadigital.com\n📍 123 Tech Park, Silicon Valley"
  },
  {
    question: /about|who are you|company info/i,
    answer: "Wofga Digital Enterprise is a leading technology solutions provider specializing in innovative digital transformation services. We help businesses leverage cutting-edge technology to achieve their goals."
  },
  {
    question: /hours|open|time|availability/i,
    answer: "Our support team is available:\n🕘 Monday-Friday: 9AM - 6PM\n🕙 Saturday: 10AM - 4PM\n📅 Sunday: Closed"
  },
  {
    question: /pricing|cost|how much/i,
    answer: "Our pricing varies based on project requirements. For a customized quote, please provide details about your project or schedule a consultation with our team."
  },
  {
    question: /website|site|online/i,
    answer: "Visit our website at https://www.wofgadigital.com for more information about our services and portfolio."
  },
  {
    question: /thanks|thank you|appreciate/i,
    answer: "You're welcome! Is there anything else I can help you with?"
  }
];

const defaultAnswer = "I'm sorry, I didn't understand that. Could you rephrase your question? You can ask about our services, contact information, or company details.";

const WofgaDigitalBot = () => {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
    { text: "Hello! I'm Wofga Digital Bot. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = { text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot typing
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' as const }]);
    }, 800);
  };

  const generateBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    for (const item of knowledgeBase) {
      if (item.question.test(input)) {
        return item.answer;
      }
    }
    return defaultAnswer;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl overflow-hidden">
      {/* Chat header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 text-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
          <img src={BotImage} alt="Wofga Digital Logo" width={30} height={30} className='rounded-full' />
          </div>
          <div>
            <h2 className="font-bold">Wofga Digital Bot</h2>
            <p className="text-xs font-bold text-green-500">Online</p>
          </div>
        </div>
      </div>

      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user' 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                : 'bg-gray-700 text-white'}`}
            >
              {message.text.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-2 last:mb-0">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-r-lg hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default WofgaDigitalBot;