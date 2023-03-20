import { types } from '../actions/index'

const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  PLAY_START,
  PLAY_SUCCESS,
  PLAY_FAILURE
} = types;

const initialState = {
  name: "",
  token: "",
  error: "",
  isLoading: "",
  currentSong: ""
};


const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        isLoading: true

      }
    case LOGIN_SUCCESS:
      console.log(payload)
      return {
        ...state,
        error: '',
        name: payload.username,
        isLoading: false
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: '',
        isLoading: false
      }
    case REGISTER_START:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        error:'',
        token: payload.token,
        name: payload.username,
        isLoading: true
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      }
    case PLAY_START:
      return {
        ...state,
        isLoading: true,
      }
    case PLAY_SUCCESS:
      return{
        ...state,
        currentSong: payload,
        isLoading: false
      }
    case PLAY_FAILURE: 
      return{ 
        ...state,
        error: payload,
        isLoading: false
      }
    default:
      return state;
  }

}

export default userReducer
