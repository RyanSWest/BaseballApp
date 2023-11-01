 
 
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import  './styles/App.scss'
import { useLocation } from 'react-router-dom';
import News from './components/News'
import Home from './components/Home'
import Player from'./components/Player'
import TopPlayers from './components/TopPlayers';
import TopTabs from './components/TopTabs'
import AllTime from './components/AllTime'
import PlayerCard from './components/PlayerCard'
import StickyNav from './components/Nav'
import AllTimeAvg from './components/AllTimeAvg';
import TeamMembers from './components/TeamMembers';
import Leagues from './components/Tabs';
import Schedule from './components/Calendar'
import Teams from './components/Teams';
import GameDetails from './components/GameDetails';
import GameTabs from './components/GameTabs';
import AllTimeTabs from './components/AllTimeTabs';
import 'bootstrap/dist/css/bootstrap.min.css';

import{Container,Navbar} from 'react-bootstrap'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
 

 const bannerUrl ='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2ODUxNTgwNzQ4NzAyNzgy/mlb_athletics_x162951_1670-1.webp'
 var sectionStyle = {
  backgroundImage: bannerUrl
}


function App() {
  // const location = useLocation()
  const key = 'cc292b70a7424579bb12014cd8821f25'
  const navigate = useNavigate()
   
    

   
  const [players, setPlayers] = useState([])
  const [news, setNews]= useState([]);

 
  const [teams, setTeams] = useState([])

  const [team, setTeam] = useState('')

   
  useEffect(()=>{
         axios.get('https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=2023&sportId=1&stats=season&group=hitting&gameType=R&limit=25&offset=0&sortStat=onBasePlusSlugging&order=desc')
  .then (res=> setPlayers(res.data.stats) )
    
  


  },[])



   
   

  const getNews =()=>{ axios.get( 'https://api.sportsdata.io/v3/mlb/scores/json/News?key=cc292b70a7424579bb12014cd8821f25')
      .then(res=>{
        console.log("NEWS ==>", res)
        setNews(res.data)
         
      })


       
}

const getRoster=()=>{
 axios.get (
 `https://api.sportsdata.io/v3/mlb/scores/json/Players/ATL/key=cc292b70a7424579bb12014cd8821f25`

 
 
// ` https://api.sportsdata.io/v3/mlb/projections/json/StartingLineupsByDate/2023-JUL-31?key=cc292b70a7424579bb12014cd8821f25
//  `
// `https://api.sportsdata.io/v3/mlb/projections/json/DepthCharts?key=cc292b70a7424579bb12014cd8821f25`
)

 .then(res=>{
  console.log("NEWTEAM", res.data)
   
 })
}

const goTo =()=>{
  navigate('/')
}
const getStats = ()=>{
  axios.get('https://api.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/2023?key=cc292b70a7424579bb12014cd8821f25')
  .then(res=>{
    console.log("STATS", res.data)
    setTeams(res.data)
    console.log("TEAMS", teams)
  })
}


teams.sort((a,b)=>{

  return b.Wins -a.Wins
})



//  const bannerUrl ='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2ODUxNTgwNzQ4NzAyNzgy/mlb_athletics_x162951_1670-1.webp'
 

 

  return (
    <Container class = 'container-fluid'  >
      <StickyNav class = 'w-100'/>
      <Navbar >
        <a to ='/home'> </a>
        </Navbar>
       
      
    {/* //ROUTING DONE HERE */}

 
<Routes >
   <Route exact path = '/' element ={<Home/>}/>
   <Route  path = '/news' element = {<News news = {news} getNews ={getNews}/>}/>
   <Route path ='/player/:id' element ={<PlayerCard/>}/>
   <Route path = '/all-time' element ={<AllTimeTabs/>}/>
   <Route path = '/all-time-avg' element ={<AllTimeAvg/>}/>

   <Route path = '/leaders' element ={<TopTabs/>}/>

   <Route path ='/roster/:id' element ={<TeamMembers/>} />

   <Route path ='game/:id' element ={<GameTabs/>}/>
   <Route path ='/teams' element = {<Teams/>}/>
   <Route path ='/standings' element = {<Leagues/>}/>
   <Route path ='/schedules'  element ={<Schedule/>}/>

   
  </Routes>
  

  {/* ROUTING DONE HERE */}
       
       

      
    </Container>
  );
}

export default App;
