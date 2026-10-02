"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Award, Compass, MessageCircle, Sparkles, ChevronRight, Check } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const collections = [
    {
      title: "Pisos Estruturados & Maciços",
      subtitle: "Nobreza e estabilidade para projetos atemporais",
      desc: "Desenvolvidos com madeiras selecionadas de reflorestamento e manejo sustentável, nossos pisos estruturados e maciços oferecem isolamento térmico acústico superior e durabilidade centenária.",
      specs: ["Espessuras de 15mm a 20mm", "Acabamento em verniz UV ou óleo natural", "Garantia estendida Formighieri"],
      img: "https://images.unsplash.com/photo-1546215367-72caede26d96?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Decks para Áreas Externas",
      subtitle: "Resistência e sofisticação ao ar livre",
      desc: "Madeiras nobres exóticas (Cumaru, Itaúba e decks ecológicos) tratadas especificamente para resistir às intempéries do clima de Curitiba sem perder a elegância.",
      specs: ["Tratamento anti-mofo e UV", "Fixação invisível opcional", "Ideal para varandas, piscinas e varandas gourmet"],
      img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Painéis Ripados & Versailles",
      subtitle: "Geometria artística e revestimentos murais",
      desc: "Painéis ripados que conferem ritmo visual aos ambientes e o clássico piso Versailles, que remete aos palácios europeus com um encaixe milimetricamente perfeito.",
      specs: ["Design sob medida", "Integração perfeita com iluminação LED", "Execução artesanal especializada"],
      img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-[#12100E] text-[#F9F8F6] selection:bg-[#C5A059] selection:text-[#12100E] overflow-x-hidden font-sans">
      
      {/* 1. NAVBAR FIXA COM BLUR REFINADO */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-[#12100E]/85 backdrop-blur-xl border-b border-white/5 px-6 lg:px-16 py-5 flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <span className="font-serif text-xl tracking-[0.3em] text-[#C5A059] font-medium">
            FORMIGHIERI
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-white/40 border-l border-white/10 pl-3">
            Curitiba • Desde 1950
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.25em] text-white/70 font-light">
          <a href="#colecoes" className="hover:text-[#C5A059] transition duration-300">Coleções</a>
          <a href="#tradicao" className="hover:text-[#C5A059] transition duration-300">Tradição & CASACOR</a>
          <a href="#experiencia" className="hover:text-[#C5A059] transition duration-300">Serviços</a>
        </div>

        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-[#C5A059] text-[#12100E] px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[#C5A059]/10"
        >
          <span>Atendimento VIP</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.nav>

      {/* 2. HERO SECTION IMERSIVA LIMPA E IMPACTANTE */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100E]/40 via-[#12100E]/80 to-[#12100E] z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-30 transform transition-transform duration-1000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')` }}
        />

        <div className="relative z-20 max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[#C5A059] text-[11px] uppercase tracking-[0.4em] font-medium bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" /> Arquitetura & Decoração de Alto Padrão
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.12] text-white tracking-tight"
          >
            A atemporalidade da madeira <br />
            <span className="italic font-light text-[#C5A059]">em sua máxima expressão.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Tradição centenária unida ao rigor técnico para transformar residências e projetos corporativos em Curitiba e litoral.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#colecoes" 
              className="w-full sm:w-auto bg-[#C5A059] text-[#12100E] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition duration-300 shadow-xl"
            >
              Explorar Coleções Nobres
            </a>
            <a 
              href="https://wa.me/5541998050400"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition duration-300 backdrop-blur-md"
            >
              Falar com Especialista
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. SEÇÃO DE AUTORIDADE / CASACOR */}
      <section id="tradicao" className="py-32 px-6 lg:px-16 bg-[#161310] border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-semibold">Legado & Prestígio</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
              A escolha definitiva dos principais escritórios de Curitiba.
            </h2>
            <p className="text-white/70 leading-relaxed font-light text-base md:text-lg">
              Há décadas participando ativamente de mostras consagradas como a <strong className="text-white font-medium">CASACOR Paraná</strong>, a Formighieri é sinônimo de confiança absoluta para arquitetos exigentes que buscam pontualidade, acabamento impecável e madeiras nobres certificadas.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div>
                <span className="block font-serif text-4xl text-[#C5A059]">+70 Anos</span>
                <span className="text-xs text-white/50 uppercase tracking-widest mt-1 block">História na Capital</span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-[#C5A059]">CASACOR</span>
                <span className="text-xs text-white/50 uppercase tracking-widest mt-1 block">Presença Histórica</span>
              </div>
            </div>
          </div>

          <div className="relative h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs text-[#C5A059] uppercase tracking-widest font-medium">Curadoria Exclusiva</span>
              <p className="font-serif text-xl text-white mt-1">Projetos Executados nas Mercês e Região</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VITRINE INTERATIVA DE PRODUTOS (ABAS DINÂMICAS) */}
      <section id="colecoes" className="py-32 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-semibold">Portfólio de Alto Padrão</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white">Nossas Coleções</h2>
          <p className="text-white/60 font-light text-sm md:text-base">Selecione uma categoria para explorar especificações técnicas e estética refinada.</p>
        </div>

        {/* Botões das Abas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {collections.map((col, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 border ${
                activeTab === idx 
                  ? "bg-[#C5A059] text-[#12100E] border-[#C5A059] shadow-lg shadow-[#C5A059]/10" 
                  : "bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {col.title.split(" ")[0]} {col.title.split(" ")[1]}
            </button>
          ))}
        </div>

        {/* Conteúdo da Aba Ativa */}
        <div className="bg-[#181512] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#C5A059] text-xs uppercase tracking-widest font-semibold">{collections[activeTab].subtitle}</span>
            <h3 className="font-serif text-3xl lg:text-4xl text-white">{collections[activeTab].title}</h3>
            <p className="text-white/70 font-light leading-relaxed">{collections[activeTab].desc}</p>
            
            <div className="space-y-3 pt-2">
              {collections[activeTab].specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/5541998050400" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-[#C5A059] hover:text-[#12100E] text-white border border-white/10 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium transition duration-300"
              >
                <span>Solicitar Orçamento desta Linha</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative h-[380px] lg:h-[450px] rounded-2xl overflow-hidden border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${collections[activeTab].img}')` }}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAIS DE ATENDIMENTO */}
      <section className="py-24 px-6 lg:px-16 bg-[#161310] border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <Compass className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-xl text-white">Consultoria para Arquitetos</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">Acompanhamento técnico personalizado desde a especificação do projeto até a entrega final.</p>
          </div>
          <div className="space-y-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-xl text-white">Instalação Especializada</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">Equipe própria altamente capacitada com maquinário de ponta e acabamento impecável.</p>
          </div>
          <div className="space-y-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <Award className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-xl text-white">Garantia & Manutenção</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">Orientação pós-obra e serviços de revitalização para preservar a beleza do piso por gerações.</p>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ SOFISTICADO */}
      <footer className="py-16 px-6 lg:px-16 border-t border-white/10 bg-[#0D0B0A] text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <div className="font-serif text-xl tracking-[0.25em] text-[#C5A059]">FORMIGHIERI</div>
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
