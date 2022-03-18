import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Link,Outlet} from 'react-router-dom';
import logo from '../src/images/logo512.png'
import { Navbar, NavDropdown } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import { Button } from 'bootstrap';


function App() {
  return (
    
    <div >
     <Navbar bg='dark' variant='dark' className="navbar navbar-expand-lg navbar-mainbg">
      <Nav className="navbar navbar-expand-lg navbar-mainbg">
          <Navbar.Brand>
        <img src={logo} height={50} />
          </Navbar.Brand>
          <Nav>
            <NavDropdown title='Home'>
              <NavDropdown.Item href='/app'>Chicken</NavDropdown.Item>
              <NavDropdown.Item href='/app'>Pizza</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href='/app'>The Big Waffle</NavDropdown.Item>
            </NavDropdown>
            
          <Nav.Link className="navbar navbar-brand navbar-logo" href='/home'>Home</Nav.Link>
          </Nav>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
         
          
        <Link className="navbar navbar-brand navbar-logo" to='/home'>Home</Link> {''}
        <Link className="navbar navbar-brand navbar-logo" to='about'>About</Link> {''}
        <Link className="navbar navbar-brand navbar-logo" to='/services'>Services</Link> {''}
        <Link className="navbar navbar-brand navbar-logo" to='/contact'>Contact</Link> {''}
          <nav className="navbar navbar-light bg-light">
            
  
            
</nav>
        
      
        
        </Nav>
      </Navbar>
      <br/>
      <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
            </div>
      <Outlet/>
    </div>
    
    
  );
}

export default App;
