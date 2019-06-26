import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SongDetailJsx from '../templates/SongDetail';

const SongDetail = (props) => {
  const { selectedSong } = props;

  return SongDetailJsx({ selectedSong });
};

SongDetail.defaultProps = {
  selectedSong: null,
};

SongDetail.propTypes = {
  selectedSong: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = state => ({
  selectedSong: state.selectedSong,
});

const connectComponent = connect(mapStateToProps);
const connectedSongDetail = connectComponent(SongDetail);

export default connectedSongDetail;
