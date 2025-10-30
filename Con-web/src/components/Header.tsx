import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">JCB</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center bg-black/40 backdrop-blur-sm rounded-full px-8 py-3 space-x-8">
          <a href="#" className="text-white hover:text-primary transition-colors flex items-center space-x-2">
            <span className="w-4 h-4 text-primary">🏠</span>
            <span>Home</span>
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors flex items-center space-x-2">
            <span className="w-4 h-4">ℹ️</span>
            <span>About</span>
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors flex items-center space-x-2">
            <span className="w-4 h-4">📁</span>
            <span>Projects</span>
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors flex items-center space-x-2">
            <span className="w-4 h-4">📝</span>
            <span>Blogs</span>
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors flex items-center space-x-2">
            <span className="w-4 h-4">📞</span>
            <span>Contact</span>
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            🔍
          </button>
          <button className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            🔔
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;