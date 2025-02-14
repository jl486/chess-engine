import React from "react";


export default function Piece(
  { rank, file, type }: { rank: number, file: number, type: string }
) {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer?.setData("text/plain", `${type},${rank},${file}`);
    setTimeout(() => {
      (e.target as HTMLDivElement).style.display = "none";
    }, 0);
  }

  return (
    <div
      className={`absolute w-1/8 h-1/8`}
      style={{ transform: `translate(${file * 80}px, ${rank * 80}px)`}}
      draggable={true}
      onDragStart={onDragStart}
    >
      <img src={`/svg/${type}.svg`} />
    </div>
  )
}
