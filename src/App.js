// IMPORTAÇÃO LOGO REACT

import logo from './logo.svg';

// IMPORTAÇÃO DAS FOLHAS DE ESTILO
import './App.css';

// IMPORTAÇÃO DOS COMPONENETES
import ComponentePrincipal from './components/ComponentePrincipal';

import Footer from './components/Footer';


function App() {
  return (
    // <> CÓDIGO ENCAPSULADO </> = <React.Fragment> CÓDIGO ENCAPSULADO </React.Fragment>
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Giovane Souza
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprenda React
          </a>
        </header>
      </div>

      <ComponentePrincipal />
      <Footer>
        <h3>Rodapé com PARÂMETRO CHILDREN</h3>
        <p>Com este parâmetro é possível inserir TAGS HTML.</p>
      </Footer>

    </>
  );
}

export default App;
