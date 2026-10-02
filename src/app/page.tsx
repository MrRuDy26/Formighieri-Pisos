"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Importação do componente de imagem do Next.js
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  // O catálogo real, estruturado de forma inteligente
  const fullCatalog = [
    {
      category: "Pisos de Madeira",
      items: ["Estruturado", "Maciço", "Multilaminado", "Multistrato", "Parquet", "Rústico", "Taco", "Taco Palito", "Versailles"],
      img: "https://images.unsplash.com/photo-1546215367-72caede26d96?q=80&w=1200&auto=format&fit=crop"
    },
    {
      category: "Áreas Externas",
      items: ["Deck de Madeira", "Deck Ecológico", "Deck Ripado", "Pergolado de Madeira"],
      img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop"
    },
    {
      category: "Painéis & Acabamentos",
      items: ["Painel Ripado", "Brise", "Rodapé e Acabamento", "Escadas"],
      img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1200&auto=format&fit=crop"
    },
    {
      category: "Soluções Práticas",
      items: ["Piso Vinílico", "Kit de Limpeza para Piso de Madeira"],
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const [hoveredCategory, setHoveredCategory] = useState(0);

  return (
    <main className="bg-[#0c0a09] text-[#EAE6DF] font-sans overflow-hidden selection:bg-[#cda661] selection:text-[#0c0a09]">
      
{/* NAVBAR IMERSIVA (Sem fundo, flutua sobre a imagem e sobe no scroll) */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-full z-50 px-6 sm:px-12 py-8 flex items-center justify-between"
      >
        {/* LOGO OFICIAL - TAMANHO IDEAL PRESERVADO */}
        <a href="#" className="relative block h-12 w-48 md:h-16 md:w-64">
          <Image 
            src="/logo.png" /* Mude para .svg se for vetor */
            alt="Formighieri Pisos de Madeira"
            fill
            style={{ objectFit: "contain", objectPosition: "left" }}
            priority
          />
        </a>
        
        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium drop-shadow-md">
          <a href="#produtos" className="hover:text-white transition">Produtos</a>
          <a href="#promocao" className="hover:text-[#cda661] transition">Promoção</a>
          <a href="#diferenciais" className="hover:text-white transition">Diferenciais</a>
          <a href="#obras" className="hover:text-white transition">Obras Realizadas</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
        </div>

        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-white hover:text-[#cda661] transition-colors duration-500 drop-shadow-md"
        >
          <span>Contato</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.nav>
      
      {/* HERO PARALLAX */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop')`,
            y: yBackground 
          }}
        />
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

      {/* CATÁLOGO TIPOGRÁFICO INTERATIVO */}
      <section id="produtos" className="relative py-32 px-6 sm:px-12 max-w-[1400px] mx-auto min-h-screen">
        <div className="mb-20">
          <span className="text-[#cda661] text-[10px] uppercase tracking-[0.3em] mb-4 block">Portfólio Completo</span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white">Nosso Catálogo</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          <div className="lg:col-span-7 flex flex-col w-full z-10">
            {fullCatalog.map((cat, idx) => (
              <div 
                key={idx} 
                className="group border-t border-white/10 py-12 cursor-default"
                onMouseEnter={() => setHoveredCategory(idx)}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-all duration-500">
                  <h3 className={`font-serif text-3xl sm:text-4xl transition-colors duration-500 w-full md:w-1/2 ${hoveredCategory === idx ? 'text-[#cda661]' : 'text-white'}`}>
                    {cat.category}
                  </h3>
                  <div className="w-full md:w-1/2">
                    <ul className="flex flex-col gap-3">
                      {cat.items.map((item, i) => (
                        <li key={i} className="text-white/60 text-sm font-light uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                          <span className="w-1 h-1 bg-[#cda661] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10 w-full"></div>
          </div>

          <div className="hidden lg:block lg:col-span-5 sticky top-32 h-[70vh] w-full rounded-sm overflow-hidden bg-[#110f0e]">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredCategory}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${fullCatalog[hoveredCategory].img}')` }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20" />
            
            <div className="absolute bottom-8 left-8">
              <p className="text-white font-serif text-2xl drop-shadow-lg">
                Linha {fullCatalog[hoveredCategory].category.split(" ")[0]}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* MOSAICO DE OBRAS */}
      <section id="obras" className="py-32 px-4 sm:px-8 max-w-[1400px] mx-auto bg-[#0c0a09]">
        <div className="text-center mb-24">
          <span className="text-[#cda661] text-[10px] uppercase tracking-[0.3em] mb-4 block">Obras Realizadas</span>
          <h2 className="font-serif text-4xl sm:text-5xl">Onde a madeira ganha vida.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 auto-rows-[300px] sm:auto-rows-[450px]">
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
        </div>
      </section>

      {/* NEWSLETTER / FOOTER */}
      <section className="py-32 px-8 flex flex-col items-center justify-center text-center border-t border-white/5 bg-[#080706]">
        <div className="max-w-2xl mx-auto space-y-8 mb-24">
          <Mail className="w-8 h-8 text-[#cda661] mx-auto opacity-50" />
          <h3 className="font-serif text-3xl text-white">Inspiração no seu e-mail.</h3>
          <p className="text-white/50 text-sm font-light">Assine a newsletter da Formighieri para receber tendências de arquitetura e novidades sobre os nossos produtos.</p>
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
