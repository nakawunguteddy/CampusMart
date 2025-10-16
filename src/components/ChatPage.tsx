export function ChatPage({ onBack }: { onBack?: () => void }) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <button onClick={onBack} className="mb-6">
        <div className="border-2 border-gray-400 px-4 py-2 inline-block bg-white">
          <span className="text-gray-600">← Back to Product</span>
        </div>
      </button>

      <div className="border-2 border-gray-600 bg-white" style={{ height: '600px' }}>
        <div className="flex h-full">
          {/* Chat List Sidebar */}
          <div className="w-80 border-r-2 border-gray-600 flex flex-col">
            <div className="p-4 border-b-2 border-gray-600 bg-gray-100">
              <span className="text-gray-800">Messages</span>
            </div>
            <div className="flex-1">
              {['Sarah Chen - MacBook Pro', 'Mike Johnson - Mini Fridge', 'Emily Rodriguez - Washing Machine'].map((chat, i) => (
                <div key={i} className={`p-4 border-b-2 border-gray-400 ${i === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 border-2 border-gray-600 bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600">Av</span>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1">
                        <span className="text-gray-800">{chat.split(' - ')[0]}</span>
                      </div>
                      <div className="mb-1">
                        <span className="text-gray-600">Re: {chat.split(' - ')[1]}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Last message preview...</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b-2 border-gray-600 bg-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-gray-600 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600">Av</span>
                  </div>
                  <div>
                    <div className="mb-1">
                      <span className="text-gray-800">Sarah Nansubuga</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Re: MacBook Pro 13" 2020</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="border-2 border-gray-500 p-2 bg-white">
                    <span className="text-gray-600">📞</span>
                  </div>
                  <div className="border-2 border-gray-500 p-2 bg-white">
                    <span className="text-gray-600">📹</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Preview */}
            <div className="p-4 border-b-2 border-gray-600 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 border-2 border-gray-500 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">Img</span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="text-gray-800">MacBook Pro 13" 2020</span>
                  </div>
                  <div>
                    <span className="text-gray-700">UGX 2,400,000</span>
                  </div>
                </div>
                <div className="border-2 border-gray-600 px-4 py-2 bg-gray-300">
                  <span>View Item</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 bg-white">
              <div className="flex justify-start">
                <div className="border-2 border-gray-400 p-3 bg-gray-100 max-w-[70%]">
                  <div className="mb-1">
                    <span className="text-gray-800">Hi! Is this item still available?</span>
                  </div>
                  <div>
                    <span className="text-gray-500">10:30 AM</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="border-2 border-gray-600 p-3 bg-gray-300 max-w-[70%]">
                  <div className="mb-1">
                    <span className="text-gray-800">Yes, it is! Are you interested?</span>
                  </div>
                  <div>
                    <span className="text-gray-600">10:32 AM</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="border-2 border-gray-400 p-3 bg-gray-100 max-w-[70%]">
                  <div className="mb-1">
                    <span className="text-gray-800">Can we meet at Makerere Main Campus?</span>
                  </div>
                  <div>
                    <span className="text-gray-500">10:35 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t-2 border-gray-600 bg-gray-50">
              <div className="flex gap-3">
                <div className="border-2 border-gray-500 p-2 bg-white">
                  <span className="text-gray-600">📎</span>
                </div>
                <div className="flex-1 border-2 border-gray-600 p-3 bg-white">
                  <span className="text-gray-600">Type your message...</span>
                </div>
                <div className="border-2 border-gray-600 px-6 py-3 bg-gray-300">
                  <span>Send</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
