import './MyNavbar.css'
import logo from '../../assets/images/logo.svg';
import { Container, Nav, NavDropdown, Navbar,FormControl,Form } from 'react-bootstrap';
import  {Link}  from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand >
        <Link to='/home'>
        <img src={logo} alt="Logo" />
        </Link>
        </Navbar.Brand>

        
      </Container>
    </Navbar>
  );
}

export default MyNavbar;