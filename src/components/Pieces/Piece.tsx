export default function Piece(
  { rank, file, type }: { rank: number, file: number, type: string }
) {
  return (
    <div
      className={`absolute w-1/8 h-1/8`}
      style={{ transform: `translate(${file * 80}px, ${rank * 80}px)`}}
      draggable={true}
    >
      <img src={`/src/assets/${type}.svg`} />
    </div>
  )
}
