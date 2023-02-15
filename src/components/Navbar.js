import { Navbar, Container, Nav } from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">THE FILMS</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Tranding</Nav.Link>
                        <Nav.Link href="#films">Films</Nav.Link>
                        <Nav.Link href="#disney">Disney</Nav.Link>
                        <Nav.Link href="#anime">Anime</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar