
import React from 'react'
 
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

 import TopPlayers from './TopPlayers';
import TopHomers from './TopHomers';
import TopPitchers from './TopPitchers';

const TopTabs=()=> {

    const [key, setKey] = useState('Obps');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Obps" title="Top Players">
        <TopPlayers/>
      </Tab>
      <Tab eventKey="Hr" title="Home Runs">
         
         <TopHomers/>
      </Tab>
      <Tab eventKey='Pitch' title= 'Pitchers'>
        
      <TopPitchers/>


       </Tab>
      
       
      
    </Tabs>
  )
}

export default TopTabs