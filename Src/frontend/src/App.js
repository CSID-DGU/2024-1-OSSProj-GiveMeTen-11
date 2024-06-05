import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Main from './routes/Main/Main.js';
import Login from './routes/Login.js'
import Register from './routes/Register.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;