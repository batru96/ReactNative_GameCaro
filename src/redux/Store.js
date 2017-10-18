import { createStore } from 'redux';
import SocketIOClient from 'socket.io-client';
import ipAddress from '../api/ipaddress';

const defaultState = {
  socket: SocketIOClient(`http://${ipAddress}`),
  dsUser: [],
  isLogin: false,
  isPlaying: false,
  playerState: 'Still free',
  room: undefined
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'UPDATE_DS_USER') {
    console.log(action.ds);
    return { ...state, dsUser: action.ds };
  }
  if (action.type === 'CHANGE_LOGIN_STATE') {
    return { ...state, isLogin: !state.isLogin, dsUser: action.ds };
  }
  if (action.type === 'TOGGLE_PLAYING_STATE') {
    return { ...state, isPlaying: !state.isPlaying };
  }
  if (action.type === 'CHANGE_ROOM') {
    return { ...state, room: action.room };
  }
  if (action.type === 'HUY_VAN_GAME') {
    return { ...state, room: undefined, isPlaying: !state.isPlaying };
  }
  return state;
};

export default createStore(reducer);