import React, { useEffect, useState } from 'react';
import APIKit from '../../spotify';

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get('me/playlists').then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div className='screen-container'>
      {playlists?.map(playlist => 
        <div>{playlist.name}</div>
      )}
    </div>
  );
}