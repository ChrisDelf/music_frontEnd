
import axios from 'axios'
import React from 'react'
import { ERROR, types } from './index'
import jwt from 'jwt-decode'
import Cookies from 'universal-cookie'
import Cookie from "js-cookie"
import env from "react-dotenv";


const {
  GET_SONG_START,
  GET_SONG_SUCCESS,
  GET_SONG_FAILURE,
  GET_AUDIO_START,
  GET_AUDIO_SUCCESS,
  GET_AUDIO_FAILURE,
  GET_PLAYLIST_START,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAILURE,
  CREATE_SONG_START,
  CREATE_SONG_SUCCESS,
  CREATE_SONG_FAILURE,
  CREATE_PLAYLIST_START,
  CREATE_PLAYLIST_SUCCESS,
  CREATE_PLAYLIST_FAILURE,
  CREATE_LIKE_START,
  CREATE_LIKE_SUCCESS,
  CREATE_LIKE_FAILURE,
  DELETE_LIKE_START,
  DELETE_LIKE_SUCCESS,
  DELETE_LIKE_FAILURE,
  DELETE_PLAYLIST_START,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAILURE
} = types

const api = env.API_ADDRESS


export const getAudioTrack = (id) => {
  return dispatch => {
  dispatch({type:GET_AUDIO_START})
  const token = Cookie.get("jwt_authorization")
 
  
    dispatch({type: GET_AUDIO_SUCCESS, payload: api + `/song/play/${id}`})
  
  
  
  }
}


export const selectSong = (id) => {
  return dispatch => {
    const token = Cookie.get("jwt_authorization")
    dispatch({ type: GET_SONG_START })
     return axios.get(api + `/song/${id}`,
    {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }) 
      .then( res => 
         {
        dispatch({type: GET_SONG_SUCCESS, payload: res.data})

         })
       .catch(err => {
        dispatch({type: GET_SONG_FAILURE, payload: err})
       }) 
    }

  
}
