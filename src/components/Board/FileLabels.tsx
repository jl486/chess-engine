export default function RankLabels({ files }: { files: string[] }) {
  return (
    <div className="flex col-start-2 justify-around items-center text-[#b58863] height-[calc(0.3*88px)]">
      {files.map(f => <span key={f}>{f}</span>)}
    </div>
  );
}
