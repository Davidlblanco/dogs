import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login/*' element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
