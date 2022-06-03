import React, {useState} from "react";
import { Container, Row, Col, Dropdown, Image, Breadcrumb, Carousel, ListGroup, Button, Figure, Form, InputGroup, FormControl, Modal } from "react-bootstrap";

function App() {

  const [showModal, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => setShow(false) + alert("Saved Succesfully");
  
  return (
    <Container fluid>
      <Row className="bg-dark">
        <Col md={2}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">Pilih Bahasa</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item active>Indonesia</Dropdown.Item>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Chinese</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={{ span: 2, offset: 7 }}>
          <Image className="d-flex mx-auto" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" roundedCircle width={50} ></Image>
          <p className="text-light text-center">Alan Saputra</p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 7 }}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Berita</Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col md={7} className="mx-auto">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                alt="Gambar 1"
              />
              <Carousel.Caption><h4>Inggris Mau Jadi Tim Terbaik Di Dunia</h4></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                alt="Gambar 2"
              />
              <Carousel.Caption><h4>Neymar Mendiskusikan Perpanjangan Kontrak Dengan PSG</h4></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                className="d-block w-100"
                alt="Gambar 3"
              />
              <Carousel.Caption><h4>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h4></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          <ListGroup>
            <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
            <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
            <ListGroup.Item disabled>Divisi Primera</ListGroup.Item>
            <ListGroup.Item>Serie A</ListGroup.Item>
            <ListGroup.Item>Ligue 1</ListGroup.Item>
            <ListGroup.Item>Bundes Liga</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="jumbotron">
          <h1>DIVISI PRIMERA</h1>
          <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
          <Button>Read More</Button>
        </Col>
        <Col className="ml-1">
          <Figure className="w-100 text-center">
            <Figure.Image
              roundedCircle
              src="https://www.pngitem.com/pimgs/m/111-1114675_user-login-person-man-enter-person-login-icon.png"
              width={50}
              height={50}
              alt="Image"
            />
            <h6 className="text-center">Silahkan Login</h6>
          </Figure>
          <Form>
            <InputGroup>
              <FormControl
                placeholder="Masukan Email"
                type="email"
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <FormControl
                placeholder="Password"
                type="password"
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <Form.Check
              type="checkbox"
              label="Term & Condition"
              />
            </InputGroup>
            <br></br>
            <Button varian="primary" onClick={handleOpen}>Login</Button>

            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                Login
              </Modal.Header>
              <Modal.Body>
                Anda Berhasil Login
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSave}>Save Username & Password</Button>
              </Modal.Footer>
            </Modal>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
