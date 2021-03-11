import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './League.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const League = (props) => {
  const {idLeague, strLeague, strSport} = props.league;
  const [leagueInfo, setLeagueInfo] = useState({});

  useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setLeagueInfo(data.leagues[0]))
  }, [idLeague])

  const {strBadge} = leagueInfo;
  return (
    <div className="card col-10 col-sm-6 col-md-3 p-1 ml-5 mb-2 mt-1 text-center " >
      <img src={strBadge} className="card-img-top card-image" alt={strLeague} />
      <div className="card-body " id="cards-body">

        <h6 className="card-title">{strLeague}</h6>
        <p className="card-text">Sports Type: {strSport}</p>
        <Link to={`/leagueDetail/${idLeague}`} className="btn btn-success">
            Explore <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        
      </div>
    </div>
  );
};

export default League;