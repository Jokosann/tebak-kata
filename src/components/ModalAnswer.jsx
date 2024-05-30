export default function ModalAnswer() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="relative max-w-2xl p-4 w-full h-96 bg-white flex flex-col gap-10 justify-center items-center rounded-3xl shadow-sm border border-slate-300/60">
        <span className="absolute top-4 right-4 text-3xl cursor-pointer w-10 h-10 grid place-content-center">
          ❌
        </span>
        <h1 className="text-6xl font-medium text-slate-600">jawabnya 🤔🫣</h1>
        <div className="flex gap-2 text-4xl font-bold">
          <span className="text-slate-600">sholat</span>
          <span className="text-slate-600">=</span>
          <span className="text-[#ff8257]">wajib</span>
        </div>
      </div>
    </div>
  );
}
