import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateResponse } from '../utils/aiLogic';

function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! 🙏 I am your Indian Election Guide. I can help you understand the election process. Are you a first-time voter?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    "Yes, I am a first-time voter",
    "How to vote?",
    "What is an EVM?",
    "Show me the election timeline",
    "What is VVPAT?",
    "Tell me about NOTA"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responseText = generateResponse(text);
      const newBotMsg = { id: Date.now() + 1, sender: 'bot', text: responseText };
      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '8px', borderRadius: '50%', color: 'var(--color-primary)' }}>
          <Bot size={24} />
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Election Assistant</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-green)' }}>● Online</span>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div style={{ marginRight: '8px', marginTop: 'auto', marginBottom: 'auto' }}>
                <Bot size={20} color="var(--color-text-muted)" />
              </div>
            )}
            <div className="message-bubble">
              {msg.sender === 'bot' ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message-wrapper bot">
            <div style={{ marginRight: '8px', marginTop: 'auto', marginBottom: 'auto' }}>
              <Bot size={20} color="var(--color-text-muted)" />
            </div>
            <div className="message-bubble" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <div className="suggested-prompts">
          {suggestedPrompts.map((prompt, idx) => (
            <button 
              key={idx} 
              className="prompt-chip"
              onClick={() => handleSendMessage(prompt)}
              disabled={isTyping}
            >
              {prompt}
            </button>
          ))}
        </div>
        <div className="chat-input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your question here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
          />
          <button 
            className="chat-send-btn" 
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isTyping}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatAssistant;
