import './App.css';

import { ChakraBaseProvider } from '@chakra-ui/react';
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
    <ChakraBaseProvider>
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
