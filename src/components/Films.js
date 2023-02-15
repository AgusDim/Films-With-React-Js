import { Card, Container, Row, Col, Image } from "react-bootstrap";
import freedomImage from "../assets/images/freedom.jpg"
import afterImage from "../assets/images/After.jpg"
import gatotKacaImage from "../assets/images/GatotKaca.jpeg"
import gktauImage from "../assets/images/gktau.jpg"
import harryPoterImage from "../assets/images/HarryPoter.png"
import wakandaForeverImage from "../assets/images/wakandaForever.webp"

const Films = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">FILMS MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="films">
                        <Card className="movieImage">
                            <Image src={freedomImage} alt="Freedom Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Freedom</Card.Title>
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
                            <Image src={afterImage} alt="After Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">After</Card.Title>
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
                            <Image src={gatotKacaImage} alt="Gatot Kaca Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Gatot Kaca</Card.Title>
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
                            <Image src={gktauImage} alt="Gk Tau  Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Gk Tau </Card.Title>
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
                            <Image src={harryPoterImage} alt="Harry Poter Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Harry Poter</Card.Title>
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
                            <Image src={wakandaForeverImage} alt="Wakanda Forever Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Wakanda Forever</Card.Title>
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

export default Films