import axios from 'axios'
import { ERROR, types } from './index'
import jwt from 'jwt-decode'
import Cookies from 'universal-cookie'

const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} = types;

// need to set up enviro elements
const api = 'http://localhost:3500'

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
        console.log("POOP",err)
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



