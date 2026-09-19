import { useState } from "react";
import { Link } from "react-router-dom";
import {BookOpen, Home, Search, Info, Mail, LogIn, UserPlus, Menu, X} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-green-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 text-2xl font-bold hover:text-green-600 transition-colors">
            <BookOpen size={28} />
            <span>EduPlatform</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <Home size={18} />
              <span>Home</span>
            </Link>

            <Link to="/courses" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <BookOpen size={18} />
              <span>Courses</span>
            </Link>

            <Link to="/about" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <Info size={18} />
              <span>About Us</span>
            </Link>

            <Link to="/contact" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <Mail size={18} />
              <span>Contact</span>
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>

              <input type="text" placeholder="Search courses..." className="w-48 lg:w-56 bg-gray-900 text-white border border-gray-700 rounded-lg py-2 pl-10 pr-3 text-sm outline-none focus:border-green-400 transition-colors"/>
            </div>
          </div>

          {/* Authentication */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <LogIn size={18} />
              <span>Login</span>
            </Link>

            <Link to="/register" className="flex items-center gap-1 border border-green-400 rounded-lg px-3 py-2 hover:bg-green-400 hover:text-black transition-colors">
              <UserPlus size={18} />
              <span>Register</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search size={18}className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>

              <input type="text" placeholder="Search courses..." className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg py-2 pl-10 pr-3 outline-none focus:border-green-400"/>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-3">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Home size={20} />
                <span>Home</span>
              </Link>

              <Link
                to="/courses"
                onClick={closeMenu}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <BookOpen size={20} />
                <span>Courses</span>
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Info size={20} />
                <span>About Us</span>
              </Link>

              <Link to="/contact" onClick={closeMenu}className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Mail size={20} />
                <span>Contact</span>
              </Link>

              <div className="border-t border-gray-800 my-2"></div>

              <Link to="/login" onClick={closeMenu} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <LogIn size={20} />
                <span>Login</span>
              </Link>

              <Link to="/register" onClick={closeMenu} className="flex items-center justify-center gap-2 border border-green-400 rounded-lg py-2 hover:bg-green-400 hover:text-black transition-colors">
                <UserPlus size={20} />
                <span>Register</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
