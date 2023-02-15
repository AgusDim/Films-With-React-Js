import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg"
import filmRedImage from "../assets/images/anime/OnePieceFilmRed.webp"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import neonGenesisImage from "../assets/images/anime/NeonGenesis.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={duneImage} alt="Dune Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dune</Card.Title>
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
                            <Image src={filmRedImage} alt="One Piece Film Red Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">One Piece Film Red</Card.Title>
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
                            <Image src={infiniteImage} alt="Infinite Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Infinite</Card.Title>
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
                            <Image src={morbiusImage} alt="Morbius Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Morbius</Card.Title>
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
                            <Image src={jokerImage} alt="Joker Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Joker</Card.Title>
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
                            <Image src={neonGenesisImage} alt="Neon Genesis Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Neon Genesis</Card.Title>
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

export default Trending