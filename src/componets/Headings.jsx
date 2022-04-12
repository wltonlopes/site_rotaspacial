import React from 'react';  
import { Navbar,Nav, Container } from 'react-bootstrap';

function Headings (){
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">RotaSpacial</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/daypicture">Imagem do Dia</Nav.Link>
            <Nav.Link href="/astronews">Sobre</Nav.Link>
            <Nav.Link href="/contatos">Contatos</Nav.Link>
            <Nav.Link href="/lancamentos">Lançamentos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Headings;