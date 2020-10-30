import React from 'react';
import './App.css';
import Sidebar from './components/SidebarComponents/Sidebar';
import Nav from './components/NavComponents/Nav';
import Main from './components/MainComponents/Main';
import Footer from './components/FooterComponents/Footer';

function App() {
  return (
    <div id="wrapper">
      {/* dashboard */}
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          {/* barra d navegacion */}
          <Nav usuario="Ezequiel"/>
          {/* contenido de la pagina */}
          <Main />
        </div>			
        <Footer />
      </div>
    </div>
  );
}

export default App;
