import { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "../styles/App.scss";
// import '../styles/style.css'
import Game from "./Game";
import { Container, Row, Col, Table, Accordion } from "react-bootstrap";

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const [games, setGames] = useState([]);

  let nextDay = new Date(date);

  nextDay.setDate(date.getDate() + 1);

  let month = date.getMonth() + 1;

  console.log("DAYS", month, nextDay);
  let s = date.toString().split(" ");
  let s2 = date.toString().split(" ");

  const dateUrl = `${s[3]}-${month}-${s[2]}`;
  const nextDayUrl = `${s2[3]}-${month}-${s2[2]}`;
  const currGameUrl = `https://api.sportsdata.io/v3/mlb/stats/json/BoxScores/${dateUrl}?key=cc292b70a7424579bb12014cd8821f25`;
  const scoreUrl = `https://api.sportsdata.io/v3/mlb/stats/json/BoxScores/${dateUrl}?key=cc292b70a7424579bb12014cd8821f25`;

  const p = `https://api.sportsdata.io/v3/mlb/scores/json/SchedulesBasic/2023POST?key=cc292b70a7424579bb12014cd8821f25`;

  const realUrl = `https://bdfed.stitch.mlbinfra.com/bdfed/transform-mlb-schedule?stitch_env=prod&sortTemplate=5&sportId=1&sportId=51&=&=&=&=&=&=&=&=&=&=&startDate=${dateUrl}&endDate=${nextDayUrl}&gameType=E&gameType=S&gameType=R&gameType=F&gameType=D&gameType=L&gameType=W&gameType=A&language=en&leagueId=104&leagueId=103&leagueId=160&contextTeamId=`;

  const url = `http://api.sportsdata.io/v3/mlb/scores/json/ScoresBasic/${dateUrl}?key=cc292b70a7424579bb12014cd8821f25`;
  useEffect(() => {
    axios
      .get(realUrl)
      .then((res) => {
        console.log("RES", res.data);
        setGames(res.data.dates[0].games);
      })
      .catch((err) => {
        console.log("ERR", err.message);
      });
  }, [date]);

  console.log(date, dateUrl);

  //   if(scores.length<1  ) {return <div> No Games for this date {dateUrl}</div>}

  console.log("GAMES", games);

  if (games.length < 1) {
    return (
      <div>
        {" "}
        <h2>No Games Scheduled for this Date </h2> <a hef="/schedules">Back</a>
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h6 class="fw-bolder">Search Dates</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="calendar">
              <h1 className="text-center"> </h1>
              <div className="e-calendar">
                <Calendar
                  className="bg-dark text-white"
                  onChange={setDate}
                  value={date}
                />
              </div>
              <p className="text-center">
                <span className="bold">Selected Date:</span>{" "}
                {date.toDateString()}
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    );
  }
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h6 class="fw-bolder">Search Dates</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className="calendar">
              <h1 className="text-center"> </h1>
              <div className="e-calendar">
                <Calendar
                  className="bg-dark text-white"
                  onChange={setDate}
                  value={date}
                />
              </div>
              <p className="text-center">
                <span className="bold">Selected Date:</span>{" "}
                {date.toDateString()}
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Container className="game-conatiner">
        <Row class="d-flex p-2 bd-highlight">
          {games.map((e) => {
            return (
              <Col className="col-xs-6">
                <Game
                  id={e.gamePk}
                  status={e.status.detailedState}
                  title={e.description}
                  homeTeam={e.teams.home.team.name}
                  awayTeam={e.teams.away.team.name}
                  homeShortName={e.teams.home.team.shortName}
                  awayShortName={e.teams.away.team.shortName}
                  homeLogo={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.teams.home.team.abbreviation.toLowerCase()}.png&h=200&w=200`}
                  awayLogo={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.teams.away.team.abbreviation.toLowerCase()}.png&h=200&w=200`}
                  altLogo={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.teams.away.team.teamCode}.png&h=200&w=200`}
                  homeScore={e.teams.home.score}
                  awayScore={e.teams.away.score}
                  //  date ={gameDate}
                />
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* <Row class ="d-flex p-2 bd-highlight"> 

      {games.map((e) => {
        return (
            <Col className="col-xs-6" >
            <Container class ='border border-primary'
            style= {{marginTop :'1rem'}} > 
          <Table>
            <thead> 
              <tr> 
              
                <th>Team</th>
                <th></th>
                <th>R</th>
                <th>H</th>
                <th>E</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                 
                <td>
                <img
                  class="small"
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.HomeTeam.toLowerCase()}.png&h=200&w=200`}
                /> 
                </td>
                <td>{e.teams.home.shortName}</td>
                <td>{e.teams.home.score}</td>
                <td>{e.HomeTeamHits}</td>
                <td>{e.HomeTeamErrors}</td>
              </tr>
              <tr>
                <td> <img
                  class="small"
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.AwayTeam.toLowerCase()}.png&h=200&w=200`}
                /> </td>
                <td>{e.AwayTeam}</td>
                <td>{e.AwayTeamRuns}</td>
                <td>{e.AwayTeamHits}</td>
                <td>{e.AwayTeamErrors}</td>
              </tr>
            </tbody> */}
      {/* </Table> */}
      {/* </Container>
          </Col> */}
      {/* );
      })} */}
      {/* </Row> */}
    </div>
  );
};

export default Schedule;
