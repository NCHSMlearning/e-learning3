// src/components/StudentsTable.tsx
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;  // <-- added
  status: string;
  role: string;
}

export default function StudentsTable() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, name, email, phone, status, role") // <-- added phone
      .eq("role", "student");
    if (error) console.error(error);
    else setStudents(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleApprove = async (id: string) => {
    await supabase.from("profiles").update({ status: "active" }).eq("id", id);
    fetchStudents();
  };

  const handleMakeAdmin = async (id: string) => {
    await supabase.from("profiles").update({ role: "admin" }).eq("id", id);
    fetchStudents();
  };

  const handleDelete = async (id: string) => {
    await supabase.from("profiles").delete().eq("id", id);
    fetchStudents();
  };

  if (loading) return <p>Loading students...</p>;

  return (
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Phone</th> {/* <-- added */}
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Role</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td className="border px-4 py-2">{s.name}</td>
            <td className="border px-4 py-2">{s.email}</td>
            <td className="border px-4 py-2">{s.phone}</td> {/* <-- added */}
            <td className="border px-4 py-2">{s.status}</td>
            <td className="border px-4 py-2">{s.role}</td>
            <td className="border px-4 py-2 space-x-2">
              <button
                onClick={() => handleApprove(s.id)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => handleMakeAdmin(s.id)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Make Admin
              </button>
              <button
                onClick={() => handleDelete(s.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
