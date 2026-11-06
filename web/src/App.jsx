import "./App.css";
import { useApagarTrg, useLuzTarde, useSitesIncriveis } from "./useSitesIncriveis.js";

const WA = "https://wa.me/5571992153282";
const wa = (texto) => `${WA}?text=${encodeURIComponent(texto)}`;
const FOTO = "/assets/jaqueline-hero.png";
const SESSAO_ZOOM = "/assets/sessao-zoom.jpg";
const LOGO_TRG = "/assets/trg-ibft-logo.svg";

export default function App() {
  useSitesIncriveis();
  useLuzTarde();
  useApagarTrg();

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="masthead">
        <div className="masthead__inner">
          <a className="masthead__name" href="/">
            Jaqueline Secundino
          </a>
          <nav className="masthead__nav" aria-label="Primário">
            <a href="#trg">TRG</a>
            <a href="#sessao">Sessão</a>
            <a className="masthead__wa" href={wa("Olá, Jaqueline!")}>
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <section
        id="sala"
        data-fx-fixa=""
        data-fx-altura="1.15"
        data-fx-fundo="#F8F3DC"
        data-fx-tinta="#2E4030"
        aria-labelledby="hero-titulo"
      >
        <div className="fx-palco sala-palco" id="sala-palco">
          <div className="sala-miolo">
            <figure className="hero-foto">
              <img
                src={FOTO}
                width={650}
                height={819}
                alt="Jaqueline Secundino, terapeuta emocional."
              />
              <span className="sala-luz" aria-hidden="true" />
            </figure>

            <div className="hero-copy">
              <h1 id="hero-titulo">
                <span className="hero-linha">A sessão</span>
                <span className="hero-linha">já está</span>
                <span className="hero-linha">
                  <em>aberta.</em>
                </span>
              </h1>
              <p className="hero-lead">
                Terapeuta emocional. Sessões pelo Zoom. O primeiro contato é uma mensagem — sem
                pressão, sem precisar chegar inteira.
              </p>
              <a className="btn-linha" href={wa("Olá, Jaqueline! Quero conversar sobre terapia.")}>
                Entrar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="sala-termino" aria-hidden="true" />
      </section>

      <main id="conteudo">
        <section
          id="peso"
          className="peso"
          data-fx-fundo="#FBFBF7"
          data-fx-tinta="#2E4030"
          aria-labelledby="peso-titulo"
        >
          <h2 id="peso-titulo" data-fx="subir">
            O peso que você carrega <em>cabe aqui.</em>
          </h2>
          <p data-fx="subir" data-fx-atraso="90">
            Ansiedade e sobrecarga não são falta de força. São sinais de que algo precisa de nome e
            de espaço. A terapia não promete milagre: oferece método, confidencialidade e uma
            relação onde você não precisa se editar antes de falar.
          </p>
        </section>

        <section
          id="trg"
          className="pico"
          data-fx-fixa=""
          data-fx-altura="5"
          data-fx-fundo="#C9DCC6"
          data-fx-tinta="#2E4030"
          aria-labelledby="pico-titulo"
        >
          <div className="fx-palco pico-palco" id="pico-palco">
            <div className="pico-miolo">
              <img
                src={LOGO_TRG}
                width={200}
                height={50}
                className="pico-logo"
                alt="Terapia de Reprocessamento Generativo — IBFT"
                decoding="async"
              />

              <div className="pico-lockup">
                <div className="pico-apagar-slot" aria-hidden="true">
                  <span className="pico-apagar">apagar</span>
                </div>
                <h2 id="pico-titulo">
                  <span className="pico-reprocessar">Reprocessar</span>
                  <span className="pico-resto">
                    o que ainda <em>dói</em>
                  </span>
                </h2>
              </div>

              <div className="pico-metodo">
                <div className="pico-metodo__textos">
                  <p className="pico-lead pico-metodo-p1">
                    Integra recursos da terapia cognitivo-comportamental com a forma como emoções e
                    memórias se organizam.
                  </p>
                  <p className="pico-metodo-p2">
                    O foco é reprocessar experiências que ainda doem — não apagá-las, reorganizá-las.
                  </p>
                  <p className="pico-metodo-p3">
                    Abrir caminhos generativos: novas formas de viver e se relacionar.
                  </p>
                </div>
                <p className="pico-fecho pico-metodo-p4">
                  Pedir ajuda é decisão, <em>não fraqueza.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sessao"
          className="sessao"
          data-fx-fundo="#FBFBF7"
          data-fx-tinta="#2E4030"
          aria-labelledby="sessao-titulo"
        >
          <div className="sessao-bloco">
            <figure className="sessao-still">
              <img
                src={SESSAO_ZOOM}
                width={1280}
                height={720}
                alt="Jaqueline em sessão pelo Zoom, da sua casa."
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="sessao-folha">
              <div className="sessao-cabeca">
                <h2 id="sessao-titulo">Da sua cadeira.</h2>
                <p className="sessao-type" data-fx="digitar">
                  Da sua casa. Pelo Zoom.
                </p>
              </div>
              <p data-fx="surgir" data-fx-atraso="80">
                As sessões acontecem pelo Zoom. Você entra de onde estiver — não precisa de um
                consultório, nem de chegar inteira. A cadeira já está lá.
              </p>
              <p className="suave" data-fx="surgir" data-fx-atraso="140">
                O primeiro contato é uma mensagem. Combinamos o próximo passo sem pressão.
              </p>
              <a
                className="btn"
                data-fx="crescer"
                data-fx-atraso="200"
                href={wa("Olá, Jaqueline! Quero entender como funciona a sessão no Zoom.")}
              >
                Combinar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="confianca"
          data-fx-fundo="#F8F3DC"
          data-fx-tinta="#2E4030"
          aria-labelledby="faq-titulo"
        >
          <h2 id="faq-titulo" data-fx="esquerda">
            O que costumam perguntar
          </h2>
          <div className="faq-list">
            <details data-fx="esquerda" data-fx-atraso="40">
              <summary>Pra quem é?</summary>
              <p>
                Adultos com ansiedade, sobrecarga emocional, transições, autocrítica ou sensação de
                estar travada. O encaixe é avaliado no diálogo inicial.
              </p>
            </details>
            <details data-fx="esquerda" data-fx-atraso="80">
              <summary>Qual a abordagem?</summary>
              <p>
                Terapia de Reprocessamento Generativo (TRG), com escuta clínica e ferramentas para
                reorganizar pensamento e emoção.
              </p>
            </details>
            <details data-fx="esquerda" data-fx-atraso="120">
              <summary>Quanto tempo dura?</summary>
              <p>
                Não há prazo fixo. Depende da sua demanda, do ritmo de vida e dos objetivos
                combinados. Isso é transparente desde o começo.
              </p>
            </details>
            <details data-fx="esquerda" data-fx-atraso="160">
              <summary>Como são as sessões?</summary>
              <p>
                Pelo Zoom. Os detalhes se combinam no primeiro contato, conforme o que fizer sentido
                para você.
              </p>
            </details>
            <details data-fx="esquerda" data-fx-atraso="200">
              <summary>Como começar?</summary>
              <p>
                Mensagem no <strong>71 99215-3282</strong>. Respondemos com próximos passos e
                podemos marcar uma conversa inicial sem pressão.
              </p>
            </details>
          </div>
        </section>

        <section id="convite" className="fim" data-fx-fundo="#2A3B2C" data-fx-tinta="#FBFBF7">
          <div className="fim-bloco">
            <h2 data-fx="crescer">
              Eu não preciso chegar inteiro. <em>Posso chegar como estou.</em>
            </h2>
            <p data-fx="surgir" data-fx-atraso="80">
              Jaqueline Secundino · terapeuta emocional · TRG
            </p>
            <a
              className="btn btn--claro"
              data-fx="subir"
              data-fx-atraso="140"
              href={wa("Olá, Jaqueline! Vim pelo site e quero conversar.")}
            >
              Entrar pelo WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
