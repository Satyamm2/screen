import './App.css';
import { Routes, Route} from 'react-router-dom';
import Nav from './components/NavComponent/Nav';
import Home from './components/HomeComponent/Home';
import Login from './components/LoginComponent/Login';
import Register from './components/RegisterComponent/Register';
import Logout from './components/LogoutComponent/Logout';
import UserHome from './components/UserHomeComponent/UserHome';
import Webcam from './components/WebcamComponent/Webcam';
import Screen from './components/ScreenComponent/Screen';
import Audio from './components/AudioComponent/Audio';

function App() {
  return (
    <>
    <Nav/>

    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/login" element={<Login/>}>Login</Route>
      <Route path="/register" element={<Register/>}>Register</Route>
      <Route path="/logout" element={<Logout/>}>Logout</Route>
      <Route path="/user" element={<UserHome/>}>User Home</Route>
      <Route path="/userwebcam" element={<Webcam/>}>Webcam Record</Route>
      <Route path="/userscreen" element={<Screen/>}>Screen Record</Route>
      <Route path="/useraudio" element={<Audio/>}>Audio Record</Route>
    </Routes>
    </>
  );
}

export default App;
