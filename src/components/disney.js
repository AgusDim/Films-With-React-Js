import { Card, Container, Row, Col, Image } from "react-bootstrap";
import beautyBeastImage from "../assets/images/disney/BeautyBeast.webp"
import frozenrImage from "../assets/images/disney/Frozen.jpg"
import lionKingImage from "../assets/images/disney/LionKing.webp"
import mermaidImage from "../assets/images/disney/Mermaid.jpg"
import moanaImage from "../assets/images/disney/Moana.jpg"
import princessFrogImage from "../assets/images/disney/PrincessFrog.jpg"

const Disney = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">DISNEY MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="disney">
                        <Card className="movieImage">
                            <Image src={beautyBeastImage} alt="Beauty Beast Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Beauty Beast</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={frozenrImage} alt="Frozen Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Frozen</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={lionKingImage} alt="Lion King Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Lion King</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={mermaidImage} alt="Mermaid  Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Mermaid </Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={moanaImage} alt="Moana Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Moana</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={princessFrogImage} alt="Princess Frog Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Princess Frog</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}

export default Disney