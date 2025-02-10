import Pieces from "../Pieces";
import RankLabels from "./RankLabels";
import FileLabels from "./FileLabels";

export default function Board() {
  const ranks = [...Array(8)].map((_, i) => 8 - i);
  const files = [...Array(8)].map((_, i) => String.fromCharCode(i + 97));

  return (
    <div className="grid relative grid-cols-[calc(0.3*80px)_calc(8*80px)]">
      <RankLabels ranks={ranks} />
      <div className="grid grid-cols-8 grid-rows-8 w-[640px] h-[640px] select-none">
        {ranks.map((_, i) =>
          files.map((_, j) => (
            <div
              key={`${i}-${j}`}
              className={`w-[80px] h-[80px] ${(i + j) % 2 === 0 ? "bg-[#f0d9b5]" : "bg-[#b58863]"
                }`}
            ></div>
          ))
        )}
      </div>
      <Pieces />
      <FileLabels files={files} />
    </div>
  );
}
