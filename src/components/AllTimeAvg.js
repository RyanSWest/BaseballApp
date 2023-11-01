import axios from "axios";
import { useState, useEffect } from "react";
import Player from "./Player";
import { useParams, useNavigate } from "react-router-dom";
// import  avgPhotos  from '../../avgPhotos';
// import './avg.json'
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

const AllTimeAvg = () => {
  const avgPhotos = [
    {
      name: "Photo of Ty\u00a0Cobb+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/7/7551754a_sabr.jpg",
    },
    {
      name: "Photo of Oscar\u00a0Charleston+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/5/5ed44b6f_sr.jpg",
    },
    {
      name: "Photo of Rogers\u00a0Hornsby+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/b/b5854fe4_sabr.jpg",
    },
    {
      name: "Photo of Shoeless\u00a0Joe\u00a0Jackson",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/7/7afaa6b2_sabr.jpg",
    },
    {
      name: "Photo of Jud\u00a0Wilson+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/e/e8da6967_sr.jpg",
    },
    {
      name: "Photo of Lefty\u00a0O'Doul",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/b/b820a06c_sabr.jpg",
    },
    {
      name: "Photo of Turkey\u00a0Stearnes+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/7/70965998_sr.jpg",
    },
    {
      name: "Photo of Ed\u00a0Delahanty+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/d/d835353d_sabr.jpg",
    },
    {
      name: "Photo of Tris\u00a0Speaker+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/6/6d9f34bd_sabr_bos.jpg",
    },
    {
      name: "Photo of Billy\u00a0Hamilton+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/8/822fed29_sabr.jpg",
    },
    {
      name: "Photo of Ted\u00a0Williams+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/3/35baa190_sabr.jpg",
    },
    {
      name: "Photo of Dan\u00a0Brouthers+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/c/c08044f6_sabr.jpg",
    },
    {
      name: "Photo of Babe\u00a0Ruth+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/9/9dcdd01c_sabr.jpg",
    },
    {
      name: "Photo of Dave\u00a0Orr",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/2/28f70a6f_sabr.jpg",
    },
    {
      name: "Photo of Harry\u00a0Heilmann+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/7/7257f49c_sabr.jpg",
    },
    {
      name: "Photo of Pete\u00a0Browning",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/b/b4fdac3f_sabr.jpg",
    },
    {
      name: "Photo of Willie\u00a0Keeler+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/0/074d42fd_sabr.jpg",
    },
    {
      name: "Photo of Bill\u00a0Terry+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/4/4281b131_sabr.jpg",
    },
    {
      name: "Photo of Lou\u00a0Gehrig+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/c/ccdffd4c_sabr.jpg",
    },
    {
      name: "Photo of George\u00a0Sisler+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/f/f67a9d5c_sabr.jpg",
    },
    {
      name: "Photo of Mule\u00a0Suttles+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/a/a04de7c8_sr.jpg",
    },
    {
      name: "Photo of Jesse\u00a0Burkett+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/5/53d6808e_sabr.jpg",
    },
    {
      name: "Photo of Tony\u00a0Gwynn+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/2/2236deb4_sabr.jpg",
    },
    {
      name: "Photo of Nap\u00a0Lajoie+",
      link: "https://www.baseball-reference.com/req/202308280/images/headshots/a/ac9dc07e_sabr.jpg",
    },
  ];
  const url2 =
    "https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=career&sportId=1&stats=career&group=hitting&limit=16&offset=0&sortStat=avg&order=desc";

  const [players, setPlayers] = useState([]);
  const [photos, setPhotos] = useState([]);

  const getAllTimeAvg = () => {
    axios.get(url2).then((res) => {
      console.log("**", res);
      setPlayers(res.data.stats);
    });
  };

  // Changed array to have enough photos
  let players2 = players.splice(0,photos.length)
  useEffect(() => {
    getAllTimeAvg();
  }, [photos]);

  const matches = [];
  avgPhotos.forEach((photo) => {
    let s = photo.name;

    players.forEach((player) => {
      if (s.includes(player.playerLastName)) {
        const playerWithPhoto = Object.assign(player, photo);
        matches.push(playerWithPhoto);
      }
    });
  });

  console.log("MATCHES", matches);

  return (
    <div class="card" style={{ marginTop: "1rem", width: "25" }}>
      <Container> 
      <Row class="d-flex p-2 bd-highlight">
        <Badge className="Sport">
        <h1>ALL TIME BATTING AVG</h1>

        </Badge>
       {players.map((p, idx, ) => {
        return (
          <Col className="col-xs-4"
          key={p.id}
          >
            <Card
             class="shadow-lg p-3 mb-5 bg-body rounded"
             className="d-flex justify-content-around"
             key={p.id}
             style={{ width: "20rem", height: "18rem", marginTop:'1rem' }}>
             <Card.Header>
                    <Card.Title class="d-flex justify-content-center">
                      
                      <h5 class="fw-bolder">{p.playerName}</h5>{" "}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body class="d-flex justify-content-center">
                    <Badge className= 'Sport'style ={ { height: '14rem'}}>
                    <h5 class="fw-bolder"> # {idx + 1}</h5>
                      <h3 class="fw-bolder"> {p.avg}</h3>
                      <h5>Batting AVG</h5>
                      <Nav>
                        <a  class="nav-link active" href={`/player/${p.playerId}`}>See Stats by Year</a>
                         
                      </Nav>
                    </Badge>
                    <Image style={{ height: "14rem" }}
                    
                    src={p.link} 
                    // src ={`https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${p.playerId}/headshot/silo/current`}

                    
                    
                    thumbnail />
                    {/* <a href={`/player/${p.playerId}`}>See Stats by Year</a> */}
                  </Card.Body>

            </Card>
          {/* <div>
            <h1>
              # {idx + 1}
              {e.playerName}
            </h1>
            <img src={e.link} />
            <h1>{e.PlayerName}</h1>
            <h3>{e.teamName}</h3>
            <h1>AVG: {e.avg}</h1>
            <a href={`/player/${e.playerId}`}>See Stats by Year</a>
          </div> */}
          </Col>
        );
      })}
      </Row>
      </Container>
    </div>
  );
};
export default AllTimeAvg;
