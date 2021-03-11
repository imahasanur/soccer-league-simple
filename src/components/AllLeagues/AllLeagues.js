import React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import League from '../League/League';
import './AllLeagues.css';

const AllLeagues = () => {
  const[allLeagues, setAllLeagues] = useState([]);
  const leagues = allLeagues.slice(0,9);

  useEffect(()=>{
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(url)
    .then(res => res.json())
    .then(data => setAllLeagues(data.leagues))
  },[])
  
  return (
    <div className ="all-leagues">
      <div className="container-fluid row">
        {
          leagues.map( league => <League league={league}></League>)
        }
      </div>
      
    </div>
  );
};

export default AllLeagues;