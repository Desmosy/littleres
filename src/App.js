import './App.css';
import Header from "./components/Header";
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import BookingForm from './components/BookingForm';
import {Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    
    <>
    
           <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/BookingForm" element={<BookingForm/>}/>
      </Routes>
      
   
      <Main/>
      <Footer/>
    </>
    
  );
}

export default App;
