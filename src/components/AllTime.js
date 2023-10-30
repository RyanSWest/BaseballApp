import axios from "axios";
import { useState, useEffect } from "react";
import Player from "./Player";
import {
  Button,
  Badge,
  Card,
  Container,
  Image,
  Col,
  Row,
  Nav
} from "react-bootstrap";

 
import photos from "../jsonFiles/AllTimeHomerPics.json";

const AllTime = () => {
  const url =
    "https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=career&sportId=1&stats=career&group=hitting&limit=64&offset=0&sortStat=homeRuns&order=desc";

  const url2 =
    "https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=career&sportId=1&stats=career&group=hitting&limit=24&offset=0&sortStat=avg&order=desc";

  const [players, setPlayers] = useState([]);

  const getGreats = () => {
    axios.get(url).then((res) => {
      setPlayers(res.data.stats);
    });
  };

  useEffect(() => {
    getGreats();
  }, []);

   
  const greats = players.map((p, idx) => ({ ...p, pic: photos[idx] }));
  if(greats.length<1){return <div> Loading...</div>}
  return (
    <div class="card" style={{ marginTop: "1rem", width: "25" }}>
      <Container>
     
         <Row class="d-flex p-2 bd-highlight">
         <Badge className="Sport">
        <h1>ALL TIME HOMERUN LEADERS</h1>
        <a
        className ='all-time-link'
        href="/all-time-avg">All time Batting Avg</a>

        </Badge>
          {greats.map((p, idx) => {
             
            return (
                
              <Col className="col-xs-4">
                <Card
                  class="shadow-lg p-3 mb-5 bg-body rounded"
                  className="d-flex justify-content-around"
                  style={{ width: "24rem", height: "18rem", marginTop:'1rem' }}
                >
                  <Card.Header   >
                    <Card.Title class="d-flex justify-content-center">
                      
                      <h5 class="fw-bolder">{p.playerName}</h5>{" "}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body class="d-flex justify-content-center">
                    <Badge className = 'Sport'style ={ { height: '14rem'}}>
                    <h5 class="fw-bolder"> # {idx + 1}</h5>
                      <h3 class="fw-bolder"> {p.homeRuns}</h3>
                      <h5>Home Runs</h5>
                      <Nav>
                        <a  class="nav-link active" href={`/player/${p.playerId}`}>See Stats by Year</a>
                         
                      </Nav>
                    </Badge>
                    <Image style={{ height: "14rem" }}
                    // src={p.pic}
                    src ={`https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${p.playerId}/headshot/silo/current`}

                    className="player"
                    thumbnail />
                    {/* <a href={`/player/${p.playerId}`}>See Stats by Year</a> */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default AllTime;
