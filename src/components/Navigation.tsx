export function Navigation({ 
  currentPage, 
  onNavigate, 
  user, 
  onLogout 
}: { 
  currentPage: string; 
  onNavigate: (page: string) => void;
  user: { name: string; email: string } | null;
  onLogout: () => void;
}) {
  const navItems = ['Home', 'Buy', 'Sell', 'Profile'];
  
  return (
    <div className="border-b-2 border-gray-400 bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="border-2 border-gray-600 px-6 py-3 bg-white">
          <span className="text-gray-800">CampusMart</span>
        </div>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`border-2 px-6 py-2 ${
                currentPage === item.toLowerCase()
                  ? 'border-gray-800 bg-gray-300'
                  : 'border-gray-600 bg-white'
              }`}
            >
              {item}
            </button>
          ))}
          {user && (
            <button
              onClick={onLogout}
              className="border-2 border-gray-600 px-6 py-2 bg-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
