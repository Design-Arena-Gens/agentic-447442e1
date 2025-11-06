import { EvaluationBadge } from "@/components/evaluation-badge";
import type { FiiSnapshot } from "@/lib/fiis";

type Props = {
  data: FiiSnapshot;
};

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2
});

const percent = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2
});

export function FiiCard({ data }: Props) {
  const { evaluation, upsidePercent } = data;
  const upsideLabel = Number.isFinite(upsidePercent)
    ? percent.format(upsidePercent / 100)
    : "—";

  return (
    <article className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            {data.ticker}
          </h2>
          <p className="text-sm text-slate-300">{data.name}</p>
        </div>
        <EvaluationBadge evaluation={evaluation} />
      </header>

      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="flex flex-col gap-1">
          <dt className="text-xs uppercase tracking-wider text-slate-400">
            Preço atual
          </dt>
          <dd className="text-lg font-semibold text-slate-100">
            {currency.format(data.currentPrice)}
          </dd>
        </div>

        <div className="flex flex-col gap-1">
          <dt className="text-xs uppercase tracking-wider text-slate-400">
            Preço teto (Selic {data.selicRate.toFixed(2)}%)
          </dt>
          <dd className="text-lg font-semibold text-slate-100">
            {currency.format(data.priceCeiling)}
          </dd>
        </div>

        <div className="flex flex-col gap-1">
          <dt className="text-xs uppercase tracking-wider text-slate-400">
            Dividendos médios (mês)
          </dt>
          <dd className="text-lg font-semibold text-slate-100">
            {currency.format(data.monthlyDividend)}
          </dd>
        </div>

        <div className="flex flex-col gap-1">
          <dt className="text-xs uppercase tracking-wider text-slate-400">
            Upside vs. teto
          </dt>
          <dd
            className={`text-lg font-semibold ${upsidePercent >= 0 ? "text-emerald-300" : "text-rose-300"}`}
          >
            {upsideLabel}
          </dd>
        </div>
      </dl>
    </article>
  );
}
