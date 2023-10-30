import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Team from './Team';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Teams=()=>{

   const [teams, setTeams] = useState([])
    const getStats = ()=>{
        axios.get(`https://api.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/2023?key=f818c6af02ac4fbcb909c5cf8255d591`)
        .then(res=>{
          console.log("STATS FROM TEAMS", res.data)
          setTeams(res.data)
          console.log("TEAMS FROM TEAMS", teams)
        })
      }
    
   useEffect(()=> {
    getStats()
   },) 

   
  
   teams.sort((a, b) => {
    return b.Wins - a.Wins;
  });
  let plainNames = []

  teams.forEach(e => {
   let x= e.Name.split(' ')
   let team = x[x.length-1].toLowerCase()
   plainNames.push(team)
  })

 
  let logos = teams.map((e) => e.Team.toLowerCase());

  let logoPics = logos.map((e) => {
    return `https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e}.png&h=200&w=200`;
  });
   console.log(plainNames)

  
  return (
     <Container> 
  <Row class ="d-flex p-2 bd-highlight"> 

      {teams.map(t=> {

        return(
          <Col className="col-xs-6" >

           
            
            <Team
            name = {t.Name}
            logo = {logoPics[teams.indexOf(t)]}
            roster = {`/roster/${plainNames[teams.indexOf(t)]}`}
            rank = {teams.indexOf(t)+1 }
            id = {t.TeamID}
            wins = {t.Wins}
            losses = {t.Losses}
            />
            </Col>
            
        )
      })}
     
    </Row>

     </Container>
  )
  
}

export default Teams