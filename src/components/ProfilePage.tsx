export function ProfilePage({ user }: { user: { name: string; email: string } }) {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Profile Header */}
      <div className="border-2 border-gray-600 p-8 bg-white mb-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 border-2 border-gray-600 bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-gray-700">Avatar</span>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-1">
                  <span className="text-gray-900">{user.name}</span>
                </div>
                <div className="mb-2">
                  <span className="text-gray-600">{user.email}</span>
                </div>
                <div className="border-2 border-gray-500 px-3 py-1 inline-block bg-gray-200">
                  <span className="text-gray-700">✓ Verified Student</span>
                </div>
              </div>
              <div className="border-2 border-gray-500 px-4 py-2 bg-white">
                <span>Edit Profile</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <span className="text-gray-600">📍 Makerere University</span>
              </div>
              <div>
                <span className="text-gray-600">✓ Email Verified</span>
              </div>
              <div>
                <span className="text-gray-600">📞 +256 700 123 456</span>
              </div>
            </div>

            <div>
              <span className="text-gray-600">Rating: ★★★★★ (4.8/5) • 24 ratings</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t-2 border-gray-400">
          <div className="text-center border-r-2 border-gray-400">
            <div className="mb-1">
              <span className="text-gray-900">15</span>
            </div>
            <div>
              <span className="text-gray-600">Items Sold</span>
            </div>
          </div>
          <div className="text-center border-r-2 border-gray-400">
            <div className="mb-1">
              <span className="text-gray-900">8</span>
            </div>
            <div>
              <span className="text-gray-600">Items Purchased</span>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-1">
              <span className="text-gray-900">3</span>
            </div>
            <div>
              <span className="text-gray-600">Active Listings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-2 border-gray-600 bg-white mb-6">
        <div className="border-b-2 border-gray-600 bg-gray-100">
          <div className="flex gap-6 px-6">
            <div className="px-4 py-4 border-b-2 border-gray-800">
              <span className="text-gray-900">My Listings</span>
            </div>
            <div className="px-4 py-4">
              <span className="text-gray-600">Purchases</span>
            </div>
            <div className="px-4 py-4">
              <span className="text-gray-600">Reviews</span>
            </div>
            <div className="px-4 py-4">
              <span className="text-gray-600">Settings</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {['MacBook Pro 13"', 'Study Desk', 'Reading Chair'].map((title, i) => (
              <div key={i} className="border-2 border-gray-600 bg-white">
                <div className="aspect-square border-b-2 border-gray-600 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-700">Image</span>
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-gray-900">{title}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-700">UGX XXX,XXX</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-gray-600">Location • Date</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 border-2 border-gray-600 py-2 text-center bg-gray-300">
                      <span>Edit</span>
                    </div>
                    <div className="flex-1 border-2 border-gray-400 py-2 text-center bg-white">
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
