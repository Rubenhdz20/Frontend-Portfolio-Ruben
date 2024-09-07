import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/Contact/INDEX.JSX"
import Home from "./pages/Home"
import Projects from "./pages/Projects";
import { LanguageProvider } from "./context/languageProvider";
import { ThemeProvider } from "./context/themeProvider";


function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Home/>
          <AboutMe/>
          <Projects/>
          <ContactMe/>
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App;
