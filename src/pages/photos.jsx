import Container from "@/components/Container";
import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const dados = await resposta.json();

    return {
      props: {
        tarefas: dados,
      },
    };
  } catch (error) {}
}

export default function Photos({ tarefas }) {
  console.log(tarefas);
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
        <h2>Tarefas</h2>
        <Container>
          <div className="formatos">
            {tarefas.map((tarefa) => {
              return (
                <article>
                  <h3>{tarefa.title}</h3>
                  <p>Status: {tarefa.completed ? "ok" : "pendente"}</p>
                </article>
              );
            })}
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
