/**
 * Define the "select song" action.
 * Define what is the identifier of the action (type), and which data will be
 * passed to the reducer when this action will be manage by the reducer
 * (payload).
 *
 * @param  {[type]} song [description]
 * @return {[type]}      [description]
 */
const selectSongAction = song => ({
  type: 'SONG_SELECTED',
  payload: song,
});

export default selectSongAction;
