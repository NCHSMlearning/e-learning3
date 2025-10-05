// src/pages/AdminDashboard.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardCard from "../components/DashboardCard";
import StudentsTable from "../components/StudentsTable";
import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {/* Dashboard Header */}
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Manage Students, Courses, CATS, and Attendance</p>
        <p className="mb-4 font-medium">Welcome, Matoka Kelvin!</p>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <DashboardCard
            title="Manage Students"
            description="View, approve, and manage student records"
            onClick={() => setActiveTab("students")}
          />
          <DashboardCard
            title="Manage Courses"
            description="Add, edit, or delete courses"
            onClick={() => setActiveTab("courses")}
          />
          <DashboardCard
            title="Manage Attendance"
            description="Track and update student attendance"
            onClick={() => setActiveTab("attendance")}
          />
          <DashboardCard
            title="Manage Exams/CATS"
            description="Create and manage exams or CAT scores"
            onClick={() => setActiveTab("cats")}
          />
        </div>

        {/* Tabbed Interface */}
        <div className="mb-4 flex space-x-4 border-b">
          <button
            className={activeTab === "students" ? "border-b-2 border-blue-600 font-bold" : ""}
            onClick={() => setActiveTab("students")}
          >
            All Students
          </button>
          <button
            className={activeTab === "attendance" ? "border-b-2 border-blue-600 font-bold" : ""}
            onClick={() => setActiveTab("attendance")}
          >
            Attendance
          </button>
          <button
            className={activeTab === "courses" ? "border-b-2 border-blue-600 font-bold" : ""}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </button>
          <button
            className={activeTab === "cats" ? "border-b-2 border-blue-600 font-bold" : ""}
            onClick={() => setActiveTab("cats")}
          >
            CATS/Exams
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "students" && <StudentsTable />}
          {activeTab === "attendance" && <p>Attendance management coming soon...</p>}
          {activeTab === "courses" && <p>Courses management coming soon...</p>}
          {activeTab === "cats" && <p>CATS/Exams management coming soon...</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
