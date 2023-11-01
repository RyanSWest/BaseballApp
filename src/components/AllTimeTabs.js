import React from 'react'
 
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

 import AllTime from './AllTime';
import AllTimeAvg from './AllTimeAvg';
import AllTimePitchers from './AllTimePitchers';

const AllTimeTabs=()=> {

    const [key, setKey] = useState('HR');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="HR" title="Home Runs">
        <AllTime/>
      </Tab>
      <Tab eventKey="AVG" title="Batting AVG">
         
         <AllTimeAvg/>
      </Tab>
      <Tab eventKey='Pitch' title= 'Pitchers'>


        <AllTimePitchers/>
      </Tab>
       
      
    </Tabs>
  )
}

export default AllTimeTabs