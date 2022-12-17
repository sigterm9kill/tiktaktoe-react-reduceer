import Footer from './components/Footer';
import Game from './components/Game';
import Header from './components/Header';
import rain from './components/assets/rain.mp4';

function App() {
  return (
    <div className='App'>
      <video autoPlay loop muted id='rain'>
        <source src={rain} type='video/mp4' />
      </video>
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
