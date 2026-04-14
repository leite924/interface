"use client";

import React, { useEffect, useState, useRef } from "react";

function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !telefone.trim()) return;
    const texto = `Olá! Vim pelo site da Interface.%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*E-mail:* ${encodeURIComponent(email || "Não informado")}%0A*Telefone:* ${encodeURIComponent(telefone)}%0A*Necessidade:* ${encodeURIComponent(mensagem || "Não informado")}`;
    window.open(`https://wa.me/5581999642883?text=${texto}`, "_blank");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  }

  return (
    <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl">
      <h3 className="text-2xl font-extrabold mb-1 text-center text-black">Fale com um Especialista</h3>
      <p className="text-slate-500 text-sm text-center mb-8">Resposta em até 1 hora no horário comercial.</p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">Nome ou Empresa</label>
          <input required type="text" value={nome} onChange={e => setNome(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all" placeholder="Seu nome ou empresa" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">E-mail</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">WhatsApp / Telefone <span className="text-red-500">*</span></label>
            <input required type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all" placeholder="(81) 99999-0000" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">Necessidade Atual</label>
          <textarea rows={4} value={mensagem} onChange={e => setMensagem(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none" placeholder="Ex: Preciso de câmeras nas catracas ou leitura da placa na portaria..." />
        </div>
        <button type="submit" className="w-full py-4 bg-brand hover:bg-brand-glow text-white font-extrabold rounded-xl transition-colors shadow-lg shadow-brand/30 mt-4 text-lg flex items-center justify-center gap-2">
          {enviado ? "✓ Redirecionando para o WhatsApp..." : "Agendar Contato pelo WhatsApp"}
        </button>
      </form>
    </div>
  );
}
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cctv, 
  ScanFace, 
  CarFront, 
  Wrench, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Menu,
  X,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
  Truck
} from "lucide-react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand/30">
      
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="Interface Vídeos e Sistemas Digitais" className="h-[52px] w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-800">
            <a href="#services" className="hover:text-brand transition-colors">Serviços</a>
            <a href="#features" className="hover:text-brand transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="hover:text-brand transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
            <a href="#sobre" className="hover:text-brand transition-colors">Sobre Nós</a>
            <a href="#contato" className="px-6 py-2.5 bg-black hover:bg-slate-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-black/10 flex items-center gap-2">
              Fale Conosco
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col gap-4 border-t border-slate-100"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-800">Serviços</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-800">Diferenciais</a>
            <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-800">Depoimentos</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-800">FAQ</a>
            <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-800">Sobre Nós</a>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-brand font-bold">Fale Conosco</a>
          </motion.div>
        )}
      </nav>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 py-20 md:py-32 lg:py-40 flex items-center min-h-screen lg:min-h-[90vh]">
          {/* Subtle background element */}
          <div className="absolute inset-0 z-[-1] bg-slate-50">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-100 transform skew-x-[-10deg] translate-x-32 hidden lg:block" />
          </div>

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-brand text-sm font-bold mb-8 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                Alto padrão em inteligência e controle
              </div>
              
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-black"
              >
                Segurança <span className="text-brand">Sem Limites</span> <br className="hidden md:block"/> 
                para o seu Patrimônio
              </motion.h1>

              <motion.p 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 max-w-xl mb-12"
              >
                Especialistas em vendas, manutenção, locação e projetos consultivos de sistemas empresariais e condominiais.
              </motion.p>

              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <a href="#contato" className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-glow text-white rounded-full transition-all duration-300 font-bold shadow-lg shadow-brand/30 flex items-center justify-center gap-2">
                  Solicite um Orçamento <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-full transition-all duration-300 font-bold flex items-center justify-center shadow-sm">
                  Conheça Nossas Soluções
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="relative h-[280px] sm:h-[380px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-800"
            >
              <img src="/hero-bg.png" alt="Sala de Controle e Monitoramento" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/30 to-transparent flex items-end p-8">
                <div className="bg-black/60 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl">
                  <p className="text-white font-bold flex items-center gap-2"><CheckCircle2 className="text-brand w-5 h-5"/> Monitoramento Ativo</p>
                  <p className="text-slate-300 text-sm mt-1">Sistemas conectados 24 horas por dia.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="services" className="px-6 md:px-12 py-24 bg-slate-50">
          <div className="container mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl font-extrabold mb-4 text-black">Nossas Soluções Digitais</h2>
              <p className="text-slate-600 text-lg">Tecnologias de última geração para garantir o controle e a total tranquilidade do seu ambiente operando em todos os níveis corporativos.</p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Controle de acesso biométrico - Span 2 cols */}
              <motion.div variants={fadeIn} className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group min-h-[320px]">
                <div className="relative z-10 w-full md:w-2/3">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
                    <ScanFace className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Acesso Biométrico</h3>
                  <p className="text-slate-600 mb-8">
                    Acessos monitorados através do reconhecimento facial 3D, biometria digital e chaves digitais seguras. Controle total do fluxo de entrada, eliminando fraudes, reduzindo filas em horários de pico e integrando catracas para uma gestão de alto padrão.
                  </p>
                  <a href="#contato" className="text-black font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba Mais <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
                {/* Image inset on the right on larger screens */}
                <div className="hidden md:block absolute right-0 top-0 w-1/3 h-full">
                  <img src="/facial-access-new.png" alt="Controle de Acesso Facial" className="w-full h-full object-cover object-center rounded-l-3xl shadow-[-10px_0_30px_rgba(0,0,0,0.1)]" />
                </div>
              </motion.div>

              {/* Câmeras de monitoramento */}
              <motion.div variants={fadeIn} className="glass-card rounded-3xl p-8 group flex flex-col min-h-[320px]">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
                  <Cctv className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">CFTV & Monitoramento VIP</h3>
                <p className="text-slate-600 mb-6 flex-grow">Implantação de câmeras IPs de altíssima resolução com inteligência artificial embarcada para visão noturna, identificação precisa e proteção de perímetros e condomínios.</p>
                <div className="mt-auto">
                  <a href="#contato" className="text-brand font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Solicitar Análise <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Leitura de placas */}
              <motion.div variants={fadeIn} className="glass-card rounded-3xl p-8 group flex flex-col min-h-[320px]">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center mb-6">
                  <CarFront className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Leitura de Placas (LPR)</h3>
                <p className="text-slate-600 mb-6 flex-grow">Câmeras LPR que efetuam leitura veloz de placas e efetuam abertura automática de cancelas com registros em banco de dados.</p>
                <div className="mt-auto">
                  <a href="#contato" className="text-black font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Automatizar Entrada <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Monitoramento Veicular */}
              <motion.div variants={fadeIn} className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group min-h-[280px] flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
                    <Truck className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Monitoramento Veicular</h3>
                  <p className="text-slate-600 mb-6">Câmeras Hikvision embarcadas em veículos da frota com gravação em tempo real, GPS integrado e acesso remoto às imagens. Solução completa para frotas corporativas, transporte escolar e veículos de segurança.</p>
                  <ul className="flex flex-wrap gap-3 mb-6">
                    {['Câmeras DVR Móvel', 'GPS em Tempo Real', 'Acesso Remoto', 'Alerta de Colisão'].map((tag) => (
                      <li key={tag} className="px-3 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full">{tag}</li>
                    ))}
                  </ul>
                  <a href="#contato" className="text-brand font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Monitorar Frota <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Consultoria e manutenção - Span 2 cols */}
              <motion.div variants={fadeIn} className="md:col-span-2 bg-black text-white rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <Wrench className="w-12 h-12 text-brand mb-6" />
                  <h3 className="text-2xl font-bold mb-3">Consultoria, Manutenção & Locação</h3>
                  <p className="text-slate-400 max-w-md">Para empresas que querem tecnologia como serviço. Planos completos de comodato/locação incluindo manutenções preventivas sem taxa surpresa.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto bg-white/5 p-6 rounded-2xl border border-white/10">
                  <ul className="space-y-4">
                    {['Venda Especializada', 'Locação (As a Service)', 'Manutenção Preventiva'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-semibold">
                        <CheckCircle2 className="w-5 h-5 text-brand" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="features" className="px-6 md:px-12 py-24 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img src="/tech-maintenance.png" alt="Técnico de Manutenção" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand text-white p-8 rounded-2xl shadow-2xl hidden md:block max-w-[250px]">
                   <h4 className="text-4xl font-black mb-2">10+</h4>
                   <p className="font-bold leading-tight">Anos de experiência focada em você.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-bold mb-6">
                  Diferenciais
                </div>
                <h2 className="text-4xl font-extrabold mb-6 text-black">O padrão Interface de qualidade e atendimento.</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Entendemos que não vendemos câmeras, entregamos tranquilidade. Por isso, a dedicação corre em nosso DNA.
                </p>

                <div className="space-y-8">
                  {[
                    { title: "Equipamentos Premium", desc: "Apenas hardware homologado com alta durabilidade e atualizações garantidas." },
                    { title: "Mão de Obra Treinada", desc: "Equipe uniformizada, discreta e totalmente capacitada direto com as fabricantes." },
                    { title: "Agilidade Ouro", desc: "Nossos parceiros contratuais não esperam. Atendimento instantâneo de paralisações." }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <ShieldCheck className="w-6 h-6 text-brand" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1 text-black">{feat.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Clients Marquee */}
        <section id="clientes" className="py-16 bg-white border-y border-slate-100">
          <div className="container mx-auto px-6 md:px-12 mb-10 text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-slate-500 uppercase mb-3">Quem confia na Interface</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Clientes que nos escolheram</h2>
          </div>
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track items-center gap-16 px-8">
              {(() => {
                const clientLogos = [
                  { src: "/clients/disnove.png", alt: "Disnove Volkswagen" },
                  { src: "/clients/alpargatas.png", alt: "Alpargatas" },
                  { src: "/clients/unicap.png", alt: "Universidade Católica de Pernambuco" },
                  { src: "/clients/bokus.png", alt: "Boku's" },
                  { src: "/clients/nissan-auto-oriente.png", alt: "Nissan Auto Oriente" },
                  { src: "/clients/hse.png", alt: "Hospital dos Servidores do Estado" },
                  { src: "/clients/innovative.png", alt: "Innovative Water Care" },
                  { src: "/clients/autovip.png", alt: "Auto Vip Multimarcas" },
                  { src: "/clients/reserva-carneiros.png", alt: "Reserva dos Carneiros" },
                  { src: "/clients/irh.png", alt: "Instituto de Recursos Humanos" },
                  { src: "/clients/marulhos.png", alt: "Marulhos Suítes Resort" },
                  { src: "/clients/fiocruz.png", alt: "Fiocruz Pernambuco" },
                  { src: "/clients/rio-ave.png", alt: "Rio Ave" },
                  { src: "/clients/marilan.png", alt: "Marilan" },
                ];
                return [...clientLogos, ...clientLogos];
              })().map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="client-logo h-12 md:h-14 w-auto object-contain shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="px-6 md:px-12 py-24 bg-slate-50">
          <div className="container mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold mb-6 shadow-sm">
                Casos de Sucesso
              </div>
              <h2 className="text-4xl font-extrabold mb-4 text-black">Aprovação de quem já vive a excelência.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Roberto Campos", role: "Síndico Profissional",
                  text: "Estávamos sofrendo com invasões. Após a instalação das câmeras LPR e fechaduras da Interface, acabaram os problemas. A manutenção deles é irretocável."
                },
                {
                  name: "Juliana Mendes", role: "Diretora de Logística",
                  text: "Contratamos as câmeras As a Service. O equipamento é fantástico, resolveu nossos roubos de carga no pátio e o custo mensal fechou certinho."
                },
                {
                  name: "Carlos Alberto", role: "Gestor Escolar",
                  text: "Precisávamos de biometria de alto fluxo pros alunos. As catracas agora dão leitura na velocidade da luz. Atendimento nível ouro, recomendo."
                }
              ].map((dep, i) => (
                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card rounded-3xl p-8 relative flex flex-col">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200 -z-10" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-brand text-brand" />)}
                  </div>
                  <p className="text-slate-700 mb-8 font-medium italic flex-grow">{`"${dep.text}"`}</p>
                  <div>
                    <h4 className="font-extrabold text-black">{dep.name}</h4>
                    <p className="text-sm font-semibold text-slate-500">{dep.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-6 md:px-12 py-24 bg-white">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 text-black">Perguntas Frequentes</h2>
              <p className="text-slate-600 text-lg">Tudo que você precisa saber sobre as nossas soluções digitais e processos.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Como funciona a Locação de Equipamentos?",
                  a: "Conhecida como 'Hardware as a Service', você não precisa comprar as câmeras ou catracas. Você paga uma mensalidade que já inclui a instalação completa, o software e TODA a manutenção ao longo dos anos."
                },
                {
                  q: "A manutenção atende chamados de emergência?",
                  a: "Sim! Se você for um parceiro de contrato de manutenção ou locação, possuímos processos ágeis onde a equipe resolve falhas a qualquer dia para garantir sua segurança ininterrupta."
                },
                {
                  q: "As câmeras leem todos os tipos de placa (LPR)?",
                  a: "Nossos equipamentos vêm embarcados com Inteligência Artificial. Identificam as placas Brasil, Mercosul, e até cor e classe do veículo sob chuva intensa ou neblina."
                },
                {
                  q: "O reconhecimento facial falha com uso de óculos?",
                  a: "A tecnologia avançada cruza a geometria óssea do rosto em 3D. Portanto óculos de grau, chapéus ou maquiagem não interferem em uma leitura imediata."
                },
                {
                  q: "O que é o AcuSeek e como ele funciona?",
                  a: "AcuSeek é o mecanismo de busca por IA da Hikvision integrado aos nossos sistemas. Ele permite pesquisar eventos gravados por características visuais — cor de roupa, tipo de veículo, gênero — em horas de gravação em segundos. Ideal para investigações rápidas em condomínios e empresas."
                }
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-extrabold text-black text-lg pr-4">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      className="px-8 pb-6"
                    >
                      <p className="text-slate-600 font-medium leading-relaxed pt-2">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="contato" className="px-6 md:px-12 py-24 bg-black text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Proteja seu patrimônio hoje mesmo.</h2>
                <p className="text-slate-400 mb-10 text-lg">
                  Nossos protocolos de segurança sob medida começam com uma consultoria agendada. Descreva as vulnerabilidades do seu local e deixe que nossa equipe avalia a melhor arquitetura.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Phone className="w-6 h-6 text-brand"/></div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Central de Atendimento</p>
                      <p className="font-bold text-xl">(81) 99964-2883</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Mail className="w-6 h-6 text-brand"/></div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Contato Geral</p>
                      <p className="font-bold text-xl">contato@interfacedigital.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><MapPin className="w-6 h-6 text-brand"/></div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Escritório Central</p>
                      <p className="font-bold text-lg">Av. Dom Hélder Câmara, 234 - Sala 09</p>
                      <p className="text-slate-400 text-sm">Santa Tereza, Olinda - PE · CEP 53010-005</p>
                      <p className="text-slate-400 text-sm">Seg–Qui 08:00–18:00 · Sex 08:00–17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <ContactForm />

            </div>
          </div>
        </section>
      </main>

      <footer className="pt-16 pb-8 bg-black border-t border-white/10 text-slate-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/logo.png" alt="Interface Vídeos e Sistemas Digitais" className="h-[62px] w-auto brightness-0 invert" />
              </div>
              <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                Vídeos e sistemas digitais corporativos. Solucionando falhas, automatizando entradas e protegendo o que importa com alto nível.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Serviços</h4>
              <ul className="space-y-3 font-medium">
                <li><a href="#" className="hover:text-brand transition-colors">Sistema Fechado (CFTV)</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Portarias com Biometria</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Automação Cancelas (LPR)</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Consultoria e Planejamento</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Locação Mensal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Sede</h4>
              <ul className="space-y-3 font-medium">
                <li><a href="#sobre" className="hover:text-brand transition-colors">A Empresa e Valores</a></li>
                <li><a href="#contato" className="hover:text-brand transition-colors">Assessor Comercial</a></li>
                <li><a href="#projetos" className="hover:text-brand transition-colors">Casos de Sucesso</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm font-medium">
            © {new Date().getFullYear()} Interface Vídeos e Sistemas Digitais. Todos diretos restritos.
          </div>
        </div>
      </footer>
    </div>
  );
}
