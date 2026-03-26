import { useState } from 'react';
import './Reflection.css';

interface ReflectionProps {
  question: string;
  answer: string;
}

export function Reflection({ question, answer }: ReflectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="reflection">
      <button
        className="reflection-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="reflection-icon">💭</span>
        <span className="reflection-label">反思提问</span>
        <span className="reflection-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      <div className={`reflection-content ${isOpen ? 'open' : ''}`}>
        <div className="reflection-question">
          <strong>问题：</strong>{question}
        </div>
        <div className="reflection-answer">
          <strong>答案：</strong>{answer}
        </div>
      </div>
    </div>
  );
}
