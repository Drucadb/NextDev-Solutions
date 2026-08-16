// Design: Dark Premium compacto — contato simples, humano e sem formulário desnecessário.
import { ArrowLeft, Mail, Send } from "lucide-react";
import { Link } from "wouter";
import PageShell from "../components/PageShell";

export default function Contact() { return <PageShell><section className="inner-page page-section contact-page"><div className="page-heading"><p className="kicker"><span /> vamos conversar</p><h1>Tem uma ideia?<br /><em>Vamos construir.</em></h1><p>Me conta o que você está pensando. A primeira conversa é sem compromisso e já pode clarear o próximo passo.</p></div><div className="contact-panel"><div><span className="contact-panel-label">contato direto</span><a className="contact-email" href="mailto:contato@nextdevsolutions.com"><Mail size={20} /> contato@nextdevsolutions.com</a><p>Respondo assim que possível com algumas perguntas para entender o projeto.</p></div><a className="primary-button" href="mailto:contato@nextdevsolutions.com">Enviar mensagem <Send size={15} /></a></div><Link href="/" className="back-link"><ArrowLeft size={15} /> voltar para o início</Link></section></PageShell>; }
