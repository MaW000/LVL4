import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {ThemeContextProvider} from './components/ThemeContext'



function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
