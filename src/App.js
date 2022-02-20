import React from 'react';

import { Navbar, Header, Technology, VR, Footer } from './components/exporter';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Technology />
      <VR />
      <Footer />
    </div>
  )
}

export default App