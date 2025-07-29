import { useState, useRef, Fragment } from "react";
import WofgaDigitalBot from "../components/bot";
import WofgaLogo from "@/assets/wofga_digital_logo.png"; // Replace with generated logo if needed

const commonQuestions = [
  "What services do you offer?",
  "How can I contact support?",
  "What are your business hours?",
  "What services do you offer?",
  "How can I contact support?",
  "What are your business hours?",
  "Do you provide custom solutions?",
];

const LiveChatPage = () => {
  const [inputValue, setInputValue] = useState("");
  const botRef = useRef<{ insertAndSend: (question: string) => void }>(null);

  const handleCommonQuestionClick = (question: string) => {
    setInputValue(question);
    setTimeout(() => {
      botRef.current?.insertAndSend(question);
    }, 100);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-start p-4 md:p-8 overflow-hidden">
      {/* Logo & Welcome */}
      <div className="flex flex-col items-center mb-8 mt-8">
        <h1 className="text-4xl font-bold mb-2">Wofga Digital Support</h1>
        <p className="text-gray-400 text-lg text-center">
          Our virtual assistant is here to help you 24/7
        </p>
      </div>

      {/* Animated Common Questions */}
      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Shadow edges */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-900 to-transparent z-10" />

        {/* Fast Row - Leftward */}
        <div className="flex gap-4 mb-4 animate-scroll-left whitespace-nowrap">
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {commonQuestions.map((q, i) => (
                <button
                  key={`fast-${i}`}
                  onClick={() => handleCommonQuestionClick(q)}
                  className="border border-gray-600 hover:bg-gray-700 text-white pl-7 pr-7 py-2 rounded-full font-semibold shadow-md transition-colors min-w-[200px]"
                >
                  {q}
                </button>
              ))}
            </Fragment>
          ))}
        </div>

        {/* Slow Row - Rightward */}
        <div className="flex gap-4 mb-4 animate-scroll-right whitespace-nowrap">
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {commonQuestions.map((q, i) => (
                <button
                  key={`fast-${i}`}
                  onClick={() => handleCommonQuestionClick(q)}
                  className="border border-gray-600 hover:bg-gray-700 text-white pl-7 pr-7 py-2 rounded-full font-semibold shadow-md transition-colors min-w-[200px]"
                >
                  {q}
                </button>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Chat Bot */}
      <div className="w-full max-w-6xl mt-6">
        <WofgaDigitalBot
          ref={botRef}
          externalInputValue={inputValue}
          setExternalInputValue={setInputValue}
        />
      </div>

      {/* Animations */}
      <style>{`
  @keyframes scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .animate-scroll-left {
    animation: scroll-left 8s linear infinite;
  }
  .animate-scroll-right {
    animation: scroll-right 15s linear infinite;
  }
`}</style>
    </div>
  );
};

export default LiveChatPage;
