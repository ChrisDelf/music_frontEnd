import React, { useEffect, useState } from 'react';
// material ui
import Container from '@mui/material/Container';

//redux
import { connect } from 'react-redux'
//component
import MenuBar from '../menuBar/menuBar.js'
import MusicPlayer from '../musicPlayer/musicPlayer.js'

const Homepage = () => {
  const [page, setPage] = useState("Homepage")
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",


    }
  }

  useEffect(() => {
    console.log(page)

  }, [page])
  return (
    <>
      <div className="main" style={styles.main}>
        <MenuBar setPage={setPage} />
      </div>
      <div>
        Newest Songs
        <MusicPlayer />
      </div>

    </>
  )
}

export default connect(null, {})(Homepage)
