export default function GlobalTimer() {
  const timeUnits = [
    { value: "00", label: "Days" },
    { value: "00", label: "Hrs" },
    { value: "00", label: "Min" },
    { value: "00", label: "Sec" },
  ];

  return (
    <div className="bg-orange-500 text-white rounded-full px-4 py-2 flex items-center gap-3 shadow-sm">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex items-center gap-1">
          <span className="text-sm font-bold">{unit.value}</span>
          <span className="text-[10px] font-medium opacity-90">{unit.label}</span>
          {index !== timeUnits.length - 1 && <span className="opacity-50"> </span>}
        </div>
      ))}
    </div>
  );
}