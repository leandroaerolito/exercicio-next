import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <Image
          src="/imagens/staffmusic-logo.svg"
          width={48}
          height={48}
          alt="Palheta amarela com silhueta de violão e gravata borboleta"
        />

        <Link href="/">StaffMusic</Link>
      </h1>
      <Menu />
    </header>
  );
}
