import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SongListJsx from '../templates/SongList';
import selectSongAction from '../actions';

const SongList = (props) => {
  const { selectSong, songs } = props;

  return SongListJsx({ selectSong, songs });
};

SongList.defaultProps = {
  songs: [],
};

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  selectSong: PropTypes.func.isRequired,
};

/**
 * Declare that the "songs" property on this component,
 * must be binded to the "songs" property from the state stored in Redux.
 */
const mapStateToProps = state => ({
  songs: state.songs,
});

/**
 * Declare that the "selectSong" property on this component,
 * must be binded to the "selectSong" action creator manage by the Redux store.
 */
const mapDispatchToProps = {
  selectSong: selectSongAction,
};

/**
 * The connect() function connects a React component to a Redux store.
 * It returns a "connect component".
 *
 * The first parameter define what this component will retrieve from the store.
 * The second paramater define which action will be dispatched to the store.
 */
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

// Connect the songList component to the store, thanks to the connectComponent.
const connectedSongList = connectComponent(SongList);

/**
 * Export the songList componenent, now connected to the store,
 * and loaded with the data retrieved from the store.
 */
export default connectedSongList;
