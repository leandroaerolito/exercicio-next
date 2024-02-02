import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";


export default function Menu() {
  const rotaAtual = usePathname ();

  const linkAtivo = (rota) => (rotaAtual ===rota ? "ativo" : "");

  return (
    <StyledMenu>
      <Link href="/" className={linkAtivo("/")}>Blog</Link>
      <Link href="/bio" className={linkAtivo("/")} >Bio</Link>
      <Link href="/galeria" className={linkAtivo("/")} >Galeria</Link>
      <Link href="/contrate" className={linkAtivo("/")}>Contrate</Link>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }

    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-primaria-fundo-hover);
    }

    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  a.ativo {
    background-color: black;
    
  }
`;


