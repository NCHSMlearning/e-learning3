// src/components/Navbar.tsx
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can integrate Supabase signOut here
    // supabase.auth.signOut()
    navigate("/"); // redirect to home/login
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 font-bold text-xl">
        <img src="/public/logo.png" alt="NCHSM Logo" className="w-10 h-10" />
        <span>NCHSM</span>
      </div>
      <div className="flex space-x-4 items-center">
        <Link to="/" className="hover:underline">🏠 Home</Link>
        <Link to="/courses" className="hover:underline">📘 Courses</Link>
        <Link to="/calendar" className="hover:underline">📅 Calendar</Link>
        <Link to="/inbox" className="hover:underline">💬 Inbox</Link>
        <Link to="/profile" className="hover:underline">👤 Profile</Link>
        <Link to="/admin" className="hover:underline">⚙ Admin</Link>
        <Link to="/attendance" className="hover:underline">Attendance</Link>
        <button onClick={handleLogout} className="hover:underline">LOGOUT</button>
      </div>
    </nav>
  );
}
