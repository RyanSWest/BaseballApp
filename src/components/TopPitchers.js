import React from "react";
import { useState, useEffect } from "react";
import Pitcher from './Pitcher'
import axios from 'axios'

import { Card, Container, Image, Row, Col} from "react-bootstrap";
 
import "../styles/App.scss";
import { Badge } from "react-bootstrap";

const TopPitchers = () => {
  const [era, setEra] = useState([]);
  const [wins, setWins] = useState([]);
  const [year, setYear] = useState("2023");
 
  // make an array of years
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step - 1 },
      (value, index) => stop - index * step
    );

  const years = arrayRange(1920, 2023, 1);
  const eraUrl = `https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=${year}&sportId=1&stats=season&group=pitching&gameType=R&limit=50&sortStat=earnedRunAverage&order=des`;
  const winUrl = `https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=${year}&sportId=1&stats=season&group=pitching&gameType=R&limit=25&sortStat=wins&order=des`;

  const getWins = () => {
    axios.get(winUrl).then((res) => setWins(res.data.stats));
  };

  const getEra = () => {
    axios.get(eraUrl).then((res) => setEra(res.data.stats));
  };

  useEffect(() => {
    getEra();
    getWins();
  }, [year]);

   
 era.sort((a,b)=> b.wins -a.wins)
  
  if(era.length<1){return <div><h2>Loading..</h2></div>}
  return (
    <Container>
      <header
        className="header"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/background/20230522/original/pngtree-baseball-field-in-a-3d-animated-video-picture-image_2693316.jpg)",
        }}
      >
        <Badge className="Sport">
          <h1 class="fw-bolder">Top Players</h1>
          <h2 class="fw-bolder">{year}</h2>

          <label className="label" htmlFor="year">
            Select Year
            <select
              variant="success"
              id="dropdown-basic"
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
       {era.map((e)=>{
         return (
            <Col className="col-xs-6" >

                <Pitcher
                 name = {e.playerName}
                 era = {e.era}
                 wins = {e.wins}
                 pic = {`https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${e.playerId}/headshot/silo/current`}
                 id = {e.playerId}
                />
 
          </Col>



        )
      })}

      </Row>
    </Container>
  );
};

export default TopPitchers;
