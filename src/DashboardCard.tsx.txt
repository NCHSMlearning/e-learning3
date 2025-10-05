// src/components/DashboardCard.tsx
interface CardProps {
  title: string;
  onClick?: () => void;
}

export default function DashboardCard({ title, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded p-6 cursor-pointer hover:shadow-xl transition"
    >
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
  );
}
