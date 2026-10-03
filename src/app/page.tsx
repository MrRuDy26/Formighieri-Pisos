"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Compass, ShieldCheck, Award, Phone, MapPin, Facebook, Youtube, Instagram, MessageCircle, Menu, X } from "lucide-react";
import Lenis from '@studio-freight/lenis';

export default function Home() {
  const [hoveredCategory, setHoveredCategory] = useState(0);
  const [scrollDir, setScrollDir] = useState<"down" | "up">("down");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Monitora a direção exata da rolagem (descendo ou subindo)
  useEffect(() => {
    let lastY = window.scrollY;
    const updateScrollDir = () => {
      const currentY = window.scrollY;
      if (currentY > lastY + 2) {
        setScrollDir("down");
      } else if (currentY < lastY - 2) {
        setScrollDir("up");
      }
      lastY = currentY > 0 ? currentY : 0;
    };
    window.addEventListener("scroll", updateScrollDir, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  const { scrollYProgress } = useScroll();
  
  const menuOpacity = useTransform(scrollYProgress, [0.03, 0.1], [0, 1]);
  const menuX = useTransform(scrollYProgress, [0.03, 0.1], [-30, 0]);
  const contentMargin = useTransform(scrollYProgress, [0.03, 0.1], ["0px", "160px"]);

  // Escala dinâmica do feixe laser lateral
  const scaleDown = useTransform(scrollYProgress, [0, 0.98], [0, 1]);
  const scaleUp = useTransform(scrollYProgress, [0.02, 1], [1, 0]);
  
  const beamScaleY = scrollDir === "down" ? scaleDown : scaleUp;
  const beamOpacity = useTransform(scrollYProgress, [0.01, 0.08, 0.92, 0.99], [0, 1, 1, 0]);

  // Cores dinâmicas para os itens do menu
  const link1Color = useTransform(scrollYProgress, [0, 0.15], ["rgba(255,255,255,0.7)", "#ffd700"]);
  const link2Color = useTransform(scrollYProgress, [0.1, 0.3], ["rgba(255,255,255,0.7)", "#ffd700"]);
  const link3Color = useTransform(scrollYProgress, [0.25, 0.45], ["rgba(255,215,0,0.9)", "#ffd700"]);
  const link4Color = useTransform(scrollYProgress, [0.4, 0.6], ["rgba(255,255,255,0.7)", "#ffd700"]);
  const link5Color = useTransform(scrollYProgress, [0.55, 0.75], ["rgba(255,255,255,0.7)", "#ffd700"]);
  const link6Color = useTransform(scrollYProgress, [0.7, 0.9], ["rgba(255,255,255,0.7)", "#ffd700"]);
  const link7Color = useTransform(scrollYProgress, [0.85, 1], ["rgba(255,255,255,0.7)", "#ffd700"]);

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
    <main className="bg-[#0c0a09] text-[#EAE6DF] font-sans overflow-x-hidden selection:bg-[#ffd700] selection:text-[#0c0a09] relative flex flex-col lg:flex-row">
      
      {/* BOTÃO FLUTUANTE WHATSAPP FIXO */}
      <a 
        href="https://wa.me/5541998050400" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>

      {/* HEADER MOBILE (Aparece apenas em telas pequenas) */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-[#0c0a09]/95 backdrop-blur-md z-50 px-6 flex items-center justify-between border-b border-white/10">
        <a href="#" className="relative block w-24 h-8">
          <Image src="/logo.png" alt="Formighieri" fill style={{ objectFit: "contain" }} />
        </a>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none p-2"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#ffd700]" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* MENU MOBILE EXPANSÍVEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-16 z-40 bg-[#0c0a09]/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-6 p-8"
          >
            <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-[#ffd700]">Produtos</a>
            <a href="#promocao" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-[#ffd700]">Promoção</a>
            <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-[#ffd700]">Diferenciais</a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-[#ffd700]">Serviços</a>
            <a href="#obras" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-[#ffd700]">Obras</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-[#ffd700]">Blog</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-[#ffd700]">Contato</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MENU LATERAL CINEMÁTICO (Desktop) */}
      <motion.nav 
        style={{ opacity: menuOpacity, x: menuX }}
        className="hidden lg:flex fixed top-0 left-0 h-screen w-32 xl:w-40 z-50 bg-[#0c0a09]/95 backdrop-blur-sm flex-col items-center justify-between py-6 pointer-events-auto"
      >
        {/* Feixe Laser com Origem Dinâmica Baseada no Sentido Exato do Scroll */}
        <div className="absolute top-0 right-0 w-[2px] h-full overflow-hidden bg-white/5 pointer-events-none">
          <motion.div 
            style={{ 
              scaleY: beamScaleY, 
              opacity: beamOpacity,
              transformOrigin: scrollDir === "down" ? "top" : "bottom"
            }}
            className="absolute inset-0 w-full bg-gradient-to-b from-[#ffd700] via-[#f3ba4f] to-[#ffd700] shadow-[0_0_20px_#ffd700]"
          />
        </div>

        {/* Logo Reduzida */}
        <a href="#" className="relative block w-20 h-10 xl:w-28 xl:h-12 mt-1">
           <Image src="/logo.png" alt="Formighieri" fill style={{ objectFit: "contain" }} />
        </a>

        {/* Links com Mudança de Cor Dinâmica ao Longo do Scroll */}
        <div className="flex flex-col items-center space-y-4 flex-grow justify-center w-full my-2">
          <motion.a href="#produtos" style={{ color: link1Color }} className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] hover:text-[#ffd700] transition-colors duration-300 font-medium">Produtos</motion.a>
          <motion.a href="#promocao" style={{ color: link2Color }} className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] hover:text-[#ffd700] transition-colors duration-300 font-medium">Promoção</motion.a>
          <motion.a href="#diferenciais" style={{ color: link3Color }} className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] hover:text-[#ffd700] transition-colors duration-300 font-medium">Diferenciais</motion.a>
          <motion.a href="#servicos" style={{ color: link4Color }} className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] hover:text-[#ffd700] transition-colors duration-300 font-medium">Serviços</motion.a>
          <motion.a href="#obras" style={{ color: link5Color }} className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] hover:text-[#ffd700] transition-colors duration-300 font-medium">Obras</motion.a>
          <motion.a href="#blog" style={{ color: link6Color }} className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] hover:text-[#ffd700] transition-colors duration-300 font-medium">Blog</motion.a>
          <motion.a href="#contato" style={{ color: link7Color }} className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] hover:text-[#ffd700] transition-colors duration-300 font-medium">Contato</motion.a>
        </div>

        {/* Ícone de Contato E-mail / WhatsApp */}
        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ffd700] hover:border-[#ffd700] hover:text-[#0c0a09] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all duration-300 text-white mb-1"
        >
          <Mail className="w-3.5 h-3.5" />
        </a>
      </motion.nav>

      {/* CONTEÚDO PRINCIPAL */}
      <motion.div 
        style={{ marginLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 ? contentMargin : "0px" }} 
        className="w-full mt-16 lg:mt-0"
      >
        
        {/* HERO SECTION */}
        <section className="relative h-[calc(100vh-4rem)] lg:h-screen w-full overflow-hidden flex items-center justify-center">
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
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative h-20 w-56 sm:h-32 sm:w-96 mb-8 drop-shadow-[0_0_20px_rgba(255,215,0,0.2)]"
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
              <h1 className="font-serif text-[10vw] sm:text-[6vw] lg:text-7xl leading-[1.1] tracking-tighter text-white">
                75 Anos de <span className="italic text-[#ffd700] drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">Madeira.</span>
              </h1>
              <p className="mt-6 sm:mt-8 text-white/80 text-[10px] sm:text-sm lg:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium px-4">
                Design de alto padrão, painéis e decks em Curitiba.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* CATÁLOGO TIPOGRÁFICO INTERATIVO */}
        <section id="produtos" className="relative py-20 sm:py-32 px-6 sm:px-16 max-w-[1400px] mx-auto min-h-screen">
          <div className="mb-16 sm:mb-24 border-b border-white/10 pb-6 sm:pb-8">
            <span className="text-[#ffd700] text-xs uppercase tracking-[0.4em] mb-4 block font-semibold drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">Portfólio Completo</span>
            <h2 className="font-serif text-4xl sm:text-7xl text-white">Nosso Catálogo</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative">
            <div className="lg:col-span-7 flex flex-col w-full z-10 space-y-4">
              {fullCatalog.map((cat, idx) => (
                <div 
                  key={idx} 
                  className="group py-6 sm:py-12 cursor-default border-b border-white/5 last:border-0"
                  onMouseEnter={() => setHoveredCategory(idx)}
                  onClick={() => setHoveredCategory(idx)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12 transition-all duration-500">
                    <h3 className={`font-serif text-3xl sm:text-5xl transition-colors duration-500 w-full lg:w-1/2 ${hoveredCategory === idx ? 'text-[#ffd700] drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]' : 'text-white'}`}>
                      {cat.category}
                    </h3>
                    <div className="w-full lg:w-1/2 mt-2 lg:mt-0">
                      <ul className="flex flex-col gap-3 sm:gap-4">
                        {cat.items.map((item, i) => (
                          <li key={i} className="text-white/75 text-sm sm:text-base font-light tracking-wide hover:text-[#ffd700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] transition-all duration-300 flex items-center gap-3 cursor-pointer">
                            <span className="w-1.5 h-1.5 bg-[#ffd700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_6px_#ffd700]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Imagem do Catálogo (Oculta no mobile pequeno, visível no desktop) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-32 h-[75vh] w-full rounded-sm overflow-hidden bg-[#110f0e] shadow-2xl border border-white/5">
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
        <section id="diferenciais" className="py-20 sm:py-24 px-6 sm:px-16 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-4 sm:space-y-6 group">
              <Compass className="w-10 h-10 text-[#ffd700] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-transform duration-300" />
              <h3 className="font-serif text-2xl sm:text-3xl text-white">Consultoria Técnica</h3>
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">Suporte especializado para escritórios de arquitetura, desde a paginação até a entrega final.</p>
            </div>
            <div className="space-y-4 sm:space-y-6 group">
              <ShieldCheck className="w-10 h-10 text-[#ffd700] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-transform duration-300" />
              <h3 className="font-serif text-2xl sm:text-3xl text-white">Mão de Obra Própria</h3>
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">Instalação e revitalização feitas por uma equipe própria com maquinário de alta precisão.</p>
            </div>
            <div className="space-y-4 sm:space-y-6 group">
              <Award className="w-10 h-10 text-[#ffd700] group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-transform duration-300" />
              <h3 className="font-serif text-2xl sm:text-3xl text-white">Garantia Histórica</h3>
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">A segurança de uma empresa com sete décadas de tradição operando na capital paranaense.</p>
            </div>
          </div>
        </section>

        {/* MOSAICO DE OBRAS */}
        <section id="obras" className="py-20 sm:py-32 px-6 sm:px-16 max-w-[1400px] mx-auto bg-[#0c0a09]">
          <div className="text-center mb-16 sm:mb-24 border-b border-white/10 pb-8 sm:pb-12">
            <span className="text-[#ffd700] text-xs uppercase tracking-[0.4em] mb-4 block font-semibold drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">Obras Executadas</span>
            <h2 className="font-serif text-4xl sm:text-6xl text-white">Onde a madeira ganha vida.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px] sm:auto-rows-[500px]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1 }}
              className="md:col-span-7 relative rounded-sm overflow-hidden group cursor-pointer border border-white/5"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                <p className="text-[#ffd700] text-xs uppercase tracking-[0.2em] font-medium mb-2 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">Residência CM</p>
                <h4 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#ffd700] group-hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)] transition-all duration-300">Carvalho Pátina Branca</h4>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:col-span-5 relative rounded-sm overflow-hidden group cursor-pointer border border-white/5"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                <p className="text-[#ffd700] text-xs uppercase tracking-[0.2em] font-medium mb-2 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">Residência RF</p>
                <h4 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#ffd700] group-hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)] transition-all duration-300">Reale Carvalho</h4>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA & CONTATO FINAL */}
        <section id="contato" className="py-24 sm:py-32 px-6 flex flex-col items-center justify-center text-center border-t border-white/5 bg-[#080706]">
          <span className="text-[#ffd700] text-xs uppercase tracking-[0.4em] mb-6 block font-semibold drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">Inicie seu Projeto</span>
          <a 
            href="https://wa.me/5541998050400" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-block mb-16 sm:mb-20"
          >
            <h2 className="font-serif text-4xl sm:text-7xl lg:text-[7vw] text-white/50 group-hover:text-[#ffd700] group-hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-700 cursor-pointer flex items-center justify-center gap-4 sm:gap-6">
              Fale Conosco
              <ArrowRight className="w-8 h-8 sm:w-20 sm:h-20 text-[#ffd700] transform -rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] transition-all duration-700" />
            </h2>
          </a>

          {/* RODAPÉ DETALHADO */}
          <div className="w-full max-w-6xl border-t border-white/10 pt-12 sm:pt-16 pb-8 flex flex-col items-center space-y-8">
            
            {/* Redes Sociais */}
            <div className="flex items-center space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#ffd700] hover:border-[#ffd700] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#ffd700] hover:border-[#ffd700] transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#ffd700] hover:border-[#ffd700] transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Telefones e Endereço */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-white/70 font-light text-center">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffd700]" />
                <span>(41) 3342-3838 / (41) 99805-0400</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ffd700]" />
                <span>Rua André Zanetti, 315 – Mercês, Curitiba – PR</span>
              </div>
            </div>

            {/* Copyright e Assinatura Unificados e Centralizados (Estilo Nagato) */}
            <div className="w-full border-t border-white/5 pt-8 flex items-center justify-center text-[10px] sm:text-[11px] text-[#ffd700]/70 tracking-wider font-light px-4 text-center">
              <a 
                href="https://mauricio-roberto-rudy.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#ffd700] transition-colors duration-300"
              >
                © 2026 FORMIGHIERI PISOS DE MADEIRA. TODOS OS DIREITOS RESERVADOS | ESTRATÉGIA POR MAURICIO RUDY
              </a>
            </div>

          </div>
        </section>

      </motion.div>
    </main>
  );
}
