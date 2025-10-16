export function ProductDetailsPage({ onBack, onOpenChat }: { onBack?: () => void; onOpenChat?: () => void }) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <button onClick={onBack} className="mb-6">
        <div className="border-2 border-gray-400 px-4 py-2 inline-block bg-white">
          <span className="text-gray-600">← Back to Results</span>
        </div>
      </button>

      <div className="flex gap-8">
        {/* Left Column - Images */}
        <div className="w-1/2">
          <div className="border-2 border-gray-600 bg-white mb-4">
            <div className="aspect-square bg-gray-200 flex items-center justify-center border-b-2 border-gray-600">
              <span className="text-gray-700">Main Product Photo</span>
            </div>
            <div className="p-4 flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex-1 aspect-square border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600">Img {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="w-1/2">
          <div className="border-2 border-gray-600 p-6 bg-white mb-4">
            <div className="mb-4">
              <div className="border-b-2 border-gray-400 pb-3 mb-3">
                <span className="text-gray-800">MacBook Pro 13" 2020</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-800">Price: UGX 2,400,000</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-600">Posted 2 days ago • Makerere Main Campus</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-600">Category: Electronics</span>
              </div>
              <div className="mb-4">
                <div className="border border-gray-400 px-3 py-1 inline-block bg-gray-100">
                  <span className="text-gray-600">Condition: Good</span>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-gray-400 pt-4 mb-4">
              <div className="mb-2">
                <span className="text-gray-700">Description</span>
              </div>
              <div className="border-2 border-gray-400 p-3 bg-gray-50">
                <span className="text-gray-600">Product description goes here. Multiple lines of text describing the item condition, features, and other relevant details.</span>
              </div>
            </div>
          </div>

          {/* Verified Seller Info */}
          <div className="border-2 border-gray-600 p-6 bg-white mb-4">
            <div className="mb-4">
              <div className="border-b-2 border-gray-400 pb-2 mb-3">
                <span className="text-gray-800">Seller Information</span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 border-2 border-gray-600 bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600">Avatar</span>
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="text-gray-800">Sarah Nansubuga</span>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="border-2 border-gray-600 px-3 py-1 bg-gray-200">
                      <span className="text-gray-700">✓ Verified Student</span>
                    </div>
                  </div>
                  <div className="mb-1">
                    <span className="text-gray-600">Member since Sept 2023</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Rating: ★★★★★ (4.8/5) • 24 ratings</span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="mb-2">
                  <span className="text-gray-700">Verification Status</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-600 bg-gray-300"></div>
                    <span className="text-gray-600">✓ Email Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-600 bg-gray-300"></div>
                    <span className="text-gray-600">✓ Student ID Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-600 bg-gray-300"></div>
                    <span className="text-gray-600">✓ Phone Verified</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-400 pt-3">
                <button className="border-b border-gray-600 inline-block">
                  <span className="text-gray-700">Rate Seller</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="border-2 border-gray-600 p-6 bg-white">
            <div className="mb-3">
              <span className="text-gray-700">Contact Seller</span>
            </div>
            <div className="space-y-3">
              <button onClick={onOpenChat} className="w-full border-2 border-gray-600 p-3 text-center bg-gray-300">
                <span>Send Message / Chat</span>
              </button>
              <div className="border-2 border-gray-600 p-3 text-center bg-white">
                <span>Make an Offer</span>
              </div>
              <div className="border-2 border-gray-400 p-3 text-center bg-gray-100">
                <span>Add to Favorites</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
