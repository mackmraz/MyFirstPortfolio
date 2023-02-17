import React from 'react';

import { About, Footer, Header, Skills, Work } from './container'; /* Re-Add , Testimonials if it is needed and after it is fixed of bugs */
import { Navbar } from './components';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> Currently not used, has some bugs that needs worked on */}
      <Footer />
    </div>
  )
}

export default App;