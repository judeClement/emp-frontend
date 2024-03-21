import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
<Navbar/>

<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="form" element={<Form/>}/>
    
</Routes>
    </div>
  );
}

export default App;
  