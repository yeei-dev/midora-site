import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-page flex-col items-start justify-center px-6">
      <div className="label">404</div>
      <h1 className="mt-4 text-3xl font-medium tracking-tight">Страница не найдена</h1>
      <p className="mt-3 text-[0.9375rem] leading-7 text-muted">Такой страницы здесь нет — возможно, ссылка устарела.</p>
      <Link href="/" className="mt-8 border-b border-line-strong pb-0.5 text-sm text-muted transition-colors hover:text-text">
        На главную
      </Link>
    </main>
  );
}
