import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Booking from './Booking'
import { Link, Route, Routes, BrowserRouter } from 'react-router'
import ConfirmedBooking from './ConfirmBooking'

function App() {

  return (
    <>

    <Nav/>

    <Header/>

    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
    </Routes>

    <Footer/>

    </>
  );
}

export default App;
