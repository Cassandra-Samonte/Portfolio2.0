import Home from '../Home'
import Projects from '../Projects'
import Skills from '../Skills'
import ContactForm from '../ContactForm';
import Footer from '../Footer';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Home />
        <Projects />
        <Skills />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default App
