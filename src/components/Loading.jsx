export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-40 h-20 rounded-full overflow-hidden">
        <img
          src="public/ganjar-removebg-preview.png"
          alt="ganjar"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-4xl">nungguin ya...</p>
    </div>
  );
}
