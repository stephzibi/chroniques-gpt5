import Link from 'next/link';
import site from '../data/site.json';

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container py-6 flex items-center gap-6">
          <img src={site.headerImage} alt="Header" className="h-16 w-16 object-cover rounded-full" />
          <div>
            <h1 className="text-2xl font-bold">{site.siteTitle}</h1>
            <nav className="text-sm space-x-4">
              <Link href="/">Accueil</Link>
              <Link href="/podcasts">Toutes les Chroniques</Link>
              <Link href="/media">TV & Radio</Link>
              <Link href="/press">Presse</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">À propos</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="container py-8">{children}</main>
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Stéphane Zibi</footer>
    </div>
  );
}
