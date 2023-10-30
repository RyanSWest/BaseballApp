import React from "react";
import '../styles/App.scss'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, Container, Image,Row,Col } from "react-bootstrap";
import axios from "axios";

const GameHighlights = () => {
  let params = useParams();

  const url = `https://statsapi.mlb.com/api/v1/game/${params.id}/content`;

  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setHighlights(res.data.highlights.highlights.items);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log("HG", highlights);

  return (
    <Container fluid>
      GameHighlights
      <Row class ="d-flex p-2 bd-highlight"> 

      {highlights.map((e) => {

        
        return (

            <Col className="col-xs-6" >
 
          <Card className ='highlight-card'>
            <Card.Header>
              <Card.Title>

                <h6>{e.blurb}</h6>
              </Card.Title>
            </Card.Header>

            <Card.Body>

            <Image
            class="img-fluid. max-width: 100%"
            className ='highlight'
            src ={e.image.cuts[0].src}
            
            
            
            /> 

            </Card.Body>
          </Card>
          </Col>
        );
      })}
      </Row>
    </Container>
  );
};

export default GameHighlights;
