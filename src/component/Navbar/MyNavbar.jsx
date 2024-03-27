import './MyNavbar.css'
import logo from '../../assets/images/logo.svg';
import { Container, Nav, NavDropdown, Navbar,FormControl,Form,Button } from 'react-bootstrap';
import  {Link}  from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand >
        <Link to='/home'>
        <img src={logo} alt="Logo" style={{display:'block',marginBottom:'16px'}}/>
        </Link>
        <span style={{fontWeight:'bold'}}>الشافعي لتطوير العقارات</span>
        </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
        {/* <Form className="d-flex mx-auto" style={{width:'70%'}}>
            <FormControl
              type="search"
              placeholder="بحث"
              className="mr-2"
              aria-label="Search"
            />
          </Form> */}
          <Nav className="me-auto" style={{ alignItems: 'baseline',fontFamily:'Cairo' }}>
          {/* <NavDropdown title="عربي" id="collapsible-nav-dropdown" style={{ width: '105px', border: '1px solid #547AFF', height: '40px', borderRadius: '10px',display:'flex',justifyContent:'center' }}>
              <NavDropdown.Item href="#action/3.1">عربي</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#features">
              <Button style={{ backgroundColor: '#547AFF', width: '105px', height: '40px', borderRadius: '10px' }} href='https://www.facebook.com/elshafaynorthcoast?mibextid=ZbWKwL'>
               <span style={{fontSize:'18px'}}>  فيسبوك  </span>  
                 </Button>
            </Nav.Link>
            
          </Nav> 
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;