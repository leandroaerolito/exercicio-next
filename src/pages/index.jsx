import Head from "next/head";
import Link from "next/link";
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
        <h2>Bastidores, Cotidiano, Eventos</h2>
        <StyledListaPosts>
          <article>
            <Link href="">
              <h3>A jornada musical de Clodoaldo Mendonça</h3>
              <p>Descubra os bastidores da trajetória musical única de Clodoaldo Mendonça, desde os primeiros acordes até os palcos mais emblemáticos. Conheça os desafios superados e as inspirações que moldaram sua carreira.
</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>Noites Mágicas: Performances Memoráveis de Clod. Mend.</h3>
              <p>Relembre algumas das noites mais emocionantes e inesquecíveis proporcionadas por [Nome do Músico]. Da atmosfera íntima dos bares aos palcos imponentes, explore a magia que envolve suas performances.</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>A Arte de Compor: Músicas Autorais de [Nome do Músico]</h3>
              <p>Aprofunde-se nas composições originais de [Nome do Músico]. Cada música conta uma história única, revelando camadas de emoção e experiência pessoal que ressoam com o público.
</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>Conectando Corações através da Música: O Público de [Nome do Músico]"
              </h3>
              <p>Saiba mais sobre a relação especial entre [Nome do Músico] e seu público. Descubra como suas performances tocam os corações daqueles que buscam uma experiência musical autêntica.
              </p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>A Diversidade Sonora de [Nome do Músico]</h3>
              <p>Explore a habilidade de [Nome do Músico] em transitar por diferentes estilos musicais. Da suavidade do jazz à energia do rock, descubra a versatilidade que torna sua música tão cativante.</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>Influências Musicais: As Raízes Sonoras de [Nome do Músico]</h3>
              <p>Viaje pelas influências que moldaram a sonoridade única de [Nome do Músico]. Desde ícones clássicos até artistas contemporâneos, descubra as raízes profundas que enriquecem suas composições.</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>O Processo Criativo: Da Inspiração à Canção</h3>
              <p>Entre nos bastidores do processo criativo de [Nome do Músico]. Descubra como as ideias se transformam em melodias envolventes e como a paixão pela música guia cada passo desse artista talentoso.</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>Encontros Musicais: Colaborações Inesquecíveis de [Nome do Músico]</h3>
              <p>Explore as colaborações musicais marcantes de [Nome do Músico] com outros artistas. Conheça as histórias por trás dessas parcerias e como a música se torna um elo poderoso entre diferentes talentos.</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>A Música como Expressão: [Nome do Músico] Além do Palco</h3>
              <p>Descubra como a música transcende os palcos na vida cotidiana de [Nome do Músico]. Desde momentos de introspecção até inspirações inesperadas, explore a maneira como a música permeia cada aspecto de sua existência.</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>O Futuro Musical de [Nome do Músico]</h3>
              <p>Antecipe-se ao que está por vir na carreira musical de [Nome do Músico]. Descubra os planos, projetos e aspirações deste talentoso artista enquanto ele continua a escrever sua história musical e encantar audiências ao redor do mundo.</p>
            </Link>
          </article>
        
        </StyledListaPosts>
      </StyledHome>
    </>
  );
}

const StyledListaPosts = styled.div`
h3 {
  color: #262626;
}  

article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;

    & a {
      text-decoration: none;
      color: #8103bb;

    &:hover,
    &:focus {
      color: #ff7300;
    }
  }
}

article:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media screen and (min-width: 500px) {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  article {
    width: 49%;

  }
}
`;

const StyledHome = styled.section`
  h2::before {
    content: "🎬 ";
  }
`;