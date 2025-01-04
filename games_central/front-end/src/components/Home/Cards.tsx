import React from 'react';
import '../../styles/components/cards/cards.css';

interface InputProps{
    name: string;
    img: string;
}

export default function Card(props : InputProps){
    return(
        <div className="card">
            <img src={props.img} alt="game example" />
            <h2>{props.name}</h2>
        </div>
    );
}