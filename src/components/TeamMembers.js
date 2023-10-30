import React from "react";
import data from "../jsonFiles/allRosters.json";
import '../styles/App.scss'
import { useState, useEffect } from "react";
import "../styles/Roster.css";
import { useParams } from "react-router-dom";

import { Table } from "react-bootstrap";

const TeamMembers = (TeamID, Name) => {
  const params = useParams(Name);

  console.log("PARAMs", params.id);
  const [roster, setRoster] = useState([]);

  const image = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/phi.png&h=200&w=200`;

  console.log("DATA", data);

  let s = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${params.id}/headshot/silo/current`;

  let frag =
    "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/";

  console.log(frag.length, s.slice(127, 133));
  const found = data.find((e) => e.team === params.id);

  if (found) {
    console.log(found);
  }
  useEffect(() => {
    if (found) {
      setRoster(found.roster);
    }
  }, [roster]);
  roster.forEach((e) => {
    console.log(e);
    let id = e.image.slice(127, 133);
    console.log("ID", id);
    e.id = id;
  });

   

  if (roster.length < 1) {
    return (
      <div>
        <h1>No Roster Available...Sorry</h1>{" "}
      </div>
    );
  }
  return (
    <div className="Roster">
      <div  >
        {roster.map((e) => {
          return (
            <div className="roster-item">
              <img src={e.image} />
               
              <Table
                striped="columns"
                style={{ marginBottom: "2rem", border: "2px solid" }}
              >
                <thead   >
                <h4 className="roster-name">
                    {e.name} {e.num}
                  </h4>
                  {/* <a href={`/player/${e.id}`}>See Stats</a> */}

                </thead>
                <thead >
                  
                  <tr>
                    <th>Stats</th>
                    <th>Bats/Throws</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Date of Birth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                <td>   <a href={`/player/${e.id}`}>See Stats</a> </td>   

                    <td>{e.bt}</td>

                    <td>{e.ht}</td>

                    <td>{e.wt}</td>
                    <td>{e.dob}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
