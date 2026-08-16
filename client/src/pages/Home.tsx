// Design: Dark Premium compacto — página inicial com apresentação direta e uma única decisão de ação.
import { ArrowRight, Check, Code2 } from "lucide-react";
import { Link } from "wouter";
import PageShell from "../components/PageShell";

export default function Home() {
  return <PageShell><section className="hero-simple page-section"><div className="hero-copy-simple"><p className="kicker"><span /> desenvolvimento de alto nível</p><h1>Seu negócio merece um site <span>bem feito.</span></h1><p className="hero-lead">A NextDev Solutions cria sites, sistemas e identidades digitais para negócios que querem crescer com uma presença profissional na internet.</p><div className="hero-actions-simple"><Link href="/contato" className="primary-button">Começar um projeto <ArrowRight size={16} /></Link><Link href="/servicos" className="simple-link">ver serviços <span>→</span></Link></div><div className="trust-row"><span><Check size={14} /> Responsivo</span><span><Check size={14} /> Sob medida</span><span><Check size={14} /> Sem enrolação</span></div></div><div className="hero-detail" aria-hidden="true"><div className="detail-grid" /><div className="detail-orb"><Code2 size={34} strokeWidth={1.2} /></div><span className="detail-label">ND / 01</span><span className="detail-caption">código limpo<br />ideias claras</span></div></section></PageShell>;
}
