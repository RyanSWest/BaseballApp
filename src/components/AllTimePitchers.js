import React from 'react'

import{useState, useEffect} from 'react'
import axios from "axios";
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
  
 
const AllTimePitchers=()=> {

    
    const[so,setSo] = useState([])
    const url2 =
    "https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=career&sportId=1&stats=career&group=pitching&limit=24&offset=0&sortStat=strikeOuts&order=desc";


    useEffect(()=>{

    axios.get(url2)
    .then(res => {
        console.log('PITCHERS'
        ,res.data)
        setSo(res.data.stats)
    })
    .catch(err=>{
        console.log(err.message)
    })

    },[])


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
        {so.map((p, idx) => {
           
          return (
              
            <Col className="col-xs-4">
              <Card
                class="shadow-lg p-3 mb-5 bg-body rounded"
                className="d-flex justify-content-around"
                key = {p.id}
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
                    <h3 class="fw-bolder"> {p.strikeOuts}</h3>
                    <h5>Strike Outs</h5>
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
    
     
  )
}

export default AllTimePitchers