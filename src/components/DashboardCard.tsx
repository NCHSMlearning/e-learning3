// src/components/DashboardCard.tsx
interface DashboardCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function DashboardCard({ title, description, onClick }: DashboardCardProps) {
  return (
    <div
      className="bg-white shadow-md rounded p-4 cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
