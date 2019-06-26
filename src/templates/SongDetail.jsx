import React from 'react';

const SongListJsx = (props) => {
  const { selectedSong } = props;
  const song = selectedSong;


  return (
    <div>
      {!song
        && (
          <div>Select a song</div>
        )
      }

      {song
        && (
          <div>
            <h3>Details for:</h3>
            <p>
              Title:
              {' '}
              {props.selectedSong.title}
              <br />
              Duration
              {' '}
              {props.selectedSong.duration}
            </p>
          </div>
        )
      }
    </div>
  );
};

export default SongListJsx;
