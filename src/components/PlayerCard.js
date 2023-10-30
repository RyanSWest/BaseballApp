import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/App.scss";
import data from "../jsonFiles/allRosters.json";
import PitcherCard from "./PitcherCard";
import { Table, Container, Card, Image, Header } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
const PlayerCard = (pic) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  
  let params = useParams();

  const URL = `https://statsapi.mlb.com/api/v1/people/v1/${params.id}?hydrate=currentTeam,team,stats(type=[yearByYear,yearByYearAdvanced, RegularSeason, Advanced,availableStats](team(league)),leagueListId=mlb_hist)&site=en`;

  const getPlayerData = () => {
    axios
      .get(
        `https://statsapi.mlb.com/api/v1/people/${params.id}?hydrate=currentTeam,team,stats(type=[yearByYear,yearByYearAdvanced, RegularSeason, Advanced,availableStats](team(league)),leagueListId=mlb_hist)&site=en
           `
      )

      .then((res) => {
        console.log("NEW DATA", res.data.people);
        setData(res.data.people);
      })
      .catch((err) => {
        console.log(err);

        setError(err.message);
      });
  };

  useEffect(() => {
    getPlayerData();
  }, [params.id]);

  console.log("READY", data[0]);
  console.log("OR THIS?", data);
  const player = data;
  const p2 = data[0];
  // const logo = data.currentTeam.abbreviation
  // const image =`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${logo}.png&h=200&w=200`

  if (!p2) return <div>Loading Player Data...</div>;
  const logo = p2.currentTeam.abbreviation;
  const image = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${logo}.png&h=200&w=200`;

  ///Have to flatten array several times to get the right DATA
  let arr = p2.stats;
  let arr2 = arr.flat(arr.length);
  let arr3 = arr2.flat(arr2.length);

  let splits = [];
  arr3.forEach((e) => {
    if (e.hasOwnProperty("splits")) {
      splits.push(e.splits);
    }
  });

  let splitzz = splits.flat(splits.length);

  let statz = [];
  splitzz.forEach((s) => {
    if (s.hasOwnProperty("stat")) {
      statz.push(s);
    }
  });

  //   got the data now

  let realStats = [];

  statz.forEach((e) => {
    if (e.hasOwnProperty("season")) {
      realStats.push(e);
    }
  });
  let half = Math.floor(realStats.length / 2);

   

  realStats = realStats.slice(0, half).toReversed();

  let totalHR = realStats
    .map((e) => {
      return e.stat.homeRuns;
    })
    .reduce((a, b) => a + b);

  let totalRBI = realStats
    .map((e) => {
      return e.stat.rbi;
    })
    .reduce((a, b) => a + b);
    let totalSB = realStats
    .map((e) => {
      return e.stat.stolenBases;
    })
    .reduce((a, b) => a + b);

  let totalHits = realStats
    .map((e) => {
      return e.stat.hits;
    })
    .reduce((a, b) => a + b);

    let totalAB = realStats
    .map((e) => {
      return e.stat.atBats;
    })
    .reduce((a, b) => a + b);

  console.log("ID", params.id);

  let avgs = [];
   

  realStats.forEach((e) => {
    avgs.push(e.stat.avg);
  });

   
  const slg = realStats.map((e) => e.stat.slg);

  const obps = realStats.map((e) => e.stat.obp);
  const ba = realStats.map((e)=> e.stat.avg)
  
  //function to calculate avg stat:

  let getAvg = (a) => {
    let total = 0;
    a.forEach((e) => {
      let a = e *100;
      total += a;
    });
    let preAvg = Math.round(total / a.length)/100;
    let totalAvg = preAvg.toFixed(3).toString().slice(1, 5);

    return totalAvg;
  };

  const totalSlg= getAvg(slg)
  const totalObp = getAvg(obps)
  const totalAvg =getAvg(ba)

  console.log('SLG', totalSlg, slg)
  console.log('aa', getAvg(avgs))

    

  

  let currSeason = realStats[0].season;
  let currAvg = realStats[0].stat.avg;
  let currHR = realStats[0].stat.homeRuns;
  let currRBI = realStats[0].stat.rbi;

  if (
    p2.primaryPosition.name == "Pitcher" ||
    p2.primaryPosition.name == "Two-Way Player"
  )
    return (
      <PitcherCard
        key={p2.id}
        id={params.id}
        pic={p2.pic}
        name={p2.fullName}
        num={p2.primaryNumber}
        nickname={p2.nickName}
        stats={realStats}
        debut={p2.mlbDebutDate}
        pos={p2.primaryPosition.name}
        bats={p2.batSide.description}
        throws={p2.pitchHand.description}
        age={p2.currentAge}
        height={p2.height}
        weight={p2.weight}
        dob={p2.birthDate}
        city={p2.birthCity}
        country={p2.birthCountry}
      />
    );
  if (!p2)
    return (
      <Spinner animation="border" >
        <span>Loading Player Data...</span>
        </Spinner>
    );

  return (
    <Container class="container-fluid">
      <Card class="shadow-lg p-3 mb-5 bg-body rounded">
        <Card.Header class="d-flex justify-content-center">
          <Card.Title
            bg="primary"
            className="Sport"
            class="d-flex justify-content-center"
          >
            <h1 class="fw-bolder"
             className = 'player-card-name'
            >{p2.fullName} </h1>
            <h1 class="fw-bolder"> # {p2.primaryNumber}</h1>
          </Card.Title>
        </Card.Header>
        <Card.Body class="d-flex justify-content-center">
          <Image
            src={`https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${params.id}/headshot/silo/current`}
            alt={p2.fullName}
          />
        </Card.Body>
        <Card.Footer class="d-flex justify-content-center">
          <h3 class="fw-bolder">{p2.nickName}</h3>
        </Card.Footer>
      </Card>

      <Table striped="columns"
      style ={{marginBottom: '2rem',border:'2px solid'}}
     
      
      >
        <thead>
          <tr>
            <th>MLB Debut</th>
            <th>Position</th>
            <th>Bats</th>
            <th>Throws</th>
            <th>Age</th>
            <th>Height </th>
            <th>Weight </th>
            <th> Birthdate </th>
            <th> Birthplace </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{p2.mlbDebutDate}</td>
            <td>{p2.primaryPosition.name}</td>
            <td> {p2.batSide.description} </td>
            <td> {p2.pitchHand.description} </td>
            <td> {p2.currentAge} </td>
            <td> {p2.height} </td>

            <td> {p2.weight} </td>
            <td> {p2.birthDate} </td>
            <td>
              {p2.birthCity}, {p2.birthCountry}
            </td>
          </tr>
        </tbody>
      </Table>
      <div  class="d-flex justify-content-center"
       style= {{border:'2px solid'}}
      
      >
         <h2>Career Stats</h2>
      </div>
      <Table striped="columns"
         style= {{border:'2px solid'}}
      >
        <thead>
          <tr >
            <th>Total</th>
            <th>Team</th>
            <th>At Bats</th>
            <th>  AVG </th>
            <th>  Hits</th>
            <th>  HR </th>
            <th>  RBI </th>
            <th>  SB</th>
            <th>   OBP%</th>
            <th>  SLG%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{realStats.length}</td>
            <td>{p2.currentTeam.abbreviation}</td>
            <td>{totalAB}</td>
            <td> {totalAvg} </td>
            <td>{totalHits}</td>
            <td> {totalHR} </td>
            <td> {totalRBI} </td>
            <td> {totalSB}</td>
            <td>{totalObp}</td>
            <td>{totalSlg}</td>
          </tr>
        </tbody>
        <div>
          {/* <h1>Stats by Year</h1> */}
        </div>
      </Table>
      <div  class="d-flex justify-content-center"
       style= {{border:'2px solid'}}
      >
         <h2>Year by Year Stats</h2>
      </div>

      {/* //battingStats */}

      {realStats.map((e) => {
        return (
          <Table striped="columns"
          style = {{border:'2px solid'}}
          >
            <thead>
              <tr>
                <th>Year</th>
                <th> Team</th>
                <th>At Bats</th>
                <th>AVG</th>
                <th>Hits</th>
                <th>HR</th>
                <th>RBIS</th>
                <th>SB:</th>
                <th>OBP%</th>
                <th>SLG%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{e.season}</td>
                {e.team ? <td>{e.team.abbreviation}</td> : <td> </td>}
                <td>{e.stat.atBats}</td>
                <td> {e.stat.avg} </td>
                <td> {e.stat.hits} </td>
                <td> {e.stat.homeRuns} </td>
                <td> {e.stat.rbi} </td>
                <td> {e.stat.stolenBases} </td>
                <td> {e.stat.obp} </td>
                <td>{e.stat.slg}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </Container>
  );
};

export default PlayerCard;
