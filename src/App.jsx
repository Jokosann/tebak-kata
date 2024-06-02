import { useContext, useState } from 'react';
import { CountContext } from './contexts/count';
import { dataQuest } from './libs/data';
import Loading from './components/Loading';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const context = useContext(CountContext);
  const data = dataQuest[context.count];
  const panjangKata = Object.keys(data.quest).length;
  const text1 = data.quest.one;
  const text2 = data.quest.two;

  const handleStartGame = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      context.setCount((prev) => prev + 1);
    }, 3000);
  };

  return (
    <>
      {modal && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-2xl p-4 w-full h-96 bg-white flex flex-col gap-10 justify-center items-center rounded-3xl shadow-sm border border-slate-300/60"
          >
            <span
              onClick={() => setModal(false)}
              className="absolute top-4 right-4 text-3xl cursor-pointer w-10 h-10 grid place-content-center"
            >
              ❌
            </span>
            <h1 className="text-6xl font-medium text-slate-600">jawabnya 🤔🫣</h1>
            <div className="flex gap-2 text-4xl font-bold">
              <span className="text-slate-600">{data.answer.text}</span>
              <span className="text-slate-600">=</span>
              <span className="text-[#ff8257]">{data.answer.hukum}</span>
            </div>
          </motion.div>
        </div>
      )}
      <section className="max-w-7xl mx-auto px-4 pb-12 pt-12">
        <h1 className="relative font-bold text-6xl text-slate-600 mx-auto w-fit">
          tebak kata🚀
          <span className="absolute -top-3 right-14 text-3xl rotate-12 text-rose-500">a-z</span>
        </h1>
        <div className="subscribe border border-slate-600/20 mt-16 py-10 rounded-md shadow-sm bg-[#f9f7fe]">
          <div className="w-full flex justify-center items-center">
            <p className="text-base font-bold text-slate-600">{panjangKata} KATA</p>
          </div>
          <div className="text-5xl flex justify-center items-center font-bold w-full text-slate-800 mt-8">
            {loading ? (
              <div className="w-fit text-center h-12">
                <Loading />
              </div>
            ) : (
              <div className="w-fit space-x-16 uppercase text-center h-12">
                <span>{text1}</span>
                {text2 && <span>{text2}</span>}
              </div>
            )}
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-center mt-14">
            <button
              className="px-4 py-2 font-bold bg-[#ff8257] rounded-md text-white"
              onClick={handleStartGame}
            >
              start game
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 pt-10 justify-center items-center">
          <span className="text-xl">👇</span>
          <button
            onClick={() => setModal(true)}
            className="px-5 py-3 font-bold bg-rose-500 rounded-md text-white"
          >
            check jawaban
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
