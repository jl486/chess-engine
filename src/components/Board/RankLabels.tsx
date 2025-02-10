export default function RankLabels({ ranks }: { ranks: number[] }) {
  return (
    <div className="flex flex-col justify-around items-center text-[#b58863]">
      {ranks.map(rank => <span key={rank}>{rank}</span>)}
    </div>
  );
}
