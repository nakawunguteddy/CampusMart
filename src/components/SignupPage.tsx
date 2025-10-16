export function SignupPage({ onSignup, onSwitchToLogin }: { onSignup: (user: { name: string; email: string }) => void; onSwitchToLogin: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup({
      name: "John Doe",
      email: "john.doe@mak.ac.ug"
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-white border-2 border-gray-600 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="border-2 border-gray-600 px-6 py-3 bg-gray-100 inline-block mb-4">
            <span className="text-gray-800">CampusMart</span>
          </div>
          <div className="mb-2">
            <span className="text-gray-800">Create Your Account</span>
          </div>
          <div>
            <span className="text-gray-600">Join your campus marketplace today</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <div className="mb-2">
              <span className="text-gray-700">Full Name</span>
            </div>
            <div className="border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600">Nansubuga Sarah</span>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-700">University Email</span>
            </div>
            <div className="border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600">Enter your.email@university.ac.ug</span>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-700">Phone Number</span>
            </div>
            <div className="border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600">+256 700 123 456</span>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-700">Campus Location</span>
            </div>
            <div className="border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600">Select your campus</span>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-700">Password</span>
            </div>
            <div className="border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600">••••••••</span>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-700">Confirm Password</span>
            </div>
            <div className="border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600">••••••••</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-4 h-4 border-2 border-gray-500 bg-white mt-1"></div>
            <span className="text-gray-700">I agree to the Terms of Service and Privacy Policy</span>
          </div>

          <button
            type="submit"
            className="w-full border-2 border-gray-600 py-3 bg-gray-300 text-center"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-600">
            Already have an account?{' '}
          </span>
          <button onClick={onSwitchToLogin} className="border-b border-gray-600">
            <span className="text-gray-700">Sign in</span>
          </button>
        </div>
      </div>
    </div>
  );
}
