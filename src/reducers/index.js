import { combineReducers } from 'redux';

// Defines the list of songs
const songsReducer = () => [
  { title: 'Song 1', duration: '4:05' },
  { title: 'Song 2', duration: '5:37' },
  { title: 'Song 3', duration: '1:41' },
];

/**
 * When the user does an action, his action is dispatched to all reducers by
 * the "connect" function.
 *
 * Each reducers has to check the action type before executing any code.
 *
 * The value return by the reducer will be stored in the store, as defined in
 * the combineReducers method at the end of the file. In this case, in the
 * "selectedSong" property.
 *
 * If the action type is SONG_SELECTED, return the song stored in
 * "action.payload" will set it as the new selected song in the store.
 *
 * If the action type is NOT SONG_SELECTED, return the song already selected,
 * in order not to change it.
 */
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
