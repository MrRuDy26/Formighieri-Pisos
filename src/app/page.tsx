"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Compass, ShieldCheck, Award } from "lucide-react";
import Lenis from '@studio-freight/lenis';

export default function Home() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(0);

  // Inicializa o Scroll Suave (Lenis)
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

  // Monitora a rolagem para ativar o Menu Lateral
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange((latest) => {
      // Se rolou mais de 80% da altura da tela, ativa o menu lateral
      if (latest > window.innerHeight * 0.8) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    });
  }, [scrollY]);

  // Efeitos de Parallax no Hero
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yHeroText = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

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
      items: ["Piso Vinílico", "Kit de Limpeza para Piso"],
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <main className="bg-[#0c0a09] text-[#EAE6DF] font-sans overflow-hidden selection:bg-[#cda661] selection:text-[#0c0a09] relative flex">
      
      {/* MENU LATERAL VERTICAL (Aparece apenas após o Hero) */}
      <AnimatePresence>
        {isScrolledPastHero && (
          <motion.nav 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 h-screen w-24 lg:w-32 z-50 bg-[#0c0a09] border-r border-white/10 flex flex-col items-center justify-between py-10"
          >
            {/* Logo Reduzida no Menu Lateral */}
            <a href="#" className="relative block w-14 h-14 lg:w-16 lg:h-16 transform -rotate-90 origin-center mt-8">
               <Image 
                src="/logo.png" 
                alt="Formighieri"
                fill
                style={{ objectFit: "contain" }}
              />
            </a>

            {/* Links Verticais */}
            <div className="flex flex-col items-center space-y-16 lg:space-y-20 flex-grow justify-center mt-12">
              <a href="#produtos" className="transform -rotate-90 text-[11px] lg:text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition whitespace-nowrap">Produtos</a>
              <a href="#obras" className="transform -rotate-90 text-[11px] lg:text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition whitespace-nowrap">Obras</a>
              <a href="#diferenciais" className="transform -rotate-90 text-[11px] lg:text-xs uppercase tracking-[0.2em] text-white/60 hover:text-[#cda661] transition whitespace-nowrap">Diferenciais</a>
            </div>

            {/* Ícone de Contato */}
            <a 
              href="https://wa.me/5541998050400" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#cda661] hover:border-[#cda661] hover:text-[#0c0a09] transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* CONTEÚDO PRINCIPAL (Ganha margem esquerda quando o menu vertical está ativo) */}
      <div className={`w-full transition-all duration-700 ease-in-out ${isScrolledPastHero ? 'ml-24 lg:ml-32' : 'ml-0'}`}>
        
        {/* HERO SECTION COM A LOGO GIGANTE E CENTRALIZADA */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop')`,
              y: yBackground 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/50 via-[#0c0a09]/60 to-[#0c0a09]" />

          <motion.div 
            style={{ y: yHeroText, opacity: opacityHero }}
            className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl"
          >
            {/* Logo Gigante no Centro */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative h-20 w-64 sm:h-32 sm:w-96 mb-8"
            >
              <Image 
                src="/logo.png" 
                alt="Formighieri Pisos de Madeira"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                priority
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <h1 className="font-serif text-[8vw] sm:text-[6vw] lg:text-7xl leading-[1.1] tracking-tighter text-white">
                75 Anos de <span className="italic text-[#cda661]">Madeira.</span>
              </h1>
              <p className="mt-8 text-white/70 text-xs sm:text-sm lg:text-base uppercase tracking-[0.4em] font-medium">
                Design de alto padrão, painéis e decks em Curitiba.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* CATÁLOGO TIPOGRÁFICO INTERATIVO */}
        <section id="produtos" className="relative py-32 px-8 sm:px-16 max-w-[1400px] mx-auto min-h-screen">
          <div className="mb-24 border-b border-white/10 pb-8">
            <span className="text-[#cda661] text-xs uppercase tracking-[0.4em] mb-4 block font-semibold">Portfólio Completo</span>
            <h2 className="font-serif text-5xl sm:text-7xl text-white">Nosso Catálogo</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
            <div className="lg:col-span-7 flex flex-col w-full z-10 space-y-4">
              {fullCatalog.map((cat, idx) => (
                <div 
                  key={idx} 
                  className="group py-8 lg:py-12 cursor-default border-b border-white/5 last:border-0"
                  onMouseEnter={() => setHoveredCategory(idx)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12 transition-all duration-500">
                    <h3 className={`font-serif text-4xl sm:text-5xl transition-colors duration-500 w-full lg:w-1/2 ${hoveredCategory === idx ? 'text-[#cda661]' : 'text-white'}`}>
                      {cat.category}
                    </h3>
                    <div className="w-full lg:w-1/2 mt-2 lg:mt-0">
                      <ul className="flex flex-col gap-4">
                        {cat.items.map((item, i) => (
                          <li key={i} className="text-white/70 text-sm lg:text-base font-light tracking-wide hover:text-white transition-colors flex items-center gap-3 cursor-pointer">
                            <span className="w-1.5 h-1.5 bg-[#cda661] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block lg:col-span-5 sticky top-32 h-[75vh] w-full rounded-sm overflow-hidden bg-[#110f0e] shadow-2xl">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-white font-serif text-3xl drop-shadow-xl">
                  {fullCatalog[hoveredCategory].category}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS DA MARCA */}
        <section id="diferenciais" className="py-24 px-8 sm:px-16 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-6">
              <Compass className="w-10 h-10 text-[#cda661]" />
              <h3 className="font-serif text-3xl text-white">Consultoria Técnica</h3>
              <p className="text-white/60 text-base font-light leading-relaxed">Suporte especializado para escritórios de arquitetura, desde a paginação até a entrega final.</p>
            </div>
            <div className="space-y-6">
              <ShieldCheck className="w-10 h-10 text-[#cda661]" />
              <h3 className="font-serif text-3xl text-white">Mão de Obra Própria</h3>
              <p className="text-white/60 text-base font-light leading-relaxed">Instalação e revitalização feitas por uma equipe própria com maquinário de alta precisão.</p>
            </div>
            <div className="space-y-6">
              <Award className="w-10 h-10 text-[#cda661]" />
              <h3 className="font-serif text-3xl text-white">Garantia Histórica</h3>
              <p className="text-white/60 text-base font-light leading-relaxed">A segurança de uma empresa com sete décadas de tradição operando na capital paranaense.</p>
            </div>
          </div>
        </section>

        {/* MOSAICO DE OBRAS */}
        <section id="obras" className="py-32 px-8 sm:px-16 max-w-[1400px] mx-auto bg-[#0c0a09]">
          <div className="text-center mb-24 border-b border-white/10 pb-12">
            <span className="text-[#cda661] text-xs uppercase tracking-[0.4em] mb-4 block font-semibold">Obras Executadas</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-white">Onde a madeira ganha vida.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px] sm:auto-rows-[500px]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1 }}
              className="md:col-span-7 relative rounded-sm overflow-hidden group"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute bottom-10 left-10">
                <p className="text-[#cda661] text-xs uppercase tracking-[0.2em] font-medium mb-2">Residência CM</p>
                <h4 className="font-serif text-3xl text-white">Carvalho Pátina Branca</h4>
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
              <div className="absolute bottom-10 left-10">
                <p className="text-[#cda661] text-xs uppercase tracking-[0.2em] font-medium mb-2">Residência RF</p>
                <h4 className="font-serif text-3xl text-white">Reale Carvalho</h4>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-40 px-8 flex flex-col items-center justify-center text-center border-t border-white/5 bg-[#080706]">
          <span className="text-[#cda661] text-xs uppercase tracking-[0.4em] mb-8 block font-semibold">Inicie seu Projeto</span>
          <a 
            href="https://wa.me/5541998050400" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-block"
          >
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-[7vw] text-white/50 group-hover:text-white transition-colors duration-700 cursor-pointer flex items-center justify-center gap-6">
              Fale Conosco
              <ArrowRight className="w-12 h-12 sm:w-20 sm:h-20 text-[#cda661] transform -rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700" />
            </h2>
          </a>
        </section>

      </div>
    </main>
  );
}
