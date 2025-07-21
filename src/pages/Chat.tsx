import { useState } from 'react';
import WofgaDigitalBot from '../components/bot';

const LiveChatPage = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Wofga Digital Support</h1>
          <p className="text-gray-400">Our virtual assistant is here to help you 24/7</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl ${isMinimized ? 'hidden' : 'block'}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Live Chat Support</h2>
                {/* <button 
                  onClick={() => setIsMinimized(true)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button> */}
              </div>
              <WofgaDigitalBot />
            </div>

            {isMinimized && (
              <button 
                onClick={() => setIsMinimized(false)}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl">
              <h2 className="text-xl font-bold mb-4">Quick Help</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="font-medium mb-2">Common Questions</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• What services do you offer?</li>
                    <li>• How can I contact support?</li>
                    <li>• What are your business hours?</li>
                    <li>• Do you provide custom solutions?</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="font-medium mb-2">Contact Options</h3>
                  <p className="text-sm text-gray-300 mb-2">Prefer to talk to a human?</p>
                  <a href="tel:09024538030">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg text-sm font-medium">
                    Request Callback
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatPage;