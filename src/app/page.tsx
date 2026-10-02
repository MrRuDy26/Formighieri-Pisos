"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Play } from "lucide-react";

export default function Home() {
  // Controle de Scroll Avançado para Parallax
  const { scrollYProgress } = useScroll();
  
  // O fundo rola mais devagar que o usuário (Efeito Parallax Awwwards)
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // O texto do Hero desaparece e sobe conforme você rola para baixo
  const yText = useTransform(scrollYProgress, [0, 0.5], ["0%", "-30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [activeTab, setActiveTab] = useState(0);

  const collections = [
    {
      title: "Estruturados",
      subtitle: "Estabilidade Centenária",
      img: "https://images.unsplash.com/photo-1546215367-72caede26d96?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Decks Exteriores",
      subtitle: "Resistência ao Clima",
      img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Painéis e Versailles",
      subtitle: "Geometria Clássica",
      img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  return (
    // Fundo unificado e escuro absoluto para não haver NENHUMA linha de corte
    <main className="bg-[#0A0908] text-[#EAE6DF] font-sans overflow-x-hidden selection:bg-[#B58D3D] selection:text-[#0A0908]">
      
      {/* NAVBAR MINIMALISTA (Sem fundos pesados, apenas blur sutil no scroll) */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Curva de animação premium (Expo Out)
        className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between mix-blend-difference"
      >
        <div className="font-serif text-xl tracking-[0.4em] text-white uppercase font-bold">
          Formighieri
        </div>
        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-[#B58D3D] transition-colors duration-500"
        >
          <span>Falar com Especialista</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.nav>

      {/* HERO SECTION - TELA CHEIA VERDADEIRA (Sem cortes) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Imagem de Fundo com Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop')`,
            y: yBackground 
          }}
        />
        {/* Overlay em Gradiente Perfeito: Funde a imagem com a cor sólida da próxima seção (#0A0908) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/30 via-[#0A0908]/60 to-[#0A0908]" />

        {/* Tipografia Gigante e Imersiva */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 flex flex-col items-center text-center mt-20 px-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="font-serif text-[12vw] sm:text-[8vw] leading-[0.85] tracking-tighter text-white">
              A Arte da <br /> <span className="italic text-[#B58D3D] pr-4">Madeira.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-8 text-white/60 text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] max-w-xl"
          >
            Design de alto padrão em Curitiba desde 1950.
          </motion.p>
        </motion.div>
      </section>

      {/* SEÇÃO DE TEXTO REVEAL (Efeito editorial onde o texto entra no scroll) */}
      <section className="relative py-32 sm:py-48 px-8 max-w-7xl mx-auto flex items-center justify-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-center leading-[1.3] text-[#EAE6DF]"
        >
          Não somos apenas fornecedores. <br />
          <span className="text-white/30">
            Somos parceiros históricos da CASACOR e a escolha dos maiores escritórios de arquitetura.
          </span>
        </motion.h2>
      </section>

      {/* VITRINE CINEMÁTICA (Imagens gigantes que mudam no clique com fade elegante) */}
      <section className="relative py-20 px-4 sm:px-8 max-w-[1400px] mx-auto min-h-[900px] flex flex-col justify-between">
        
        {/* Navegação da Vitrine */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 z-20 relative gap-8">
          <div>
            <span className="text-[#B58D3D] text-[10px] uppercase tracking-[0.3em] mb-4 block">Portfólio</span>
            <h3 className="font-serif text-4xl sm:text-5xl">Coleções Nobres</h3>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {collections.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="group flex items-center gap-3 focus:outline-none"
              >
                <span className={`text-xs uppercase tracking-widest transition-colors duration-500 ${activeTab === index ? 'text-[#B58D3D]' : 'text-white/40 group-hover:text-white'}`}>
                  {item.title}
                </span>
                {activeTab === index && (
                  <motion.div layoutId="dot" className="w-1.5 h-1.5 rounded-full bg-[#B58D3D]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Imagem Gigante com transição crossfade (Framer Motion AnimatePresence) */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-none overflow-hidden bg-[#110f0e]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${collections[activeTab].img}')` }}
              />
              {/* Degradê para garantir leitura do texto por cima da imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-80" />
            </motion.div>
          </AnimatePresence>

          {/* Textos flutuantes sobre a imagem */}
          <div className="absolute bottom-10 left-8 sm:left-12 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="font-serif text-3xl sm:text-5xl text-white">{collections[activeTab].title}</p>
                <p className="text-white/60 text-xs uppercase tracking-[0.2em] mt-3">{collections[activeTab].subtitle}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* RODAPÉ GIGANTE / CALL TO ACTION (Estilo Studio Freight/Awwwards) */}
      <section className="py-40 px-8 flex flex-col items-center justify-center text-center">
        <span className="text-[#B58D3D] text-xs uppercase tracking-[0.4em] mb-8 block">Inicie seu Projeto</span>
        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-[8vw] text-white/50 group-hover:text-white transition-colors duration-700 cursor-pointer flex items-center justify-center gap-4 sm:gap-8">
            Fale Conosco
            <ArrowRight className="w-12 h-12 sm:w-20 sm:h-20 text-[#B58D3D] transform -rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700" />
          </h2>
        </a>
      </section>
      
    </main>
  );
}
