import axios from 'axios'
import React from 'react'
import { ERROR, types } from './index'
import jwt from 'jwt-decode'
import Cookies from 'universal-cookie'
import env from "react-dotenv";

const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  PLAY_START,
  PLAY_SUCCESS,
  PLAY_FAILURE } = types;
// need to set up enviro elements
const api = env.API_ADDRESS

export const login = (data) => {
  return dispatch => {
    dispatch({ type: LOGIN_START })
    return axios.post(api + '/auth/', data)
      .then(res => {
        let user = {
          accessToken: res.data.accessToken,
          data: null
        }

        let data = jwt(res.data.accessToken)
        user.data = data

        return user
      }
      )
      .then(res => {
        const cookies = new Cookies();
        cookies.set("jwt_authorization", res.accessToken, {
          expires: new Date(res.data.exp * 1000),
        });
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.UserInfo })

        return res.data

      })
      .catch(err => { 
        dispatch({ type: LOGIN_FAILURE, payload: err })
      })
  }
}

export const register = (data) => {
  return dispatch => {
    dispatch({ type: REGISTER_START })
    return axios.post(api + '/register/', data)
      .then(res => {
        let user = {
          accessToken: res.data.accessToken,
          data: null
        }

        let data = jwt(res.data.accessToken)
        user.data = data
        console.log(user)
        return user
      }
      )
      .then(res => {

        const cookies = new Cookies();
        cookies.set("jwt_authorization", res.accessToken, {
          expires: new Date(res.data.exp * 1000),
        });

        dispatch({ type: REGISTER_SUCCESS, payload: res.data.UserInfo })
        return true
      }
      )
      .catch(err => {
        dispatch({ type: REGISTER_FAILURE, payload: err })
      }
      )
  }
}

export const setAudioTrack = (song) => dispatch => {

  let tempSong = {
    src: `http://localhost:8090/audio/audios/${song.id}`,
    title: song.title

  }
  dispatch({ type: PLAY_START, payload: "start" })
  dispatch({ type: PLAY_SUCCESS, payload: tempSong })
}



