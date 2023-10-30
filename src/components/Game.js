import React from "react";
import { Image, Card, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const Game = ({
  id,
  title,
  date,
  homeScore,
  awayScore,
  homeLogo,
  awayLogo,
  status,
  altLogo,
  homeShortName,
  awayShortName,
}) => {
  const params = useParams(id);
  const navigate = useNavigate();
  const goTo = () => {
    navigate(`/game/${id}`);
  };
 
  return (
    <Card className="game-card">
      {/* <span onClick= {goTo}>See Game Details</span> */}
      <Card.Header
       
      className="go-to-game" onClick={goTo}>
        <Card.Title>
          <h5>{title} {' '}{status}</h5>
         
        </Card.Title>
         
      </Card.Header>
      <Card.Body
      //  className = 'game-card'
      >
        <div className="score">
          <Image
            src={homeLogo}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png&h=200&w=200`;
            }}
            alt={homeShortName}
            class="img-fluid. max-width: 100%"
            className="medium"
          />
          <div>
            <h1 className="score-num">{homeScore}</h1>
          </div>
        </div>
        <div className="score">
          <Image
            src={awayLogo}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png&h=200&w=200`;
            }}
            alt={awayShortName}
            className="medium"
          />
          <h1 className="score-num">{awayScore}</h1>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Game;
