// Design: Dark Premium compacto — serviços apresentados em cards objetivos, sem rolagem longa.
import { ArrowRight, Database, Layers3, Palette, Rocket } from "lucide-react";
import { Link } from "wouter";
import PageShell from "../components/PageShell";

const services = [
  [Layers3, "Front-end", "React · sites responsivos", "Interfaces rápidas, bonitas e fáceis de usar em qualquer tela."],
  [Database, "Back-end", "Node · APIs · integrações", "Estruturas e integrações que deixam seu projeto preparado para crescer."],
  [Palette, "UI/UX", "design simples e funcional", "Uma aparência profissional com caminhos claros para seus clientes."],
  [Rocket, "Publicação", "Vercel · domínio · suporte", "Coloco seu site no ar e ajudo você a entender os próximos passos."],
] as const;

export default function Services() { return <PageShell><section className="inner-page page-section"><div className="page-heading"><p className="kicker"><span /> serviços</p><h1>O que a NextDev<br /><em>constrói.</em></h1><p>Do primeiro rascunho à publicação, uma solução sob medida para o momento do seu negócio.</p></div><div className="services-grid services-grid-large">{services.map(([Icon, title, detail, text]) => <article className="service-item service-item-large" key={title}><Icon size={30} strokeWidth={1.35} /><strong>{title}</strong><small>{detail}</small><p>{text}</p></article>)}</div><Link href="/contato" className="primary-button page-action">Quero conversar <ArrowRight size={16} /></Link></section></PageShell>; }
