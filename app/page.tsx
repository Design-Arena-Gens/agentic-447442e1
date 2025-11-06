import { FiiCard } from "@/components/fii-card";
import { getLogisticFiiSnapshots } from "@/lib/fiis";

export const revalidate = 900;

export default async function Home() {
  const snapshots = await getLogisticFiiSnapshots();
  const selic = snapshots[0]?.selicRate ?? 0;

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12">
      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">
          Selic atualizada: {selic.toFixed(2)}% ao ano
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          FIIs de Logística · Preço Teto dinâmico
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
          Atualizamos o preço teto de cada fundo usando a Selic mais recente do
          Banco Central. O teto é calculado projetando o dividendo anualizado e
          comparando com a taxa de juros para encontrar o preço máximo que
          mantém o retorno acima da Selic. Visualize rapidamente quais FIIs
          estão abaixo, próximos ou acima desse limite.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {snapshots.map((snapshot) => (
          <FiiCard key={snapshot.ticker} data={snapshot} />
        ))}
      </section>
    </main>
  );
}
