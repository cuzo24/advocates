import React from 'react';

import {Card} from './AdvocateCard.styles.js';
import Waves from '../Waves/Waves.jsx';

export default function AdvocateCard(props) {
  return (
    <Card>
      <figure className="card__figure">
        <img className="card__img" src={props.profilePic} alt={`Profile pic of ${props.username}`} />
      </figure>
      <div className="card__body">
        <Waves type={Math.floor(Math.random() * 4) + 1}/>
        <h3 className="card__title">{props.name}</h3>
        <p>@{props.username}</p>
        {props.twitter && <a href={props.twitter}>Twitter</a>}
      </div>
    </Card>
  );
}