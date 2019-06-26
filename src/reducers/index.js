import { combineReducers } from 'redux';

const songsReducer = () => [
  { title: 'Song 1', duration: '4:05' },
  { title: 'Song 2', duration: '5:37' },
  { title: 'Song 3', duration: '1:41' },
];

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
