import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>StaffMusic</h1>
        <nav>
          <Link href="/">Blog</Link>
          <Link href="/bio">Bio</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/contrate">Contrate</Link>
        </nav>
      </header>
      <main className="limitador">{children}</main>
    </>
  );
}
