import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Booking from './Booking'
import { Link, Route, Routes, BrowserRouter } from 'react-router'

function App() {

  return (
    <>

    <Nav/>

    <Header/>


  <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/booking" element={<Booking/>} />
    </Routes>


    <Footer/>

    </>
  );
}

export default App;
