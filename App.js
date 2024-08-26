import './assets/styles/tailwind.css'
import './assets/styles/Global.css'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PortfolioPage from './pages/PortfolioPage';


function App() {
  return (
    <div>
      <Header />
      <PortfolioPage />
    </div>
  );
}

export default App;
