import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  return (
    <StyledMenu>
      <Link href="/">Blog</Link>
      <Link href="/bio">Bio</Link>
      <Link href="/galeria">Galeria</Link>
      <Link href="/contrate">Contrate</Link>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  text-align: center;
`;
