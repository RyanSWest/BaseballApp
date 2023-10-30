import React from "react";
import { useState, useEffect } from "react";
 import Player from "./Player";
import axios from "axios";
 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import '../styles/App.scss'
import {Badge} from 'react-bootstrap';
 
const TopPlayers = () => {
const [players, setPlayers] = useState([]);
const [year, setYear] = useState("2023");

console.log("PLAYERS", players)
   
const eraUrl =`https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=2023&sportId=1&stats=season&group=pitching&gameType=R&limit=100&sortStat=earnedRunAverage&order=des`    
    

  // make an array of years
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step - 1 },
      (value, index) => stop - index * step
    );

  const years = arrayRange(1920, 2023, 1);

  useEffect(() => {
    axios
      .get(
        `https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=${year}&sportId=1&stats=season&group=hitting&gameType=R&limit=100&offset=0&sortStat=onBasePlusSlugging&order=desc`
      )
      .then((res) => setPlayers(res.data.stats));

       
  }, [year]);

   

  
  return (
     <Container> 
      <header className = 'header'>
        <Badge className = 'Sport'  >
        <h1  class = 'fw-bolder'>Top Players</h1>
        <h2 class ='fw-bolder'>{year}</h2>
        
        <label className="label" htmlFor="year">
        Select Year
        <select variant="success" id="dropdown-basic"
          // id="type"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {years.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

        </Badge>
        
 
      </header>
      
       <Row class ="d-flex p-2 bd-highlight"> 
      {players.map((player) => {
        return (
           <Col className="col-xs-6" >
             
          <Player
            key={player.id}
            name={player.playerName}
            pic={player.pic}
            id={player.playerId}
            avg={player.avg}
            logo={player.teamAbbrev}
            hr={player.homeRuns}
            rbi={player.rbi}
            team={player.teamName}
            pos = {player.primaryPosition}
          />
          </Col>
        );
      })}
       
      </Row>
    </Container>
  );
};

export default TopPlayers;
