import { useState, useRef } from "react";
import Piece from "./Piece";

export default function Pieces() {
  const ref = useRef<HTMLDivElement>(null);

  const generatePositions = (): string[][] => {
    const position = new Array(8).fill("").map(_ => new Array(8).fill(""));

    for (let i = 0; i < 8; i++) {
      position[6][i] = "bp";
      position[1][i] = "wp";
    }

    position[0][0] = "wr";
    position[0][1] = "wn";
    position[0][2] = "wb";
    position[0][3] = "wq";
    position[0][4] = "wk";
    position[0][5] = "wb";
    position[0][6] = "wn";
    position[0][7] = "wr";

    position[7][0] = "br";
    position[7][1] = "bn";
    position[7][2] = "bb";
    position[7][3] = "bq";
    position[7][4] = "bk";
    position[7][5] = "bb";
    position[7][6] = "bn";
    position[7][7] = "br";

    return position;
  }

  const copyPosition = (position: string[][]) => {
    const newPosition: string[][] = new Array(8).fill("").map(_ => new Array(8).fill(""));
    for (let r = 0; r < 8; r++) {
      for (let f = 0; f < 8; f++) {
        newPosition[r][f] = position[r][f];
      }
    }
    return newPosition;
  }

  const calculateCoords = (e: React.DragEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const { width, left, top } = rect;
      const size = width / 8;
      const y = Math.floor((e.clientX - left) / size);
      const x = Math.floor((e.clientY - top) / size);
      return { x, y };
    }
    return { x: 0, y: 0 };
  }

  const [state, setState] = useState(generatePositions());

  const onDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const newPosition = copyPosition(state);
      const { x, y } = calculateCoords(e);

      const [type, r, f] = e.dataTransfer.getData("text").split(",");
      newPosition[parseInt(r)][parseInt(f)] = "";
      newPosition[x][y] = type;

      setState(newPosition);
    }
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  }

  return (
    <div
      className="absolute top-0 left-[calc(0.3*80px)] bottom-[calc(0.3*80px)] right-0 w-[640px] h-[640px]"
      ref={ref}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {state.map((rank, r) =>
        rank.map((_, f) =>
          state[r][f] ? (
            <Piece
              key={`${r}-${f}`}
              rank={r}
              file={f}
              type={state[r][f]}
            />
          ) : null
        )
      )}
    </div>
  );
}
