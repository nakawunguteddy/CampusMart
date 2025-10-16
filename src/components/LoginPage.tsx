export function LoginPage({ onLogin, onSwitchToSignup }: { onLogin: (user: { name: string; email: string }) => void; onSwitchToSignup: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      name: "Sarah Nansubuga",
      email: "sarah.nansubuga@mak.ac.ug"
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
            <span className="text-gray-800">Welcome Back!</span>
          </div>
          <div>
            <span className="text-gray-600">Sign in to buy and sell with fellow students</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="mb-2">
              <span className="text-gray-700">Email Address</span>
            </div>
            <div className="border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600">Enter your.email@university.ac.ug</span>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <span className="text-gray-700">Password</span>
            </div>
            <div className="border-2 border-gray-600 p-3 bg-gray-50">
              <span className="text-gray-600"> ••••••••</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-500 bg-white"></div>
              <span className="text-gray-700">Remember me</span>
            </div>
            <div className="border-b border-gray-500">
              <span className="text-gray-600">Forgot password?</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full border-2 border-gray-600 py-3 bg-gray-300 text-center"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-600">
            Don't have an account?{' '}
          </span>
          <button onClick={onSwitchToSignup} className="border-b border-gray-600">
            <span className="text-gray-700">Sign up</span>
          </button>
        </div>
      </div>
    </div>
  );
}
