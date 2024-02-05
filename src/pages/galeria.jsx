import Container from "@/components/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Galeria() {
  return (
    <>
      <Head>
        <title>Galeria de Fotos</title>
        <meta
          name="description"
          content="Formatos de banda e Eventos realizados"
        />

        <meta name="keywords" content="staffmusic, galeria" />
      </Head>
      <StyledGaleria>
        <h2>Por onde a música me levou</h2>
        <Container>
          <div className="formatos">
            <article>
              <h3>Street Music</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                doloremque possimus nemo tempore voluptatibus accusamus eius
                ducimus ullam voluptatem error.
              </p>
              <div>
                <img
                  src="/imagens/musico3.png"
                  alt="Músico sentado no amplificador tocando um violão"
                />
              </div>
            </article>

            <article>
              <h3>Show no Teatro Ipiranga</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                aliquid veritatis nam cum suscipit perspiciatis esse incidunt
                autem dolorem aliquam.
              </p>
              <div>
                <img
                  src="/imagens/musico2.png"
                  alt="Músico tocando guitarra no palco de um teatro"
                />
              </div>
            </article>

            <article>
              <h3>Faixas autorais</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                necessitatibus, sunt impedit maiores eaque laborum accusantium
                obcaecati veritatis possimus qui.
              </p>
              <div>
                <img
                  src="/imagens/musico4.png"
                  alt="Músico cantando com seu violão"
                />
              </div>
            </article>

            <article>
              <h3>Voz e Violão</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                nisi minima sit maiores incidunt a dolorum, iure nemo architecto
                enim.
              </p>
              <div>
                <img
                  src="/imagens/musico5.png"
                  alt="Músico sentado num banco tocando violão"
                />
              </div>
            </article>

            <article>
              <h3>Banda Trio</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
                sint eligendi molestiae sequi animi maxime nemo voluptas iure
                reprehenderit.
              </p>
              <div>
                <img
                  src="/imagens/musico6.png"
                  alt="Trio power com seus instrumentos"
                />
              </div>
            </article>

            <article>
              <h3>Super Banda</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci illum perspiciatis magnam unde neque ab voluptates nisi
                expedita culpa aliquid.
              </p>
              <div>
                <img
                  src="/imagens/musico7.png"
                  alt="Músicos tocando em um estúdio"
                />
              </div>
            </article>
          </div>
        </Container>
      </StyledGaleria>
    </>
  );
}

const StyledGaleria = styled.section`
  h2::before {
    content: "🎵 ";
  }

  article {
    padding: 1rem;
    max-width: 100%;
  }

  h3 {
    color: #8103bb;
  }
  .formatos {
    max-width: 100%;
  }

  @media screen and (min-width: 800px) {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: stretch;
      flex-wrap: wrap;
      max-width: 100%;
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }
  }
`;
