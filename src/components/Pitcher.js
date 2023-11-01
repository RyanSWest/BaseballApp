// import '../App.css'
 
import '../styles/App.scss';

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card, Container, Image, Row, Column } from "react-bootstrap";

const Pitcher = ({ name,  pic, id,era,wins   }) => {
  const key = id;
  let params = useParams(id);
  const navigate = useNavigate();
  const goTo = () => {
    navigate(`/player/${id}`);
  };
  // const hat = logo.toLowerCase();

  // let image = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${hat}.png&h=200&w=200`;

  // if (pic) {
  //   image = pic;
  // }

  return (
    <Card
      class="d-flex align-items-center"
      style={{ width: "16rem", height: "23rem", marginTop: "1rem" }}
       onClick={goTo}
      // className ='Pitcher'
    >
      
      <Card.Header
      //  className='Pitcher'
       >
        <Card.Title class="d-flex justify-content-center">
          <h5 class="fw-bolder">{name}</h5>
        </Card.Title>
      </Card.Header>
      <Card.Body style={{ alignItems: "center" }}>
        <Image class = 'img-fluid. max-width: 100%'
         style={{ height: "14rem" }} 
         className='player'
         
         src ={`https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/${id}/headshot/silo/current`}
        
        //  src={image}
         
         
        //  alt={logo} 
         thumbnail />
      </Card.Body>
      <Card.Footer>
        <Card.Text
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "1rem",
          }}
        >

           <h6 class="card-text">Era: {era}</h6>
          <h6 class="card-text">Wins: {wins}</h6> 
         </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default Pitcher;
