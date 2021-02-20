import '../style/App.css';

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <header>
        <Home/>
      </header>
      <main>
      <About/>
      </main>
      <article>
        <Skills/>
      </article>
      <aside>
        <Projects/>
      </aside>
      <section>
        <Contact/>
      </section>

      <nav>
        <Navigation/>
      </nav>
    </div>
  );
}

export default App;