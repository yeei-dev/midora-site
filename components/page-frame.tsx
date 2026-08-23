import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";

export function PageFrame({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-page px-6 pt-14">
        <header className="rise">
          <div className="label">{label}</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          {intro && <p className="mt-4 max-w-xl text-[0.9375rem] leading-7 text-muted">{intro}</p>}
        </header>
        <div className="mt-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
