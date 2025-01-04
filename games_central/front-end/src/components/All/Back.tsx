import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import '../../styles/components/back/back.css';

interface PropsBack{
    title?: string;
}

export default function Back(props : PropsBack){
    const navigate = useHistory();
    return(
        <div id="container-header">
            <div id="container-arrow">
                <BiArrowBack id="back" size={30} onClick={() => {
                    navigate.goBack();
                }}></BiArrowBack>
            </div>
            <div id="container-title">
                <div id="title">{props?.title}</div>
            </div>
        </div>
    );
}