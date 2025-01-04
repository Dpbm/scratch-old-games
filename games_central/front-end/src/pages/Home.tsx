import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Home/Cards';
import { useHistory } from 'react-router-dom';
import '../styles/pages/home.css';
import api  from '../services/api';

interface GetElements{
    name: string;
    img: string;
}

export default function Home(){
    const navigate = useHistory();
    const [ data, setData ] = useState<GetElements[]>([]);
    

    useEffect(() => {
        api.get('/all')
            .then((response) => {
                setData(response.data);
            })
    }, [])
    
    return(
        <div className="container-body">
            <div className="container-cards">
                {
                    data.map((element : GetElements, index : number) => {
                        return(
                            <div id="container-card" onClick={() => {
                                    navigate.push(`/game/${index}`);
                            }}>
                                <Card key={index} img={element.img} name={element.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    
}