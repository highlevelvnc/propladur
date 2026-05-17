import Link from "next/link";

export function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-graphite-900 text-ink min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="container max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="label-caps text-muted flex items-center gap-2 mb-6"
        >
          <Link href="/" className="hover:text-gold-300">
            Início
          </Link>
          <span aria-hidden>›</span>
          <span className="text-white/70">{eyebrow}</span>
        </nav>

        <span className="label-caps text-gold-300">{eyebrow}</span>
        <h1 className="mt-4 font-display font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white">
          {title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          Última atualização: {updated}
        </p>

        <div className="legal mt-10 space-y-6 text-white/75 text-[16px] leading-relaxed">
          {children}
        </div>
      </div>
    </main>
  );
}
