import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ControlledTabsExample from "./Tabs";
import { useLocation } from "react-router-dom";
import News from "./News";
import Game from './Game';
import {
  Row,
  Col,
  Button,
  Badge,
  Container,
  Card,
  Image,
} from "react-bootstrap";
import Scroll from "./Carousel";

 

function App() {
  // const location = useLocation()
  const key = "cc292b70a7424579bb12014cd8821f25";
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);
  const [news, setNews] = useState([]);

  const [teams, setTeams] = useState([]);

  const [games, setGames] = useState([]);
 
  const [team, setTeam] = useState("");
  const [roster, setRoster] = useState([]);

  

  const date = new Date();
  var mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  console.log("DATE", year, mS[month], day);
  const dateUrl = `${year}-${mS[month]}-${day}`;
  const today = `${year}-${month}-${day}`;
  const gameDate=  `${mS[month]}-${day}-${year}`

  // const currGameUrl =`https://api.sportsdata.io/v3/mlb/stats/json/BoxScores/${dateUrl}?key=cc292b70a7424579bb12014cd8821f25`

  const currGameUrl = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=2023-10-27&endDate=2023-11-04&gameType=&language=en&leagueId=&hydrate=team,linescore,xrefId,flags,review,broadcasts(all),game(content(media(epg),summary),tickets),seriesStatus(useOverride=true),statusFlags,story&sortBy=gameDate,gameType,gameStatus&timeZone=America/New_York`;


  const testUrl = `https://statsapi.mlb.com/api/v1/game/748542/content`


   const test2="https://statsapi.mlb.com//api/v1.1/game/748535/feed/live"
  useEffect(() => {
    
    axios
      .get(currGameUrl)
      .then((res) => {
        console.log("RESS", res.data.dates);
        setGames(res.data.dates);
      })
      .catch((err) => {
        console.log("ERR", err.message);
      });
  }, []);

  let g = [];

 
  console.log("SCROLL", Scroll);

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step - 1 },
      (value, index) => stop - index * step
    );

  const years = arrayRange(1990, 2023, 1);

  
  let top100 = `https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=2023&sportId=1&stats=season&group=hitting&gameType=R&limit=100&offset=0&sortStat=onBasePlusSlugging&order=desc`;

  

  

  

   
 

  
  console.log('GAMES',games)
  
  let ballGames = [];

  games.forEach((e)=>{
   
    ballGames.push(e.games[0])
  })

   console.log("BALL",ballGames)
   ballGames.forEach((b)=>{
    })
  
  return (
    <Container
      class="container-fluid"
      //  style ={{backgroundImage: "url(https://media.istockphoto.com/id/1143984948/photo/baseball-field-in-outdoor-stadium-with-copy-space.jpg?s=612x612&w=0&k=20&c=6tOQS1EILSQbGV2rC5IVcI5P4Ohfy83fZ5YcOruUvJA=)"}}
    > 
       <Scroll />


       <Container className ='game-conatiner'> 
      <Row class ="d-flex p-2 bd-highlight"> 

      {ballGames.map((e) => {
        return (
          <Col className="col-xs-6" >
         
           {e.status.detailedState}
            <Game
            id = {e.gamePk}
            status ={e.status.detailedState}
             title ={e.description}
             homeTeam ={e.teams.home.team.name}
             awayTeam = {e.teams.away.team.name}
             homeShortName ={e.teams.home.team.shortName}
             awayShortName ={e.teams.away.team.shortName}
             homeLogo = {`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.teams.home.team.teamCode}.png&h=200&w=200`}
            awayLogo = {`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.teams.away.team.teamCode}.png&h=200&w=200`}
             homeScore = {e.teams.home.score}
             awayScore = {e.teams.away.score}
             date ={gameDate}
            />
              
              </Col>

              
             
         
        );
      })}

</Row>
    </Container>
    </Container>
  );
}

export default App;
