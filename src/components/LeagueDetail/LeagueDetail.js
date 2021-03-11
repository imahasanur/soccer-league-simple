import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './LeagueDetail.css';
import { faCalendarCheck, faFlag, faFootballBall, faGenderless } from '@fortawesome/free-solid-svg-icons';
import maleTeam from '../../images/male.png';
import femaleTeam from '../../images/female.png';

const LeagueDetail = () => {
  let {id} = useParams();
  const [leagueDetails, setLeagueDetails] = useState({});

  useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setLeagueDetails(data.leagues[0]))
  }, [id])
  const {dateFirstEvent, strBadge, strBanner, strCountry, strFacebook, strGender, strLeague, strSport, strTwitter, strYoutube} = leagueDetails;
  return (
    <div>
      <div className="banner-container" style={{backgroundImage:`url(${strBanner})`}}>
        <img className="league-badge" src={strBadge} alt="" />
      </div>
      <div className="container-fluid row justify-content-center align-items-center short-details mt-3">
        <div className=" offset-1 col-sm-10 col-md-5 p-2 ">
          <p><FontAwesomeIcon icon={faCalendarCheck} /> Founded: {dateFirstEvent}</p>
          <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
          <p><FontAwesomeIcon icon={faFootballBall} /> Sports Type: {strSport}</p>
          <p><FontAwesomeIcon icon={faGenderless} /> Gender: {strGender}</p>
        </div>
        <div className="col-sm-10 col-md-5 p-3 ">
          {
            strGender && strGender.toLowerCase() === "male" ?
              <img className="img-fluid" src={maleTeam} alt="Male team" /> :
              <img className="img-fluid" src={femaleTeam} alt="Female or Male and Female team" />
          }
        </div>
      </div>
      <div className=" long-details m-5 p-5">
        <h2 className="text-center">About {strLeague}</h2>
        <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quis maiores illo perferendis labore provident sapiente repellat reiciendis doloremque minus.dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum quis, minima placeat reiciendis deserunt atque asperiores ipsa optio doloribus! Totam assumenda quae provident alias qui aut ad quas sunt? amet consectetur, adipisicing elit. Aut, aliquam distinctio nostrum quidem, alias illum veniam odit amet ipsa, assumenda autem. Ipsam accusantium ex consequatur hic excepturi in maiores mollitia.</p>
        <p>Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti ratione, fuga eos non est magni repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestiae soluta consequatur eligendi veritatis labore asperiores odio commodi cumque omnis velit provident inventore, nesciunt cum dolore tempore quo mollitia! Laudantium excepturi, et deleniti blanditiis delectus facere? Id voluptatibus deleniti autem delectus assumenda necessitatibus! Earum placeat vel porro exercitationem libero modi. dolores quos quaerat harum optio. Adipisci quos alias, inventore dolor recusandae pariatur suscipit.dolor sit amet consectetur adipisicing elit. Itaque nisi modi veritatis explicabo molestias maxime, voluptate vitae? Quas, quisquam exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, error?</p>
      </div> 
      <div className=" d-flex justify-content-center align-items-center p-2 m-2 contact-us">
        <h5>Follow Us:</h5>
        <div className="social-icons ml-3 "> 
          <a className="mr-2" href={strFacebook}><FontAwesomeIcon icon ={faFacebook} /> </a>
          <a className="mr-2" href={strTwitter}><FontAwesomeIcon icon ={faTwitter} /></a>
          <a className="mr-2" href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetail;