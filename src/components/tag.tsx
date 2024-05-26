type TagProps = {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <div className="bg-gray-100 border-gray-200 border-2 py-1 px-2 rounded-md flex-none">
      <p className="text-gray-500 font-normal">{label}</p>
    </div>
  );
}