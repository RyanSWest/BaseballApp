import React from 'react'
import {Card, Image, Nav} from 'react-bootstrap'
const Team =({name, logo, roster, id, wins, losses, rank})=> {
  return (
    <Card
      class="d-flex align-items-center"
      style={{ width: "16rem", height: "23rem", marginTop: "1rem" }}
    
    >
    <Card.Header>
        <Card.Title class="d-flex align-items-center">
           <h5 class="fw-bolder"> {name}</h5>
        </Card.Title>
        <Nav>
          <a href = {roster}>See Roster</a>
        </Nav>
      </Card.Header>
      <Card.Body style={{ alignItems: "center" }}>
 
        <Image class = 'img-fluid. max-width: 100%'
         style={{ height: "auto" }} src={logo} alt={logo} thumbnail />
      </Card.Body>
      <Card.Footer>
        <Card.Text
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "1rem",
          }}
        >
        <h6 class="card-text"># {rank}</h6>

          <h6 class="card-text">WINS: {wins}</h6>
          <h6 class="card-text">LOSSES: {losses}</h6>
         </Card.Text>
      </Card.Footer>
    </Card>
     
  )
}

export default Team