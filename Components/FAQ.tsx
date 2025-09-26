"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "is this free?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "do you take equity?", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { question: "are there any perks?", answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "do i need to be a founder?", answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { question: "how long is the program?", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { question: "do you help with visas?", answer: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
   <div className="flex justify-center text-white bg-black">
      <div className="w-full max-w-4xl px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontStyle: 'italic' }}>
          FAQ
        </h2>
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full pl-2 pr-2 py-6 px-0 text-left flex justify-between cursor-pointer items-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-lg text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-white" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-white" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6 px-0">
                  <p className="text-white leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
