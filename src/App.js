import './App.css';
import Header from "./components/Header";
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import {Routes, Route, Link} from 'react-router-dom';
import BookingPage from './components/BookingPage';
function App() {
  return (
    
    <>
    
           <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/BookingForm" element={<BookingPage/>}/>
      </Routes>
      
   
      <Main/>
      <Footer/>
    </>
    
  );
}

export default App;
