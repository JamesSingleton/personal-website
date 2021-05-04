import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={`https:${picture.url}`}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
        height="48"
        width="48"
      />
      <div className="text-xl font-bold text-gray-900">{name}</div>
    </div>
  );
}
