import './App.css';
import { NavbarComponent,DetailMovieComponent,FooterComponent } from './components';
import { AllMovie, OneMovie } from './pages';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <header>
      <NavbarComponent/>
    </header>
    <body className='bg-dark'>
      <div className='container-fluid p-4'>
        <Routes>
          <Route path="/" element={<AllMovie/>}/>
          <Route path="/:page" element={<AllMovie/>}/>
          <Route path='/detail-movie/:id' element={<OneMovie/>}/>
        </Routes>
      </div>
    </body>
    <FooterComponent/>
    </>
  );
}

export default App;
