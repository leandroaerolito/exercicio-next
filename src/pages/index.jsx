import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>StaffMusic</title>
        <meta
          name="description"
          content="Web app StaffMusic criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta
          name="keywords"
          content="StaffMusic, Banda, Cantor, Música, Eventos"
        />
      </Head>

      <StyledHome>
        <h2>Está acontecendo</h2>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "🎬 ";
  }
`;