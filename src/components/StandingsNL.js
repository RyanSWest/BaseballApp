import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {   Container, Table } from "react-bootstrap";
import "../styles/App.scss";
const StandingsNL = () => {
  const [teams, setTeams] = useState([]);

  const[year,setYear]= useState('2023')
   // make an array of years
   const arrayRange = (start, stop, step) =>
   Array.from(
     { length: (stop - start) / step - 1 },
     (value, index) => stop - index * step
   );

 const years = arrayRange(2004, 2023, 1);


  const URL = `https://api.sportsdata.io/v3/mlb/scores/json/Standings/${year}?key=f818c6af02ac4fbcb909c5cf8255d591
    `;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [teams]);

  const AlCentral = teams.filter((t) => {
    if (t.League === "AL" && t.Division === "Central") {
      return t;
    }
  });

  const AlWest = teams.filter((t) => {
    if (t.League === "AL" && t.Division === "West") {
      return t;
    }
  });

  const AlEast = teams.filter((t) => {
    if (t.League === "AL" && t.Division === "East") {
      return t;
    }
  });
  const NlWest = teams.filter((t) => {
    if (t.League === "NL" && t.Division === "West") {
      return t;
    }
  });

  const NlEast = teams.filter((t) => {
    if (t.League === "NL" && t.Division === "East") {
      return t;
    }
  });
  const NlCentral = teams.filter((t) => {
    if (t.League === "NL" && t.Division === "Central") {
      return t;
    }
  });
 

  if(teams.length<1){return <div>Loading...</div>}

  return (
    <Container>
        <div class = 'w-100' className ='year-select'>
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

      </div>


      <Table striped="columns">
        <thead>
          <tr>
            <div class="w-100">
              <img
                class="small"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbfvp2SP7e-WxL2GF6osYEX3rH6ivXguO2KDTJbajlizzm50xtw2c8qlvqL0r9ZrIBTM&usqp=CAU"
                }
              />
            </div>

            <th>East</th>

            <th>W</th>
            <th>L</th>
            <th>PCT</th>
            <th>GB</th>
            <th>RS</th>
            <th>RA</th>
            <th>DIV</th>
            <th>Home</th>
            <th>Road</th>
            <th>L10</th>
            <th>STRK</th>
          </tr>
        </thead>

        {NlEast.map((e) => {
          return (
            <tbody>
              <tr>
                <img
                  class="small"
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.Key}.png&h=200&w=200`}
                />

                <td>{e.City} </td>
                <td> {e.Wins}</td>
                <td>{e.Losses}</td>
                <td>{e.Percentage.toFixed(3)}</td>
                <td>{e.GamesBehind}</td>
                <td>{e.RunsScored}</td>
                <td>{e.RunsAgainst}</td>
                <td>
                  {e.DivisionWins}-{e.DivisionLosses}
                </td>
                <td>
                  {e.HomeWins}-{e.HomeLosses}
                </td>
                <td>
                  {e.AwayWins}-{e.AwayLosses}
                </td>
                <td>
                  {e.LastTenGamesWins}-{e.LastTenGamesLosses}
                </td>
                <td>{e.Streak}</td>
              </tr>
            </tbody>
          );
        })}
        <thead>
          <tr>
            <th class="TableBase-headTh">Central </th>
            <th></th>
            <th>W</th>
            <th>L</th>
            <th>PCT</th>
            <th>GB</th>
            <th>RS</th>
            <th>RA</th>
            <th>DIV</th>
            <th>Home</th>
            <th>Road</th>
            <th>L10</th>
            <th>STRK</th>
          </tr>
        </thead>

        {NlCentral.map((e) => {
          return (
            <tbody>
              <tr>
                <img
                  class="small"
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.Key}.png&h=200&w=200`}
                />
                <td>{e.City} </td>
                <td> {e.Wins}</td>
                <td>{e.Losses}</td>
                <td>{e.Percentage.toFixed(3)}</td>
                <td>{e.GamesBehind}</td>
                <td>{e.RunsScored}</td>
                <td>{e.RunsAgainst}</td>
                <td>
                  {e.DivisionWins}-{e.DivisionLosses}
                </td>
                <td>
                  {e.HomeWins}-{e.HomeLosses}
                </td>
                <td>
                  {e.AwayWins}-{e.AwayLosses}
                </td>
                <td>
                  {e.LastTenGamesWins}-{e.LastTenGamesLosses}
                </td>
                <td>{e.Streak}</td>
              </tr>
            </tbody>
          );
        })}
        <thead>
          <tr>
            <th class="TableBase-headTh">West </th>
            <th></th>
            <th>W</th>
            <th>L</th>
            <th>PCT</th>
            <th>GB</th>
            <th>RS</th>
            <th>RA</th>
            <th>DIV</th>
            <th>Home</th>
            <th>Road</th>
            <th>L10</th>
            <th>STRK</th>
          </tr>
        </thead>

        {NlWest.map((e) => {
          return (
            <tbody>
              <tr>
                <img
                  class="small"
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${e.Key}.png&h=200&w=200`}
                />
                <td>{e.City} </td>
                <td> {e.Wins}</td>
                <td>{e.Losses}</td>
                <td>{e.Percentage.toFixed(3)}</td>
                <td>{e.GamesBehind}</td>
                <td>{e.RunsScored}</td>
                <td>{e.RunsAgainst}</td>
                <td>
                  {e.DivisionWins}-{e.DivisionLosses}
                </td>
                <td>
                  {e.HomeWins}-{e.HomeLosses}
                </td>
                <td>
                  {e.AwayWins}-{e.AwayLosses}
                </td>
                <td>
                  {e.LastTenGamesWins}-{e.LastTenGamesLosses}
                </td>
                <td>{e.Streak}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};

export default StandingsNL;
