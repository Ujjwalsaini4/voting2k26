import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Send, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateResponse } from '../../utils/aiLogic';
import { db, auth, functions, httpsCallable } from '../../utils/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Button from '../ui/Button';

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
  const suggestedPrompts = useMemo(() => [
    "Yes, I am a first-time voter",
    "How to vote?",
    "What is an EVM?",
    "Show me the election timeline",
    "What is VVPAT?",
    "Tell me about NOTA"
  ], []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = useCallback(async (text) => {
    // Basic Input Validation
    const trimmedText = text.trim();
    if (!trimmedText) return;
    if (trimmedText.length > 500) {
      alert("Message is too long. Please keep it under 500 characters.");
      return;
    }

    // Add user message to UI
    const newUserMsg = { id: Date.now(), sender: 'user', text: trimmedText };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Save user query to Firestore
    try {
      const user = auth.currentUser;
      if (user) {
        addDoc(collection(db, "messages"), {
          uid: user.uid,
          text: trimmedText,
          timestamp: serverTimestamp(),
          sender: 'user'
        });
      }
    } catch (error) {
      console.error("Error adding message to Firestore: ", error);
    }

    // Get AI response (Calling Cloud Function)
    try {
      const getAIResponse = httpsCallable(functions, 'getAIResponse');
      const result = await getAIResponse({ text: trimmedText });
      
      const newBotMsg = { id: Date.now() + 1, sender: 'bot', text: result.data.text };
      setMessages((prev) => [...prev, newBotMsg]);
    } catch (error) {
      console.error("Cloud Function error, falling back to local logic:", error);
      const responseText = generateResponse(trimmedText);
      const newBotMsg = { id: Date.now() + 1, sender: 'bot', text: responseText };
      setMessages((prev) => [...prev, newBotMsg]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  }, [handleSendMessage, inputValue]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '8px', borderRadius: '50%', color: 'var(--color-primary)' }}>
          <Bot size={24} />
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Election Assistant</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-green)' }} aria-label="Status: Online">● Online</span>
        </div>
      </div>

      <div className="chat-messages" aria-live="polite" aria-relevant="additions">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div style={{ marginRight: '8px', marginTop: 'auto', marginBottom: 'auto' }} aria-hidden="true">
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
            <div style={{ marginRight: '8px', marginTop: 'auto', marginBottom: 'auto' }} aria-hidden="true">
              <Bot size={20} color="var(--color-text-muted)" />
            </div>
            <div className="message-bubble" style={{ display: 'flex', alignItems: 'center' }} aria-label="Assistant is typing">
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
              aria-label={`Ask: ${prompt}`}
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
            aria-label="Chat input field"
            maxLength={500}
          />
          <Button 
            className="chat-send-btn" 
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isTyping}
            ariaLabel="Send message"
            variant="none"
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatAssistant;
