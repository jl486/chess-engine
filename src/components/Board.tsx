import '../globals.css';

export default function Board() {

  return (
    <>
      <div className="grid grid-cols-8 grid-rows-8] w-[480px] h-[480px]">
        {[...Array(8)].map((_, rank) =>
          [...Array(8)].map((_, file) => (
            <div
              key={`${rank}-${file}`}
              className={`w-[60px] h-[60px] ${(rank + file) % 2 === 0 ? "bg-[#f0d9b5]" : "bg-[#b58863]"
                }`}
            ></div>
          ))
        )}
      </div>
    </>
  )
}
