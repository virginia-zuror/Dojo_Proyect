import './App.css';

import { ChakraBaseProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/layouts/Layout';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home.jsx';
import Users from './pages/Users';

const App = () => {
  return (
    <ChakraBaseProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route
            path="/users"
            element={
              <Layout>
                <Users />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
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
    </ChakraBaseProvider>
  );
};

export default App;
