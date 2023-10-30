import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {Card, Container,Image} from 'react-bootstrap'
import axios from 'axios'


const GameRoster=()=>{

 const [liveFeed, setLiveFeed] = useState({});
 const [liveData, setLiveData] =useState({})
 const [players, setPlayers]=useState([])
 
 const params = useParams()

 const url = `https://statsapi.mlb.com//api/v1.1/game/${params.id}/feed/live`;
 

 const getFeed = async ()=>{
   await axios.get(url)
   .then((res) => {
    console.log("RES",res.data)
    setLiveFeed(res.data.gameData);
     console.log("LIVE", liveFeed);
  })
  .catch((err) => {
    console.log(err.message);
  });
 }

 const getLiveData = async ()=>{
  await axios.get(url)
  .then((res)=>{
    setLiveData(res.data.liveData)
    setPlayers(res.data.liveData.teams.home.players)


  })
  .catch((err) => {
    console.log(err.message);
  });
 }
 useEffect(()=>{
    getFeed()
    getLiveData()

 },[liveFeed])

  console.log('PLAYERS',players)

 let homePitcher = "";
  let awayPitcher = "";
  let homePitcherPic = "";
  let awayPitcherPic = "";
  
   if (liveFeed.probablePitchers ) {
    homePitcher = liveFeed.probablePitchers.home.fullName;
    awayPitcher = liveFeed.probablePitchers.away.fullName;
    homePitcherPic = liveFeed.probablePitchers.home.link;
    awayPitcherPic = liveFeed.probablePitchers.away.link;
    let playerId = homePitcherPic.slice(15, homePitcherPic.length);
    let playerId2 = awayPitcherPic.slice(15, awayPitcherPic.length);

    homePitcherPic = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${playerId}/headshot/silo/current`;
    awayPitcherPic = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${playerId2}/headshot/silo/current`;
  } else {
    console.log("No Live Feed");
  }

//   if(liveData){
//   console.log(liveData.boxscore.teams.away)
// }
  if(!liveFeed ){ return(<div>Loading...</div>)}
  return (
    <Container fluid>GameRoster

 
<div className ='pitchers'>
          <Card>
            <Card.Header>
            <Card.Title class="d-flex justify-content-center">
            <h5 class="fw-bolder">{homePitcher}</h5>
          </Card.Title>

            </Card.Header>
         
          <Card.Body style={{ alignItems: "center" }}>
            <Image
              class="img-fluid. max-width: 100%"
              style={{ height: "14rem" }}
              src={homePitcherPic}
            />
          </Card.Body>
        </Card>   

        {/* //Away Pitcher */}
        <Card>
            <Card.Header> 
          <Card.Title class="d-flex justify-content-center">
            <h5 class="fw-bolder">{awayPitcher}</h5>

          </Card.Title>
          </Card.Header>
          <Card.Body style={{ alignItems: "center" }}>
            <Image
              class="img-fluid. max-width: 100%"
              style={{ height: "14rem" }}
              src={awayPitcherPic}
            />
          </Card.Body>
        </Card> 
        
      </div>

    
     



    </Container>
  )
}

export default GameRoster