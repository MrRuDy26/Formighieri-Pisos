import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-wood-dark/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="font-serif text-xl tracking-widest text-wood-accent">
          FORMIGHIERI
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider text-white/70">
          <a href="#produtos" className="hover:text-wood-accent transition">Produtos</a>
          <a href="#diferenciais" className="hover:text-wood-accent transition">Tradição</a>
          <a href="#obras" className="hover:text-wood-accent transition">Projetos</a>
        </div>
        <a 
          href="https://wa.me/5541998050400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-wood-accent text-wood-dark font-medium px-5 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-white transition"
        >
          Orçamento WhatsApp
        </a>
      </nav>

      {/* Hero Section Imersiva */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-wood-dark/40 to-wood-dark z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop')` }}
        />

        <div className="relative z-20 max-w-4xl mx-auto space-y-6 mt-16">
          <span className="text-wood-accent text-xs uppercase tracking-[0.3em] font-semibold">
            Curitiba • Mais de 70 Anos de História
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white">
            A nobreza da madeira <br />e o design contemporâneo.
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Especialistas em pisos estruturados, maciços, decks e painéis exclusivos para projetos arquitetônicos de alto padrão.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5541998050400"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-wood-accent text-wood-dark font-medium px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-white transition duration-300 shadow-lg"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Autoridade / CASACOR */}
      <section id="diferenciais" className="py-24 px-6 lg:px-12 bg-wood-card/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-wood-accent text-xs uppercase tracking-[0.2em]">Tradição e Exclusividade</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Presente nos mais refinados projetos de Curitiba.
            </h2>
            <p className="text-white/70 leading-relaxed font-light">
              Parceira constante dos principais escritórios de arquitetura e decoração e presente em edições históricas da <strong className="text-white font-medium">CASACOR Paraná</strong>, a Formighieri alia o rigor técnico à sofisticação estética que o seu projeto exige.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="block font-serif text-3xl text-wood-accent">+70</span>
                <span className="text-xs text-white/60 uppercase tracking-wider">Anos de Mercado</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-wood-accent">CASACOR</span>
                <span className="text-xs text-white/60 uppercase tracking-wider">Presença Histórica</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop')` }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
