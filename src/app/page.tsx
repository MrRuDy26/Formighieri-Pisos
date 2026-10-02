"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Award, Hammer, Compass, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-wood-dark text-wood-light selection:bg-wood-accent selection:text-wood-dark overflow-x-hidden">
      
      {/* 1. NAVBAR FIXA COM BLUR */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-wood-dark/80 backdrop-blur-md border-b border-white/10 px-6 lg:px-16 py-5 flex items-center justify-between"
      >
        <div className="font-serif text-xl tracking-[0.25em] text-wood-accent font-semibold">
          FORMIGHIERI
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.2em] text-white/70">
          <a href="#colecoes" className="hover:text-wood-accent transition duration-300">Coleções</a>
          <a href="#tradicao" className="hover:text-wood-accent transition duration-300">Tradição & CASACOR</a>
          <a href="#servicos" className="hover:text-wood-accent transition duration-300">Serviços</a>
        </div>

        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 bg-wood-accent text-wood-dark px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium overflow-hidden transition-all duration-300 hover:bg-white"
        >
          <span>Orçamento Rápido</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.nav>

      {/* 2. HERO SECTION IMERSIVA COM PARALLAX SUTIL */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-wood-dark/50 to-wood-dark z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-35"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop')` }}
        />

        <div className="relative z-20 max-w-5xl mx-auto space-y-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-wood-accent text-xs uppercase tracking-[0.4em] font-semibold bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              Curitiba • Mais de 70 Anos de Excelência em Pisos Nobres
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-white tracking-tight"
          >
            A atemporalidade da madeira <br />
            <span className="italic font-light text-wood-accent">e o design de alto padrão.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Especialistas em pisos estruturados, maciços, decks e painéis para projetos arquitetônicos exclusivos na capital e litoral paranaense.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a 
              href="#colecoes" 
              className="w-full sm:w-auto border border-wood-accent/80 text-wood-accent px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-wood-accent hover:text-wood-dark transition duration-300 shadow-xl"
            >
              Explorar Coleções
            </a>
            <a 
              href="https://wa.me/5541998050400"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition duration-300 backdrop-blur-sm"
            >
              Falar com Consultor
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. SEÇÃO DE AUTORIDADE / HISTÓRIA (REVELAÇÃO POR SCROLL) */}
      <section id="tradicao" className="py-28 px-6 lg:px-16 bg-wood-card/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-wood-accent text-xs uppercase tracking-[0.3em] font-semibold">Tradição & Requinte</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
              A escolha dos grandes arquitetos de Curitiba.
            </h2>
            <p className="text-white/70 leading-relaxed font-light text-base md:text-lg">
              Há sete décadas unindo a beleza incomparável da madeira nobre às tendências contemporâneas de arquitetura e design de interiores. Nossa presença constante nas principais edições da <strong className="text-white font-medium">CASACOR Paraná</strong> chancela o nosso compromisso com a perfeição estética e técnica.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div>
                <span className="block font-serif text-4xl text-wood-accent">+70</span>
                <span className="text-xs text-white/50 uppercase tracking-widest mt-1 block">Anos de Tradição</span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-wood-accent">CASACOR</span>
                <span className="text-xs text-white/50 uppercase tracking-widest mt-1 block">Parceiro Histórico</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs text-wood-accent uppercase tracking-widest font-medium">Ambiente Exclusivo</span>
              <p className="font-serif text-xl text-white mt-1">Piso Estruturado Carvalho Europeu</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. VITRINE DE PRODUTOS / COLEÇÕES */}
      <section id="colecoes" className="py-28 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-wood-accent text-xs uppercase tracking-[0.3em] font-semibold">Portfólio Nobre</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white">Coleções Exclusivas</h2>
          <p className="text-white/60 font-light">Soluções completas em madeira com acabamentos de altíssimo padrão para projetos residenciais e corporativos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Pisos Estruturados & Maciços",
              desc: "Estabilidade superior, elegância clássica e toque aconchegante para ambientes sofisticados.",
              img: "https://images.unsplash.com/photo-1546215367-72caede26d96?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "Decks e Painéis Ripados",
              desc: "Madeiras selecionadas para áreas externas e painéis arquitetônicos de destaque.",
              img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "Linha Versailles & Rústicos",
              desc: "Geometrias artísticas tradicionais e acabamentos com personalidade única.",
              img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"
            },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-wood-card flex flex-col justify-end p-8"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-wood-dark/40 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">{item.desc}</p>
                <div className="pt-2">
                  <a 
                    href="https://wa.me/5541998050400" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-wood-accent text-xs uppercase tracking-widest font-semibold group-hover:text-white transition"
                  >
                    <span>Consultar Especificações</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. DIFERENCIAIS DE ATENDIMENTO */}
      <section id="servicos" className="py-24 px-6 lg:px-16 bg-wood-card/30 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/5">
            <Compass className="w-8 h-8 text-wood-accent" />
            <h3 className="font-serif text-xl text-white">Atendimento Técnico</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">Suporte especializado para arquitetos e especificadores em todas as etapas da obra.</p>
          </div>
          <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/5">
            <Hammer className="w-8 h-8 text-wood-accent" />
            <h3 className="font-serif text-xl text-white">Instalação & Revitalização</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">Equipe própria altamente capacitada e maquinário de ponta para um acabamento impecável.</p>
          </div>
          <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/5">
            <ShieldCheck className="w-8 h-8 text-wood-accent" />
            <h3 className="font-serif text-xl text-white">Garantia e Tradição</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">Segurança e durabilidade comprovadas em milhares de residências em Curitiba e região.</p>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ SOFISTICADO */}
      <footer className="py-16 px-6 lg:px-16 border-t border-white/10 bg-black/40 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <div className="font-serif text-xl tracking-[0.25em] text-wood-accent">FORMIGHIERI</div>
            <p className="text-white/50 text-xs tracking-wider">Rua André Zanetti, 315 - Mercês • Curitiba, PR</p>
          </div>
          <div className="text-white/60 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Formighieri Pisos • Todos os direitos reservados
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a 
        href="https://wa.me/5541998050400" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#22bf5b] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 duration-300"
        title="Fale Conosco via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

    </main>
  );
}
