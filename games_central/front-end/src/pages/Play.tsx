import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Back from '../components/All/Back';

import '../styles/pages/play.css';

interface Params{
    id: string;
}

export default function Play(){
    const [ link, setLink ] = useState('');
    const { id } = useParams<Params>();

    useEffect(() => {
        api.get(`/play/${id}`)
            .then((response) => {
                setLink(response.data?.link);
            })
    }, [id])

    return(
        <div>
            <div id="container-back">
                <Back />
            </div>
            <div id="container-iframe">
                <iframe src={`${link}/embed`} title="game" allowTransparency={true} id="iframe-game" frameBorder="0" scrolling="no" allowFullScreen></iframe>
            </div>
        </div>

    ) 
}