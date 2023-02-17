import './App.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/layouts/Layout';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home.jsx';
import Users from './pages/Users';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <main>
              <h2>404 Not found</h2>
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
