import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StandingsAL from './StandingsAL';
import StandingsNL from './StandingsNL';

function Leagues() {
  const [key, setKey] = useState('AL');
  
  if(!StandingsAL){return <div>Loading..</div>}
  return (
    
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="AL" title="American League">
        <StandingsAL/>
      </Tab>
      <Tab eventKey="NL" title="National League">
         <StandingsNL/>
      </Tab>
       
      
    </Tabs>
  );
}

export default Leagues;