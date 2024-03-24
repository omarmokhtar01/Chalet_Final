import './MyNavbar.css'
import logo from '../../assets/images/logo.svg';
import { Container, Nav, NavDropdown, Navbar,FormControl,Form } from 'react-bootstrap';
import  {Link}  from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand >
        <Link to='/'>
        <img src={logo} alt="Logo" />
        </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Form className="d-flex mx-auto" style={{width:'70%'}}>
            <FormControl
              type="search"
              placeholder="بحث"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="me-auto lang-nav" style={{ alignItems: 'baseline' , display:'flex', justifyContent:'center', alignItems:'center', marginTop:'5px'}}>
          <NavDropdown title="عربي" id="collapsible-nav-dropdown" style={{ width: '105px', border: '1px solid #547AFF', height: '40px', borderRadius: '10px',display:'flex',justifyContent:'center' }}>
              <NavDropdown.Item href="#action/3.1">عربي</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#features">
              <Button style={{ backgroundColor: '#547AFF', width: '105px', height: '40px', borderRadius: '10px' }}>كيفيه العمل</Button>
            </Nav.Link> */}
            
          </Nav>
           

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;