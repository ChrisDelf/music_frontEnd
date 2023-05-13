// this component will be a cell that keeps track of the state of the song download
// the props that I will need are name and status
// status will be a  string

import React,{useEffect, useState, useWebSocket} from 'react';
import env from "react-dotenv";

export default function SongCell(props) {
    // we will deconstruct the props into name and status
    const { name, status } = props;

 

    

    return (
        <div className = "song-cell-container">
            <p>{name}</p>
            <p>{status}</p>
        </div>
    )

}