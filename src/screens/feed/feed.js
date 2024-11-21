import React, { useEffect, useState } from 'react';
import apiClient, { getToken, setClientToken } from '../../spotify';
import './feed.css';

export default function Feed() {
  const [topTracks, setTopTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getToken();

    if (token) {
      setClientToken(token);

      apiClient.get("me/top/artists")
        .then(response => {
          setTopTracks(response.data.items);
        })
        .catch(error => {
          console.error("Error al cargar las canciones:", error);
        });

      apiClient.get("me/playlists")
        .then(response => {
          setPlaylists(response.data.items);
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Error al cargar las playlists:", error);
          setIsLoading(false);
        });
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="feed">
      <h2>Top Tracks</h2>
      <div className="top-tracks">
        {topTracks.length > 0 ? (
          topTracks.map((track, index) => (
            <div key={index} className="track">
              <img
                src={track.album.images?.[0]?.url || 'https://via.placeholder.com/150'}
                alt={track.name}
              />
              <h3>{track.name}</h3>
              <p>{track.artists[0]?.name || 'Unknown Artist'}</p>
            </div>
          ))
        ) : (
          <div>No top tracks available</div>
        )}
      </div>

      <h2>Playlists</h2>
      <div className="playlists">
        {playlists.length > 0 ? (
          playlists.map((playlist, index) => (
            <div key={index} className="playlist">
              <img
                src={playlist.images?.[0]?.url || 'https://via.placeholder.com/150'}
                alt={playlist.name}
              />
              <h3>{playlist.name}</h3>
            </div>
          ))
        ) : (
          <div>No playlists available</div>
        )}
      </div>
    </div>
  );
}
