import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <Link href="/">Blog</Link>
      <Link href="/">Bio</Link>
      <Link href="/">Galeria</Link>
      <Link href="/">Contrate</Link>
    </nav>
  );
}
