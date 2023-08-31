import './Nav.css';
import { Link , useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';


function generateNavbar(role) {
    if(role=='user'){
        return(
            <nav className='nav-link'>
              <Link className='linkss' to="/user">User Home</Link>
              <Link className='linkss' to="/userwebcam">Webcam Record</Link>
              <Link className='linkss' to="/userscreen">Screen Record</Link>
              <Link className='linkss' to="/useraudio">Audio Record</Link>
              <Link className='linkss' to="/logout">Logout</Link>        
            </nav>
        )
    } else {
        return(
            <nav className='nav-link'>
              <Link className='linkss' to="/">Home</Link>
              <Link className='linkss' to="/login">Login</Link>
              <Link className='linkss' to="/register">Register</Link>
            </nav>
        )
    }
}




function Nav() {

    const [NavContent , setNavContent] = useState(null);
    const Location = useLocation();
  
    useEffect(()=>{
      // Fetch token and role from localStorage
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
  
      // Generate the Navbar based on the user role
      if (token !=undefined && role === 'user') {
          setNavContent(generateNavbar('user'));
      } else {
          setNavContent(generateNavbar());
      }
  }, [Location]);
  
  
    return (
      <>
        {NavContent}
      </>
    );
  }
  
  export default Nav;
  
