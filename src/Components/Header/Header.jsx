import style from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const  Header= () => {
  return(<header className={style.header}>
   <div className={style.wrapperHead}>
   {/* <div className={style.logo}> </div> */}
   <Navbar className={style.NavBar}  expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Главная</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/Articles">Статьи</Nav.Link> 
        <Nav.Link href="#link">Медитации</Nav.Link>
            <NavDropdown title="Иное" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Tests">Тесты</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Курсы
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Аффирмации</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                О Себе
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* 
    <div className={style.NavBar}>
    <button className={style.buton}>sadsad</button>
    
    </div> */}
    <div className={style.QuoteinHeader}><h2>
      Я обнаружила, что независимо от того в чём заключается проблема, лучший способ решить её - это начать любить себя
      </h2>
      <h3>
      Л.Хей
      </h3>
      </div>
   </div>

  </header>
  )
}

export default Header;
