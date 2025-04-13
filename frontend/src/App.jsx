import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import AdminPage from './components/AdminPage';
import Contact from './sections/Contact';
import Header from './components/Header';
import Services from './sections/Services';
import ProductPage from './sections/ProductPage';
function App() {
  return (
    <>
       <Router>
        <Routes>        git branch
        <Route path="/admin" element={<AdminPage />} />
        </Routes>
        </Router>
      <Header/>
      <main>
        <Home />
        <About />
        <Services/>
       <ProductPage/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
