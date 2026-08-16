// Design: Dark Premium compacto — shell compartilhado com navegação curta e estados ativos.
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export const navItems = [
  ["/", "Início"],
  ["/servicos", "Serviços"],
  ["/redes", "Redes"],
  ["/contato", "Contato"],
] as const;

export function Brand() {
  return <span className="brand"><span className="brand-icon"><span /><span /></span><span><strong>NextDev</strong><small>Solutions</small></span></span>;
}

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  return <div className="dark-site"><header className="site-header"><Link href="/" className="brand" aria-label="NextDev Solutions — início" onClick={() => setMenuOpen(false)}><Brand /></Link><button className="menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button><nav className={menuOpen ? "site-nav open" : "site-nav"}>{navItems.map(([href, label]) => <Link key={href} href={href} className={location === href ? "active" : ""} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link href="/contato" className="nav-button" onClick={() => setMenuOpen(false)}>Falar comigo <ArrowRight size={15} /></Link></nav></header><main className="main-card page-card">{children}</main><footer className="site-footer"><span>© 2026 NextDev Solutions</span><span>feito com <Sparkles size={13} /> dedicação</span><span>100% remoto</span></footer></div>;
}
