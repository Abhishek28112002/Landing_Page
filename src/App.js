import React from 'react'
import Nav from 'react-bootstrap/Nav'
import img1 from './logo.svg';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img2 from './Image.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import profile from './prof.webp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import arrow from './arrow.png';
import './App.css';
function App() {
  return (
    <div>
<div className="Nav">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"  className="heading"style={{display: 'flex', flexDirection: 'left'}}><img src={img1} className="logo" /><h1 style={{fontSize:'50px',fontWeight:'bold',fontFamily:'inherit'}}>Stringar</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" className="main">Home</Nav.Link>
            <Nav.Link href="#link" className="main">Games</Nav.Link>
            <Nav.Link href="#home" className="main">Explore</Nav.Link>
            <Nav.Link href="#link" className="main">User Guide</Nav.Link>
            <Nav.Link href="#link" className="main">Contact Us</Nav.Link>
            <Nav.Link href="#link"  style={{display: 'flex', flexDirection: 'left', marginLeft: '100px'}}>
                <div className="img" style={{marginLeft: '10px'}}><h3>A</h3></div>
<div style={{marginLeft: '20px'}}>
<h5 >Abhishek</h5>
<h5>590</h5>
</div>
<img style={{marginLeft: '10px'}} src={profile} className="profile" alt="profile"/></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
<div className="carsol">
<Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={img2}
      alt="First slide"
      height="250px"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      height="250px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
      height="250px"
    />
  </Carousel.Item>
</Carousel>
</div>
<div className="box" style={{display: 'flex', flexDirection: 'left'}}>
<Card style={{ width: '6rem',height:'6rem', margin:'10px', backgroundColor:'gray' }}>
</Card>
<Card style={{ width: '6rem',height:'6rem', margin:'10px', backgroundColor:'gray' }}>
</Card><Card style={{ width: '6rem',height:'6rem', margin:'10px', backgroundColor:'gray' }}>
</Card><Card style={{ width: '6rem',height:'6rem', margin:'10px', backgroundColor:'gray' }}>
</Card><Card style={{ width: '6rem',height:'6rem', margin:'10px', backgroundColor:'gray' }}>
</Card><Card style={{ width: '6rem',height:'6rem', margin:'10px', backgroundColor:'gray' }}>
</Card><Card style={{ width: '6rem',height:'6rem', margin:'10px', backgroundColor:'gray' }}>
</Card><Card style={{ width: '6rem',height:'6rem', margin:'10px', backgroundColor:'gray' }}>
</Card><div >
    <img src={arrow} style={{  marginTop:'40px'}}  width="10%"/>
    </div>
</div>
<div >
<Container>
<Row style={{ width:'96%'}}>
        <Col xs={6} style={{border:'1px dotted black',height:"170px" ,width:"48%",marginRight:'5px'}} > <div><h2 style={{ textAlign: 'center' ,margin:'auto',marginTop:'70px'}}>Explore</h2>
       <div className="round">Notifs</div>
        </div></Col>
        <Col xs={6}  style={{border:'1px dotted black',height:"170px" ,width:"48%",marginLeft:'5px'}} ><div><h2 style={{ textAlign: 'center' ,margin:'auto',marginTop:'70px'}}>Games</h2>
        <div className="square">LeaderBoard</div>
        </div></Col>
      </Row>
      </Container>
</div>


    </div>
  )
}

export default App