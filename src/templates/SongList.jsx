import React from 'react';

const SongListJsx = (props) => {
  const { selectSong, songs } = props;

  return (
    <div className="ui divided list">
      {
        songs.map(song => (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => { selectSong(song); }}
                type="button"
              >
                  Select
              </button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        ))
      }
    </div>
  );
};

export default SongListJsx;
