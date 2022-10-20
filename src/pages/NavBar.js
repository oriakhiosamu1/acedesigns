import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// const NavBar = () => {
//   return (
//     <nav>
//         <div>
//             <NavLink to='/' style={({isActive})=>{
//                 return {color: isActive ? 'red' : 'black' };
//             }}>Home Page</NavLink>
//         </div>
//         <div>
//             <NavLink to='/Projects' style={({isActive})=>{
//                 return {color: isActive ? 'red' : 'black' };
//             }}>Project Page</NavLink>
//         </div>
//     </nav>
//   )
// }

const NavBar=()=>{
    return <ColorSchemesExample />
}


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ace Designz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}


export default NavBar
