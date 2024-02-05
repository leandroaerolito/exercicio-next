import Container from "@/components/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Bio() {
  return (
    <>
      <Head>
        <title>Biografia</title>
        <meta name="description" content="Biografia do artista" />
        <meta name="keywords" content="staffmusic, biografia do artista" />
      </Head>
      <StyledBio>
        <h2>Quem sou</h2>
        <Container>
          <h3>Um laço eterno com a música</h3>
          <p>
            Seja bem-vindo ao universo sonoro de <b>Clodoaldo Mendonça</b>, um
            talentoso artista que há anos ilumina as noites com sua paixão pela
            música. Com uma carreira enraizada nas melodias e harmonias que
            permeiam os diferentes estilos, Mendonça conquistou seu espaço como
            um dos músicos mais experientes da cena noturna.
          </p>
          <p>
            Com uma <b>habilidade única para se conectar com a audiência</b>,
            este incrível multiinstrumentista transforma cada apresentação em
            uma jornada musical envolvente. Sua trajetória no cenário noturno é
            marcada por uma rica diversidade de eventos, desde apresentações
            intimistas em bares acolhedores até performances arrebatadoras em
            renomados espaços culturais.
          </p>
          <div className="centralizaAE">
            <div className="fotoMusico">
              <img
                src="/imagens/musico8.png"
                alt="Músico sorrindo com um violão no colo"
              />
            </div>
          </div>
          <p>
            O repertório desta fera musical vai além das interpretações
            magistrais de clássicos consagrados; ele também se destaca como{" "}
            <b>compositor</b>, apresentando suas próprias criações originais.
            Suas músicas autorais refletem a profundidade de suas experiências e
            a riqueza de suas influências musicais, criando um diálogo único
            entre o artista e seu público.
          </p>

          <p>
            Ao longo dos anos, o músico cultivou uma reputação sólida não apenas
            pela <b>maestria técnica</b>, mas também pela{" "}
            <b>capacidade de transmitir emoções através de suas performances</b>
            . Cada acorde, cada nota, é carregada de uma narrativa que ressoa
            com a essência da música e transcende o tempo.
          </p>
          <div className="centralizaAE">
            <div className="fotoMusico">
              <img
                src="/imagens/musico9.png"
                alt="Músico sorrindo com um violão no colo"
              />
            </div>
          </div>
          <p>
            Para aqueles que buscam uma{" "}
            <b>experiência musical autêntica e memorável</b>, Clodoaldo Mendonça
            é a escolha certa. Sua paixão duradoura pela música e sua dedicação
            incansável em proporcionar momentos inesquecíveis fazem dele um
            verdadeiro ícone na noite musical.
          </p>

          <p>
            Prepare-se para se perder na magia das notas e se deixar levar pelas
            histórias musicais do talentoso <b>Clodoaldo Mendonça</b>, onde cada
            acorde é um capítulo e cada melodia é uma página virada na vasta
            biografia de sua carreira musical.
          </p>
          <p>
            E como ele mesmo diz: <b>"Corda tem que vibrar!"</b>.
          </p>
        </Container>
      </StyledBio>
    </>
  );
}

const StyledBio = styled.section`
  h2::before {
    content: "😎";
  }

  h3 {
    color: #8103bb;
  }
  .centralizaAE {
    display: flex;
    justify-content: center;
  }
  .fotoMusico {
    max-width: min-content;
    max-height: auto;
    box-sizing: content-box;
    border-radius: 50%;
  }
`;
