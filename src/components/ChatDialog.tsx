import { X, Send, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: number;
  sender: 'me' | 'seller';
  text: string;
  time: string;
}

export function ChatDialog({ 
  isOpen, 
  onClose, 
  sellerName, 
  productTitle 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  sellerName: string; 
  productTitle: string;
}) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'me', text: 'Hi! Is this item still available?', time: '10:30 AM' },
    { id: 2, sender: 'seller', text: 'Yes, it is! Are you interested?', time: '10:32 AM' },
    { id: 3, sender: 'me', text: 'Yes, I am. Can we meet at Makerere Main Campus?', time: '10:35 AM' },
    { id: 4, sender: 'seller', text: 'Sure! When would be convenient for you?', time: '10:37 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'me',
          text: newMessage,
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setNewMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-gray-900">{sellerName}</h3>
            <p className="text-gray-600 text-sm line-clamp-1">Re: {productTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'me'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="mb-1">{message.text}</p>
                <p className={`text-xs ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ImageIcon className="w-5 h-5 text-gray-600" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSend}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
