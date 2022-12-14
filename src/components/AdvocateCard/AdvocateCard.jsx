import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Waves from '../Waves/Waves.jsx';

// Styles
import { Card } from './AdvocateCard.styles.js';

// Images
import twitterLogo from '../../assets/images/twitter.svg';

export default function AdvocateCard(props) {
  const navigate = useNavigate();
  const name = (
    props.name.includes('|')
      ? props.name.split('|')[0]
      : props.name.split('-')[0]
  );

  return (
    <Card onClick={() => navigate(`${props.username}`)}>
      <div className="card__figure__wrapper">
        <figure className="card__figure">
          <img className="card__img" src={props.profilePic} alt={`Profile pic of ${props.username}`} />
        </figure>
      </div>
      <div className="card__body">
        <Waves type={Math.floor(Math.random() * 6) + 1} />
        <h3 className="card__title">{name}</h3>
        <p>@{props.username}</p>
        {
          props.twitter &&
          <div className="card__twitter">
            <a href={props.twitter}>
              <img src={twitterLogo} alt="Twitter logo"/>
            </a>
          </div>
        }
      </div>
    </Card>
  );
}