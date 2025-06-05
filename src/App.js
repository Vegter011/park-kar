
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';
import Creating from './pages/Creating';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Booking />} />
          <Route path='/Creating' element={<Creating />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
