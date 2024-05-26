type TagProps = {
  label: string;
}

export default function Chip({ label }: TagProps) {
  return (
    <div className="bg-gray-100 py-1 px-2 rounded-md flex-none">
      <p className="text-gray-400 font-normal">{label}</p>
    </div>
  );
}