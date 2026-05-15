import { Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './components/LoginPage';
import Success from './components/Success';
import useLogin from './store/useLogin';

function App() {

  const checkAuth = useLogin((state) => state.isAuthenticated);

  console.log(checkAuth);

  return (
    <>
    <Routes>
      <Route path="/" element={ checkAuth ? <Success/> : <LoginPage loadPage="login" />} />
    </Routes>
    </>
  )
}

export default App
