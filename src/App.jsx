function App() {
  return (
    <section className="max-w-4xl mx-auto px-4 pt-12">
      <h1 className="relative font-bold text-6xl text-slate-600 mx-auto w-fit">
        tebak kata🚀
        <span className="absolute -top-3 right-14 text-3xl rotate-12 text-rose-500">a-z</span>
      </h1>
      <div className="subscribe border border-slate-600/20 mt-20 py-8 rounded-md shadow-sm bg-[#f9f7fe]">
        <div className="text-5xl font-bold w-fit mx-auto text-slate-800">
          <span>s - </span>
          <span>d - </span>
          <span>g - </span>
          <span>f - </span>
          <span>f - </span>
          <span>a - </span>
          <span>e</span>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center mt-12">
          {/* <span>👇</span> */}
          <button className="px-3 py-1 bg-[#ff8257] rounded-md text-white">start game</button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 pt-12 justify-center items-center">
        <span>👇</span>
        <button className="px-3 py-1 bg-rose-500 rounded-md text-white">check jawaban</button>
      </div>
    </section>
  );
}

export default App;
