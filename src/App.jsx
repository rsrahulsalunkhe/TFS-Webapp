import Footer from './components/Footer';
import Header from './components/Header';
import AppRouter from './router';

const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );  
}

export default App;
