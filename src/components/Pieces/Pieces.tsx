import Piece from "./Piece";

export default function Pieces() {
  const positions: string[][] = new Array(8).fill("").map(_ => new Array(8).fill(""));

  positions[0][0] = "br";
  positions[0][1] = "bn";
  positions[0][2] = "bb";
  positions[0][3] = "bq";
  positions[0][4] = "bk";
  positions[0][5] = "bb";
  positions[0][6] = "bn";
  positions[0][7] = "br";

  positions[7][0] = "wr";
  positions[7][1] = "wn";
  positions[7][2] = "wb";
  positions[7][3] = "wq";
  positions[7][4] = "wk";
  positions[7][5] = "wb";
  positions[7][6] = "wn";
  positions[7][7] = "wr";

  for (let i = 0; i < 8; i++) {
    positions[1][i] = "bp";
    positions[6][i] = "wp";
  }

  return (
    <div className="absolute top-0 left-[calc(0.3*80px)] bottom-[calc(0.3*80px)] right-0 w-[640px] h-[640px]">
      {positions.map((rank, i) =>
        rank.map((_, j) =>
          positions[i][j] ? (
            <Piece
              key={`${i}-${j}`}
              rank={i}
              file={j}
              type={positions[i][j]}
            />
          ) : null
        )
      )}
    </div>
  );
}
