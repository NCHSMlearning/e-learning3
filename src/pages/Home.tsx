// src/pages/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="NCHSM Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">NCHSM</span>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">🏠 Home</Link>
          <Link to="/courses" className="hover:underline">📘 Courses</Link>
          <Link to="/calendar" className="hover:underline">📅 Calendar</Link>
          <Link to="/inbox" className="hover:underline">💬 Inbox</Link>
          <Link to="/profile" className="hover:underline">👤 Profile</Link>
          <Link to="/admin" className="hover:underline">⚙ Admin</Link>
          <Link to="/attendance" className="hover:underline">Attendance</Link>
          <button className="hover:underline">LOGOUT</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to NCHSM Home Page</h1>
        <p className="mb-6">
          Access courses, manage attendance, view messages, and navigate to the admin dashboard.
        </p>

        {/* Quick Links or Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/courses" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            📘 View Courses
          </Link>
          <Link to="/calendar" className="p-4 bg-green-100 rounded shadow hover:bg-green-200">
            📅 Calendar
          </Link>
          <Link to="/admin" className="p-4 bg-yellow-100 rounded shadow hover:bg-yellow-200">
            ⚙ Admin Dashboard
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 p-4 text-center">
        © 2025 NCHSM
      </footer>
    </div>
  );
}
