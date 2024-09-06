import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/Contact/INDEX.JSX"
import Home from "./pages/Home"
import Projects from "./pages/Projects";
import { LanguageProvider } from "./context/languageProvider";


function App() {
  return (
    <>
      <LanguageProvider>
        <Home/>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
      </LanguageProvider>
    </>
  )
}

export default App;
