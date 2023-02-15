import { Card, Container, Row, Col, Image } from "react-bootstrap";
import aSilentVoiceImage from "../assets/images/anime/ASilentVoice.jpg"
import driftinghomeImage from "../assets/images/anime/driftinghome.webp"
import fateGrandOrderImage from "../assets/images/anime/FateGrandOrder.jpg"
import neonGenesisImage from "../assets/images/anime/NeonGenesis.jpg"
import onePieceFilmRedImage from "../assets/images/anime/OnePieceFilmRed.webp"
import strogeWorldImage from "../assets/images/anime/StrogeWorld.jpg"
const Anime = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">ANIME MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="anime">
                        <Card className="movieImage">
                            <Image src={aSilentVoiceImage} alt="A Silent Voice Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A Silent Voice</Card.Title>
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
                            <Image src={driftinghomeImage} alt="Drifting Home Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Drifting Home</Card.Title>
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
                            <Image src={fateGrandOrderImage} alt="Fate Grand Order Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Fate Grand Order</Card.Title>
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
                            <Image src={neonGenesisImage} alt="Neon Genesis  Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Neon Genesis </Card.Title>
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
                            <Image src={onePieceFilmRedImage} alt="One Piece Film Red Movies" className="Images" />
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
                            <Image src={strogeWorldImage} alt="Stroge World Movies" className="Images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Stroge World</Card.Title>
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

export default Anime