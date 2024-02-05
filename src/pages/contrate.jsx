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
        <h2>Contrate o músico para seu evento</h2>
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
              <label for="telefone">Telefone</label>
              <input type="tel" id="telefone" class="input-padrao" min="11" max="11" required placeholder="(xx) xxxxx-xxxx"/>
            </div>
        
            <div>
              <label htmlFor="data">Data:</label>
              <input type="date" name="data" min="2024-01-05" max="2024-12-31" />
            </div>

            <div>
              <label htmlFor="local">Local:</label>
              <input type="text" name="local" id="local" />
            </div>
            <div>
              <label htmlFor="horario">Horário:</label>
              <input type="text" name="horario" id="horario" />
            </div>

            <div>
              <label htmlFor="faixaEtaria">Classificação</label>
              <select name="classificação" id="classificação1">
                <option selected disabled value="">Qual faixa-etária?</option>
                <option value="adulto">adulto</option>
                <option value="infantil">infantil</option>
              </select>
            </div>

            <div>
              <label htmlFor="formatos">Formatos:</label>
              <select name="formatos" id="formato1">voz
                <option selected disabled value="">escolha o formato</option>
                <option value="voz e violão">Voz e Violão</option>
                <option value="+percussão"> + percussão</option>
                <option value="trio">Banda Trio</option>
                <option value="banda">Super Banda</option>
              </select>
            </div>

            <div>
              <label htmlFor="duração">Duração:</label>
              <select name="duração" id="duracao1">voz
                <option selected disabled value="">selecione a duração</option>
                <option value="voz e violão">1h</option>
                <option value="+percussão">2h</option>
                <option value="trio">4h</option>
                <option value="banda">6h</option>
              </select>
            </div>

            <div>
              <label htmlFor="email">Estilos: </label>
              <input type="text" name="estilos" id="estilos" />
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
    content: "📅 ";
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
      select, 
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
