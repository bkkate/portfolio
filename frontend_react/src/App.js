import { About, Footer, Header, Skills, Work, Intro} from "./container";
import { Navbar } from './components';
import './App.scss'; 

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Intro/>
      <Work />
      <Skills />
      {/* <Experience/> */}
      <Footer />
    </div>
  );
};

export default App;
