import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../services/api';
import { FaPlay } from 'react-icons/fa';
import Back from '../components/All/Back';

import '../styles/pages/game.css';

interface Params{
    id: string;
}

interface DataState{
    name: string; 
    text: string; 
    img: string;
    credit: string;
}

export default function Game(){
    const { id } = useParams<Params>();
    const navigate = useHistory();
    const [data, setData] = useState<DataState>();

    useEffect(() => {
        api.get(`/game/${parseInt(id)}`)
            .then((response) => {
                setData(response.data);
            })
    }, [id])



    return (
        <div id="container-data">
            <Back title={data?.name} />
            <section>
               
                <img src={data?.img} alt="game example"/>
                <div id="container-play">
                    <div id="back-play" onClick={() => {
                            navigate.push(`/play/${id}`);
                        }} >
                        <FaPlay size={30} id="play" />
                        <p>Play</p>
                    </div>
                </div>
                
            </section>
            <aside>
                <div id="container-title">
                    <div id="title">{data?.name}</div>
                </div>
                <div id="container-text">
                    <div id="text">{data?.text}</div>
                </div>
                
                <div id="credit">{data?.credit}</div>
            </aside>
            
            
        </div>

    );
}