type Props = {
  evaluation: "Oportunidade" | "Neutro" | "Acima do teto";
};

const styles: Record<Props["evaluation"], string> = {
  Oportunidade: "bg-emerald-400/10 text-emerald-300 border border-emerald-400/30",
  Neutro: "bg-slate-500/10 text-slate-300 border border-slate-400/30",
  "Acima do teto": "bg-rose-400/10 text-rose-300 border border-rose-400/30"
};

export function EvaluationBadge({ evaluation }: Props) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[evaluation]}`}>
      {evaluation}
    </span>
  );
}
