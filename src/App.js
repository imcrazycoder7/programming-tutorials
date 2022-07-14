import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar';
import Layout from './Layout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Layout />
     <Footer />
    </div>
  );
}

export default App;
