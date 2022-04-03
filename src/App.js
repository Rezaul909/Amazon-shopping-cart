import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/Home' element={<Shop></Shop>}></Route>
        <Route path='/Order' element={<Order></Order>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
