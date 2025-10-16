export function HomePage({ onViewProduct }: { onViewProduct?: (productId: number) => void }) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="border-2 border-gray-600 p-4 bg-white">
          <div className="flex gap-4">
            <div className="flex-1 border-2 border-gray-400 p-3 bg-gray-50">
              <span className="text-gray-600"> Search for laptops, books, furniture...</span>
            </div>
            <div className="border-2 border-gray-600 px-8 py-3 bg-gray-300">
              <span> Search</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="border-2 border-gray-600 p-6 bg-white">
            <div className="mb-6">
              <div className="border-b-2 border-gray-400 pb-2 mb-4">
                <span className="text-gray-800">Filters</span>
              </div>
              
              {/* Category Filter */}
              <div className="mb-6">
                <div className="mb-2">
                  <span className="text-gray-700">Category</span>
                </div>
                <div className="border-2 border-gray-400 p-2 bg-gray-50 mb-2">
                  <span className="text-gray-600">All Categories</span>
                </div>
                <div className="space-y-2">
                  {['Electronics', 'Books', 'Furniture', 'Clothing'].map((cat) => (
                    <div key={cat} className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 bg-white"></div>
                      <span className="text-gray-700">{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <div className="mb-2">
                  <span className="text-gray-700"> Price Range (UGX)</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="flex-1 border-2 border-gray-400 p-2 bg-gray-50">
                    <span className="text-gray-600">Min</span>
                  </div>
                  <div className="flex-1 border-2 border-gray-400 p-2 bg-gray-50">
                    <span className="text-gray-600">Max</span>
                  </div>
                </div>
                <div className="border-2 border-gray-500 h-2 bg-gray-300"></div>
                <span className="text-gray-600">Slider</span>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <div className="mb-2">
                  <span className="text-gray-700">Location</span>
                </div>
                <div className="border-2 border-gray-400 p-2 bg-gray-50">
                  <span className="text-gray-600">Makerere University</span>
                </div>
              </div>

              <div className="border-2 border-gray-600 p-3 text-center bg-gray-300">
                <span>Apply Filters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            <div className="border-2 border-gray-400 px-4 py-2 bg-white">
              <span className="text-gray-700">8 Results Found</span>
            </div>
            <div className="border-2 border-gray-400 px-4 py-2 bg-gray-50">
              <span className="text-gray-600">Sort By</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              'MacBook Pro 13"',
              'Mini Fridge',
              'Washing Machine',
              'Reading Chair',
              'Study Desk',
              'Textbook Bundle',
              'Queen Mattress',
              'PlayStation 5'
            ].map((title, i) => (
              <div key={i} className="border-2 border-gray-600 bg-white">
                <div className="aspect-square border-b-2 border-gray-600 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-700">Image</span>
                </div>
                <div className="p-4">
                  <div className="border-b border-gray-300 pb-2 mb-2">
                    <span className="text-gray-800">{title}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-700">UGX XXX,XXX</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-gray-600">Location • Date</span>
                  </div>
                  <div className="mb-3">
                    <div className="border border-gray-400 px-2 py-1 inline-block bg-gray-100">
                      <span className="text-gray-600">Verified</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onViewProduct?.(i + 1)}
                    className="w-full border-2 border-gray-600 p-2 text-center bg-gray-300"
                  >
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
