import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GameDetails from './GameDetails';
import GameHighlights from './GameHighlights';
 
const GameTabs=()=>{


const [key, setKey] = useState('GT');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="GT" title="Game Details">
        <GameDetails/>
      </Tab>
      <Tab eventKey="GH" title="Game Highlights">
         
         <GameHighlights/>
      </Tab>
       
      
    </Tabs>
  )
}

export default GameTabs