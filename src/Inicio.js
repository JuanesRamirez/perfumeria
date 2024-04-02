import './App.css';
import '.'
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import CardList from './componentes/body/CardList';
import Carrusel from './componentes/carrusel/Carrusel';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Carrusel/>
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
