import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Typing.css";

const words = ["websites ", "designs ", "experiences "];
function Typing() {
  const [currentWord, setCurrentWord] = useState("");
  const [readLeftToRight, setReadLeftToRight] = useState(true);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (readLeftToRight) {
        const nextChar = words[wordIdx][currentIdx];
        setCurrentWord((prevWord) => prevWord + nextChar);
        setCurrentIdx((prevIdx) => prevIdx + 1);

        if (currentIdx === words[wordIdx].length - 1) {
          setReadLeftToRight(false);
        }
      } else {
        setCurrentWord((prevWord) => prevWord.slice(0, -1));

        if (currentWord === "") {
          const nextWordIdx = wordIdx + 1 >= words.length ? 0 : wordIdx + 1;
          const nextWord = words[nextWordIdx][0];
          setCurrentWord(nextWord);

          setWordIdx((prevWordIdx) =>
            prevWordIdx === words.length - 1 ? 0 : prevWordIdx + 1
          );

          setCurrentIdx(1);
          setReadLeftToRight(true);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentWord, readLeftToRight]);

  return (
    <>
      <div className="p-5 uppercase bg-gray-900 h-screen">
        <Link
          className="p-2 border-2 bg-white border-green-600 hover:bg-green-600 hover:text-white"
          to="/"
        >
          Home
        </Link>
        <h1 className="text-center text-white text-4xl font-bold mb-20">
          Typing Animation
        </h1>
        <h1 className="mt-4 text-5xl text-orange-500">we make the best</h1>
        <h1 className="mt-10 text-5xl text-pink-500 font-semibold flex tracking-wider">
          {currentWord}
          <div className="w-2 bg-white  h-10 blinking-cursor"></div>
        </h1>
      </div>
    </>
  );
}

export { Typing };
