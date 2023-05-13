import './App.css';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import TopHeader from './components/TopHeader/TopHeader';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <TopHeader />
      <MainHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
