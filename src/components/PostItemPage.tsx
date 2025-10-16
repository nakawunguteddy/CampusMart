export function PostItemPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="border-2 border-gray-600 p-8 bg-white">
        <div className="mb-6 border-b-2 border-gray-400 pb-4">
          <span className="text-gray-800">Post an Item for Sale</span>
        </div>

        {/* Photo Upload Section */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-gray-700">Upload Photos</span>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-3">
            <div className="aspect-square border-2 border-gray-600 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">+ Add Photo</span>
            </div>
            <div className="aspect-square border-2 border-gray-400 border-dashed bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Image 2</span>
            </div>
            <div className="aspect-square border-2 border-gray-400 border-dashed bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Image 3</span>
            </div>
            <div className="aspect-square border-2 border-gray-400 border-dashed bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Image 4</span>
            </div>
          </div>
          <div>
            <span className="text-gray-600">Maximum 8 photos. First photo will be the cover image.</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-gray-700">Title *</span>
          </div>
          <div className="border-2 border-gray-600 p-3 bg-gray-50">
            <span className="text-gray-600">Enter product title</span>
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-gray-700">Category *</span>
          </div>
          <div className="border-2 border-gray-600 p-3 bg-gray-50 mb-2">
            <span className="text-gray-600">Select a category</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['Electronics', 'Books', 'Furniture', 'Clothing', 'Bikes', 'Other'].map((cat) => (
              <div key={cat} className="border-2 border-gray-400 px-3 py-1 bg-white">
                <span className="text-gray-600">{cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-gray-700">Description *</span>
          </div>
          <div className="border-2 border-gray-600 p-3 bg-gray-50 h-32">
            <span className="text-gray-600">Describe your item (condition, features, etc.)</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-gray-700">Price (UGX) *</span>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600">UGX 0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-500 bg-white"></div>
              <span className="text-gray-700">Negotiable</span>
            </div>
          </div>
        </div>

        {/* Condition */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-gray-700">Condition *</span>
          </div>
          <div className="flex gap-3">
            {['New', 'Like New', 'Good', 'Fair', 'Poor'].map((condition) => (
              <div key={condition} className="border-2 border-gray-400 px-4 py-2 bg-white">
                <span className="text-gray-600">Radio: {condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-gray-700">Pickup Location *</span>
          </div>
          <div className="border-2 border-gray-600 p-3 bg-gray-50 mb-2">
            <span className="text-gray-600">Makerere University, MUBS, Kyambogo...</span>
          </div>
          <div className="border-2 border-gray-400 p-3 bg-gray-50">
            <span className="text-gray-600">Additional location details (optional)</span>
          </div>
        </div>

        {/* Contact Preferences */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-gray-700">Preferred Contact Method</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-500 bg-gray-300"></div>
              <span className="text-gray-700">CampusMart Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-500 bg-white"></div>
              <span className="text-gray-700">Email</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-500 bg-white"></div>
              <span className="text-gray-700">Phone</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t-2 border-gray-400 pt-6">
          <div className="flex gap-4 justify-end">
            <div className="border-2 border-gray-400 px-8 py-3 bg-white">
              <span>Save as Draft</span>
            </div>
            <div className="border-2 border-gray-600 px-8 py-3 bg-gray-300">
              <span>Post Item</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
