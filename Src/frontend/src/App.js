import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Main from './routes/Main/Main.js';
import Login from './routes/Login.js'
import Register from './routes/Register.js';

function App() {
  return (
    <div className="App">
      <h1>알리미 DNOW TEST</h1>
      <Link to={'/'}><button>메인</button></Link>
      <Link to={'/login'}><button>로그인</button></Link>
      <Link to={'/register'}><button>회원가입</button></Link>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;