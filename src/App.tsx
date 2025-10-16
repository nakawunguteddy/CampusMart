import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { HomePage } from './components/HomePage';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { PostItemPage } from './components/PostItemPage';
import { ProfilePage } from './components/ProfilePage';
import { ChatPage } from './components/ChatPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleViewProduct = (productId: number) => {
    setCurrentPage('details');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
    setCurrentPage('home');
  };

  const handleSignup = (userData: { name: string; email: string }) => {
    setUser(userData);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  const handleOpenChat = () => {
    setCurrentPage('chat');
  };

  const handleBackToProduct = () => {
    setCurrentPage('details');
  };

  // Auth screens (no navigation bar)
  if (!user) {
    if (currentPage === 'signup') {
      return <SignupPage onSignup={handleSignup} onSwitchToLogin={() => setCurrentPage('login')} />;
    }
    return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setCurrentPage('signup')} />;
  }

  // Main app screens (with navigation bar)
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
      case 'buy':
        return <HomePage onViewProduct={handleViewProduct} />;
      case 'details':
        return (
          <ProductDetailsPage 
            onBack={handleBackToHome} 
            onOpenChat={handleOpenChat}
          />
        );
      case 'sell':
        return <PostItemPage />;
      case 'profile':
        return <ProfilePage user={user} />;
      case 'chat':
        return <ChatPage onBack={handleBackToProduct} />;
      default:
        return <HomePage onViewProduct={handleViewProduct} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        user={user}
        onLogout={handleLogout}
      />
      
      {/* Flow Indicator */}
      <div className="bg-gray-300 border-b-2 border-gray-500 py-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3">
            <span className={currentPage === 'home' ? 'text-gray-900' : 'text-gray-600'}>
              1. Browse
            </span>
            <span className="text-gray-600">→</span>
            <span className={currentPage === 'details' ? 'text-gray-900' : 'text-gray-600'}>
              2. View Product
            </span>
            <span className="text-gray-600">→</span>
            <span className={currentPage === 'chat' ? 'text-gray-900' : 'text-gray-600'}>
              3. Chat with Seller
            </span>
            <span className="text-gray-600">|</span>
            <span className={currentPage === 'sell' ? 'text-gray-900' : 'text-gray-600'}>
              Post Item
            </span>
            <span className="text-gray-600">|</span>
            <span className={currentPage === 'profile' ? 'text-gray-900' : 'text-gray-600'}>
              Profile
            </span>
          </div>
        </div>
      </div>

      {renderPage()}
    </div>
  );
}
