import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Col, Row, Badge } from "react-bootstrap";

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    axios
      .get(
        "https://api.sportsdata.io/v3/mlb/scores/json/News?key=f818c6af02ac4fbcb909c5cf8255d591"
      )
      .then((res) => {
        setNews(res.data);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const bg ='https://png.pngtree.com/background/20230522/original/pngtree-baseball-field-in-a-3d-animated-video-picture-image_2693316.jpg'

  return (
    <Container className="mt-3"
         style ={{backgroundImage: "url(https://png.pngtree.com/background/20230522/original/pngtree-baseball-field-in-a-3d-animated-video-picture-image_2693316.jpg)"}}

    
    >
      <header>
        <Badge className="Sport">
         
          <h1> MLB NEWS!!</h1>
        </Badge>
      </header>

      <Row>
        {news.map((n) => {
          return (
            <Col xs={8}>
              <Card
                className="shadow-lg"
                style={{ minWidth: "18rem", margin: "20px" }}
              >
                <Card.Body className="m5">
                  <p class="Card.text">{n.Content}</p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default News;
