import React from 'react'
import { Table, Container, Card, Image, Header } from "react-bootstrap";


const PitcherCard =({id,name,num, nickName,stats, debut, pos, bats, throws, age, height,weight,dob, city, country}) =>{

  //  Caluclate Career AVG
  let eras = [];

  stats.forEach((e) => {
   eras.push(e.stat.era);
  });

  let total = 0;

  eras.forEach((e) => {
    let a = e * 100;
    total += a;
  });

  let preAvg = Math.round(total / eras.length) / 100;
  let totalERA = preAvg.toFixed(3).toString().slice(0, 4);
  
  let totalWins = stats.map((e)=> {
    return e.stat.wins
  })
  .reduce((a,b)=> a+b)
  
  let totalK =stats.map((e)=> {
    return e.stat.strikeOuts
  })
  .reduce((a,b)=> a+b)

  return (
     
  
 

 




<Container class="container-fluid">
      <Card class="shadow-lg p-3 mb-5 bg-body rounded">
        <Card.Header   class="d-flex justify-content-center">
          <Card.Title  bg ='primary'className="Sport" class="d-flex justify-content-center">
            <h1 class="fw-bolder"
             className ='player-card-name'
            >{name}  </h1>
            <h1 class="fw-bolder"> # {num}</h1>
 
          </Card.Title>
        </Card.Header>
        <Card.Body class="d-flex justify-content-center">
          <Image src ={`https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${id}/headshot/silo/current`}

          alt={name} />
        </Card.Body>
        <Card.Footer class="d-flex justify-content-center">
           <h3 class="fw-bolder">{ nickName}</h3>
        </Card.Footer>
      </Card>

    
      <Table striped="columns">
        <thead>
          <tr>
            <th>MLB Debute</th>
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
            <td>{debut}</td>
            <td>{pos}</td>
            <td> {bats} </td>
            <td> {throws} </td>
            <td> {age} </td>
            <td> { height} </td>

            <td> {weight} </td>
            <td> {dob} </td>
            <td>
              
              {city}, {country} 
            </td>
          </tr>
        </tbody>
      </Table>

      <Table striped="columns">
        <thead>
          <tr>
            <th>Total Years</th>

             <th>Career ERA </th>
            <th>Total Wins</th>
            <th>Career Strikeouts </th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {stats.length} </td>
             <td> {totalERA} </td>
             <td>{totalWins}</td>
             <td>{totalK}</td>
          </tr>
        </tbody>
        <div>
          <h1>Stats by Year</h1>
        </div>
      </Table>

      {/* //battingStats */}

      {stats.map((e) => {
        return (
          <Table striped="columns">
            <thead>
              <tr>
                <th>Year</th>
                <th>Wins</th>
                <th>Batters Faced</th>
                <th>Strike Outs</th>
                <th>Strike %</th>
                <th>ERA </th>
                <th>Win %</th>
               
                <th>Saves</th>
                <th>Shutouts</th>
                 
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{e.season}</td>
                <td>{e.stat.wins}</td>
                <td>{e.stat.battersFaced}</td>
                <td>{e.stat.strikeOuts}</td>
                <td>{e.stat.strikePercentage}</td>
                <td> {e.stat.era} </td>
                <td> {e.stat.winPercentage} </td>
                
                <td> {e.stat.saves} </td>
                <td> {e.stat.shutouts} </td>
               
              </tr>
            </tbody>
          </Table>
         
        );
      })}
    </Container>
  );
    }
  export default PitcherCard