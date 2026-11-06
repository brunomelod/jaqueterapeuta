import { useEffect } from "react";

/**
 * Carrega o motor Sites Incríveis depois do React montar o DOM.
 */
export function useSitesIncriveis() {
  useEffect(() => {
    const id = "sites-incriveis-motor";
    if (document.getElementById(id)) return undefined;
    const s = document.createElement("script");
    s.id = id;
    s.src = "/motor/sites-incriveis.js";
    s.defer = true;
    document.body.appendChild(s);
    return undefined;
  }, []);
}

/**
 * Movimento-assinatura: a luz da tarde atravessa o retrato.
 * Lê --progresso da capa; escreve --luz no palco.
 */
export function useLuzTarde() {
  useEffect(() => {
    const secao = document.getElementById("sala");
    const palco = document.getElementById("sala-palco");
    if (!secao || !palco) return undefined;

    const reduzido = () =>
      document.documentElement.classList.contains("fx-reduzido") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ativo = false;
    let raf = null;

    function aplicar() {
      if (reduzido()) {
        palco.style.setProperty("--luz", "1");
        return;
      }
      const raw = getComputedStyle(secao).getPropertyValue("--progresso").trim();
      let p = parseFloat(raw);
      if (Number.isNaN(p)) p = 0;
      palco.style.setProperty("--luz", String(Math.max(0, Math.min(1, p))));
    }

    function loop() {
      raf = null;
      if (!ativo) return;
      aplicar();
      raf = requestAnimationFrame(loop);
    }

    function iniciar() {
      if (ativo) return;
      ativo = true;
      if (raf == null) raf = requestAnimationFrame(loop);
    }

    function parar() {
      ativo = false;
      if (raf != null) cancelAnimationFrame(raf);
      raf = null;
    }

    let io = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) iniciar();
          else parar();
        },
        { root: null, threshold: 0 }
      );
      io.observe(secao);
    } else {
      iniciar();
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener?.("change", aplicar);
    window.addEventListener("resize", aplicar, { passive: true });
    aplicar();

    return () => {
      parar();
      window.removeEventListener("resize", aplicar);
      mq.removeEventListener?.("change", aplicar);
      if (io) io.disconnect();
    };
  }, []);
}

/**
 * Dobra TRG: "apagar" grande encolhe até o risco; --apagar 0→1 lê o progresso da cena fixa.
 */
export function useApagarTrg() {
  useEffect(() => {
    const secao = document.getElementById("trg");
    const alvo = document.getElementById("pico-palco");
    if (!secao || !alvo) return undefined;

    const reduzido = () =>
      document.documentElement.classList.contains("fx-reduzido") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ativo = false;
    let raf = null;

    function aplicar() {
      if (reduzido()) {
        alvo.style.setProperty("--apagar", "1");
        return;
      }
      const raw = getComputedStyle(secao).getPropertyValue("--progresso").trim();
      let p = parseFloat(raw);
      if (Number.isNaN(p)) p = 0;
      alvo.style.setProperty("--apagar", String(Math.max(0, Math.min(1, p))));
    }

    function loop() {
      raf = null;
      if (!ativo) return;
      aplicar();
      raf = requestAnimationFrame(loop);
    }

    function iniciar() {
      if (ativo) return;
      ativo = true;
      if (raf == null) raf = requestAnimationFrame(loop);
    }

    function parar() {
      ativo = false;
      if (raf != null) cancelAnimationFrame(raf);
      raf = null;
    }

    let io = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) iniciar();
          else parar();
        },
        { root: null, threshold: 0 }
      );
      io.observe(secao);
    } else {
      iniciar();
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener?.("change", aplicar);
    window.addEventListener("resize", aplicar, { passive: true });
    aplicar();

    return () => {
      parar();
      window.removeEventListener("resize", aplicar);
      mq.removeEventListener?.("change", aplicar);
      if (io) io.disconnect();
      alvo.style.removeProperty("--apagar");
    };
  }, []);
}

