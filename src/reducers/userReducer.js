import { types } from '../actions/index'

const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_SONG_START,
  GET_SONG_SUCCESS,
  GET_SONG_FAILURE,
  GET_AUDIO_START,
  GET_AUDIO_SUCCESS,
  GET_AUDIO_FAILURE,
} = types;

const initialState = {
  name: "",
  token: "",
  error: "",
  isLoading: "",
  currentSong: {
    name: null,
    artist: null,
    album: null,
    id: null,
    imgSrc: null,
    audio: null,
    audioPosition: null,
  },
  audioVolume: 0.4
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
        error: '',
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
    case GET_SONG_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_SONG_SUCCESS:
      return {
        ...state,
        currentSong: {
          ...state.currentSong,
          id: payload.id,
          name:payload.name
        },
        isLoading: false
      }
    case GET_SONG_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      }
    case GET_AUDIO_START:
      return{
        ...state,
        isLoading: true
      }
    case GET_AUDIO_SUCCESS:
      console.log(payload)
      return{
        ...state,
          currentSong:{
            ...state.currentSong,
            audio: payload
          },
        isLoading: false
      }
    case GET_AUDIO_FAILURE:
      return{
        error: payload,
        isLoading: false
      }
    default:
      return state;
  }

}

export default userReducer
