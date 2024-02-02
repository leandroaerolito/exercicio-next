import Container from "@/components/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Contrate() {
  return (
    <>
      <Head>
        <title>Contrate o músico</title>
        <meta
          name="description"
          content="Entrem em contato pelo formulário abaixo"
        />
        <meta name="keywords" content="staffmusic, contrate, contato" />
      </Head>

      <StyledContrate>
        <h2>Contrate</h2>
        <Container>
          <form action="" method="post">
            <div>
              <label htmlFor="nome">Nome: </label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContrate>
    </>
  );
}

const StyledContrate = styled.section`
  h2::before {
    content: "💌 ";
  }

  form > div {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;

    & label {
      font-weight: bold;
      width: 30%;
      display: flex;
      align-items: center;
    }

    & input,
    & textarea {
      width: 70%;
      border: none;
      box-shadow: var(--sombra-box);
      padding: 0.5rem;
    }

    & button {
      background-color: var(--cor-primaria-fundo);
      color: var(--cor-primaria);
      padding: 1rem;
      border: none;
      cursor: pointer;
    }
  }
`;
