// Design: Dark Premium compacto — navegação por páginas separadas, sem depender de rolagem longa.
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Social from "./pages/Social";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicos" component={Services} />
        <Route path="/redes" component={Social} />
        <Route path="/contato" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

export default App;
