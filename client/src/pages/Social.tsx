// Design: Dark Premium compacto — redes sociais em dois canais claros, sem distrações.
import { ArrowRight, Instagram } from "lucide-react";
import PageShell from "../components/PageShell";

export default function Social() { return <PageShell><section className="inner-page page-section social-page"><div className="page-heading"><p className="kicker"><span /> redes sociais</p><h1>Acompanhe o que<br /><em>está acontecendo.</em></h1><p>Projetos, novidades e bastidores do desenvolvimento direto nos canais da NextDev.</p></div><div className="social-links-simple social-links-page"><a href="https://www.instagram.com/netxdevsolutions/" target="_blank" rel="noreferrer"><Instagram size={26} /><span>Instagram<small>@nextdevsolutions</small></span><ArrowRight size={16} /></a><a href="https://tiktok.com" target="_blank" rel="noreferrer"><span className="tiktok-symbol">♪</span><span>TikTok<small>@nextdevsolutions</small></span><ArrowRight size={16} /></a></div></section></PageShell>; }
