import React, { useEffect, useState } from 'react';
// material ui
import Container from '@mui/material/Container';

//redux
import { connect } from 'react-redux'
//component
import MenuBar from '../menuBar/menuBar.js'
import MusicPlayer from '../musicPlayer/musicPlayer.js'
// user actions
import {getAudioTrack} from '../../actions/user'
import {selectSong} from '../../actions/user'


const Homepage = (props) => {
  const { audioMain } = props
  const [page, setPage] = useState("Homepage")
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
    }
  }
  const setAudio = async () => {
   if(props.currentSong.id != null)
    { 
      await props.getAudioTrack(props.currentSong.id)
      audioMain.volume = parseFloat(props.audioVolume)
    }
    else
    {

    }
  }
  useEffect(() => {
    
  }, [props.currentSong])

  useEffect(() => {
    props.selectSong(1)
    
    setAudio()
    console.log(props.currentSong.audio)

  }, [page])
  return (
    <>
      <div className="main" style={styles.main}>
        <MenuBar setPage={setPage} />
      </div>
      <div>
        Newest Songs
        <MusicPlayer audioMain={audioMain} />
      </div>

    </>
  )
}

const mapStateToProps = state => {
  return{
    currentSong: state.userReducer.currentSong,
    audioVolume: state.userReducer.audioVolume

  }
}
export default connect(mapStateToProps, {selectSong, getAudioTrack})(Homepage)
