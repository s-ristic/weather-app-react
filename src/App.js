import React from 'react';

import Header from './components/Header';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer';

import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>
        <Weather />
      </main>

      <Footer />
    </>
  );
}

export default App;
