import Navbar from "./components/NavBar/NavBar";
import Intro from "./components/Indro/indro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/work";
import Contact from "./components/Contacts/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
       <Contact/>
       <Footer/>

    </div>
  );
}

export default App;
