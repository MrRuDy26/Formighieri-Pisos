"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
// Motor de scroll suave
import Lenis from '@studio-freight/lenis';

export default function Home() {
  // Inicialização do Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing perfeito
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 0.5], ["0%", "-40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [activeTab, setActiveTab] = useState(0);

  const collections = [
    {
      name: "Pisos Estruturados",
      desc: "Reale Carvalho, Tauari Aspen, Peroba Mica.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
    },
    {
      name: "Pisos Maciços",
      desc: "Tradição em Taco, Taco Palito e Assoalhos.",
      img: "https://images.unsplash.com/photo-1546215367-72caede26d96?q=80&w=1600&auto=format&fit=crop"
    },
    {
      name: "Decks & Externos",
      desc: "Cumaru, Deck Ecológico e Painéis Ripados.",
      img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  return (
    <main className="bg-[#0c0a09] text-[#EAE6DF] font-sans overflow-hidden selection:bg-[#cda661] selection:text-[#0c0a09]">
      
      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-6 flex items-center justify-between mix-blend-difference"
      >
        <div className="font-serif text-lg sm:text-xl tracking-[0.3em] text-white uppercase font-bold">
          Formighieri
        </div>
        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-white hover:text-[#cda661] transition-colors duration-500"
        >
          <span>Atendimento</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.nav>

      {/* HERO PARALLAX - Foco no produto e nos 75 anos */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop')`,
            y: yBackground 
          }}
        />
        {/* Máscara absoluta preta para zerar linhas no fim da seção */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/40 via-[#0c0a09]/60 to-[#0c0a09]" />

        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 flex flex-col items-center text-center mt-20 px-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-[13vw] sm:text-[9vw] leading-[0.85] tracking-tighter text-white">
              75 Anos de <br /> <span className="italic text-[#cda661] pr-4">Madeira.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-white/50 text-[10px] sm:text-sm uppercase tracking-[0.4em] max-w-xl"
          >
            Pisos de alto padrão, painéis e decks em Curitiba.
          </motion.p>
        </motion.div>
      </section>

      {/* TRADIÇÃO E FOCO NA MARCA */}
      <section className="relative py-32 px-8 max-w-6xl mx-auto flex items-center justify-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.3] text-[#EAE6DF]"
        >
          Desde 1950, a assinatura <br/>
          <span className="text-white/40">por trás dos projetos residenciais mais sofisticados.</span>
        </motion.h2>
      </section>

      {/* VITRINE CINEMÁTICA - DADOS REAIS DA FORMIGHIERI */}
      <section className="relative py-20 px-4 sm:px-8 max-w-[1400px] mx-auto min-h-[800px] flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 z-20 relative gap-8">
          <div>
            <span className="text-[#cda661] text-[10px] uppercase tracking-[0.3em] mb-4 block">Soluções Completas</span>
            <h3 className="font-serif text-4xl sm:text-5xl">Catálogo Formighieri</h3>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {collections.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="group flex items-center gap-3 focus:outline-none"
              >
                <span className={`text-xs uppercase tracking-widest transition-colors duration-500 ${activeTab === index ? 'text-[#cda661]' : 'text-white/40 group-hover:text-white'}`}>
                  {item.name}
                </span>
                {activeTab === index && (
                  <motion.div layoutId="dot-nav" className="w-1.5 h-1.5 rounded-full bg-[#cda661]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[60vh] sm:h-[70vh] bg-[#0c0a09]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${collections[activeTab].img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-90" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-10 left-8 sm:left-12 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-serif text-3xl sm:text-4xl text-white">{collections[activeTab].name}</p>
                <p className="text-[#cda661] text-xs uppercase tracking-[0.2em] mt-3">{collections[activeTab].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* MOSAICO DE OBRAS REALIZADAS (CSS GRID ASSIMÉTRICO) */}
      <section className="py-32 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#cda661] text-[10px] uppercase tracking-[0.3em] mb-4 block">Obras Realizadas</span>
          <h2 className="font-serif text-4xl sm:text-5xl">Onde a madeira ganha vida.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 auto-rows-[300px] sm:auto-rows-[450px]">
          {/* Obra 1 - Grande (Esquerda) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="md:col-span-7 relative rounded-sm overflow-hidden group"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop')" }} />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
            <div className="absolute bottom-8 left-8">
              <p className="text-[#cda661] text-[10px] uppercase tracking-widest mb-1">Residência CM</p>
              <h4 className="font-serif text-2xl text-white">Estruturado Carvalho Pátina Branca</h4>
            </div>
          </motion.div>

          {/* Obra 2 - Estreita (Direita) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative rounded-sm overflow-hidden group"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop')" }} />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
            <div className="absolute bottom-8 left-8">
              <p className="text-[#cda661] text-[10px] uppercase tracking-widest mb-1">Residência RF</p>
              <h4 className="font-serif text-2xl text-white">Estruturado Reale Carvalho</h4>
            </div>
          </motion.div>

          {/* Obra 3 - Larga inferior */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="md:col-span-12 relative rounded-sm overflow-hidden group"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop')" }} />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
            <div className="absolute bottom-8 left-8">
              <p className="text-[#cda661] text-[10px] uppercase tracking-widest mb-1">Projeto Corporativo</p>
              <h4 className="font-serif text-2xl text-white">Painel Ripado & Deck Cumaru</h4>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER E CTA FINAL */}
      <section className="py-32 px-8 flex flex-col items-center justify-center text-center border-t border-white/5 bg-[#080706]">
        <div className="max-w-2xl mx-auto space-y-8 mb-24">
          <Mail className="w-8 h-8 text-[#cda661] mx-auto opacity-50" />
          <h3 className="font-serif text-3xl text-white">Inspiração no seu e-mail.</h3>
          <p className="text-white/50 text-sm font-light">Assine a newsletter da Formighieri para receber tendências de arquitetura e novidades sobre pisos nobres.</p>
          <form className="flex w-full mt-4 border-b border-white/20 focus-within:border-[#cda661] transition-colors pb-2">
            <input type="email" placeholder="SEU E-MAIL" className="bg-transparent w-full outline-none text-xs tracking-widest uppercase text-white placeholder:text-white/20" />
            <button type="button" className="text-[#cda661] text-xs uppercase tracking-widest hover:text-white transition">Assinar</button>
          </form>
        </div>

        <span className="text-[#cda661] text-xs uppercase tracking-[0.4em] mb-6 block">Inicie sua Obra</span>
        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-[7vw] text-white/50 group-hover:text-white transition-colors duration-700 cursor-pointer flex items-center justify-center gap-4 sm:gap-8">
            Fale Conosco
            <ArrowRight className="w-12 h-12 sm:w-16 sm:h-16 text-[#cda661] transform -rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700" />
          </h2>
        </a>
      </section>
      
    </main>
  );
}
