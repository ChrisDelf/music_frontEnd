//a react page that shows the current jobs that are downloading and allows the user to send links to a backend for download
import MenuBar from '../menuBar/menuBar'
import SongCell from '../jobCell/jobCell';
import { connect } from 'react-redux'
import React,{useEffect, useState} from 'react';
import env from "react-dotenv";
import io from 'socket.io-client';
const api = env.API_ADDRESS;

const handleJobUpdate = (job) =>
{
 // update the job status
}

const Download = () =>{
    // useStates
    const [jobList, setJobList] = useState([]);
    // here is an example array for configuration perpouses

    const exampleArray = [
        {
            name:'example1',
            link:'https://www.example1.com',
            status:'in progress',
        },
        {
            name:'example2',
            status:'in progress',
        },
        {
            name:'example3',
            status:'completed',
        },
        {
            name:'example4',
            status:'inprogress'

        }
    ]

    const styles = {
        main:{
            backgroundColor:'#f1f1f1',
        }
    }

    //Using a useEffect to create a socket connection to the server
    useEffect(() => {
        const socket = io(api);

     socket.on('connect', () => {
      console.log('Connected to socket');
      socket.emit('chat message', 'Hello from client!');
    });

    socket.on('chat message', (msg) => {
      console.log('Received message:', msg);
    });


        return () => {
            socket.disconnect();
    }
},[])

        

     



    return(
        // going to use a foreach loop to create the cards from the exampleArray
        <>
        <MenuBar/>
        {exampleArray.map((job) => {
        return SongCell(job)       
    })}
        </>


    )

}
const mapStateToProps = state => {
    return{}    
}

    //going to use connect to connect my component to the redux store
    //connect takes two parameters:

    export default connect(mapStateToProps,{})(Download);
