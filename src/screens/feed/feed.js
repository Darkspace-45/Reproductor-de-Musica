import { useEffect, useState } from "react";
import apiClient, { getToken, setClientToken } from "../../spotify";
import "./feed.css";

export default function Feed() {
  const [topTracks, setTopTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPlaylists, setShowPlaylists] = useState(false);

  useEffect(() => {
    const token = getToken();

    if (token) {
      setClientToken(token);

      apiClient.get("me/top/tracks")
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
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="screen-container">
      <div className="feed">
        <div className="buttons">
          <button
            onClick={() => setShowPlaylists(false)}
            className={!showPlaylists ? "btn active" : "btn"}
          >
            Canciones
          </button>
          <button
            onClick={() => setShowPlaylists(true)}
            className={showPlaylists ? "btn active" : "btn"}
          >
            Playlists
          </button>
        </div>

        {showPlaylists ? (
          <div className="playlists-section">
            <h2 className="section-title" style={{ color: "white" }}>Playlists</h2>
            <div className="playlist-grid">
              {playlists.length > 0 ? (
                playlists.map((playlist, index) => (
                  <div key={index} className="playlist-card">
                    <img
                      src={
                        playlist.images && playlist.images.length > 0
                          ? playlist.images[0].url
                          : "https://via.placeholder.com/150"
                      }
                      alt={playlist.name}
                      className="playlist-image"
                    />
                    <h3 className="playlist-title">{playlist.name}</h3>
                    <p className="playlist-subtitle">{playlist.owner.display_name}</p>
                  </div>
                ))
              ) : (
                <div className="empty-message">No hay playlists disponibles</div>
              )}
            </div>
          </div>
        ) : (
          /* Sección de Canciones */
          <div className="playlists-section">
            <h2 className="section-title" style={{ color: "white" }}>Todas las canciones</h2>
            <div className="playlist-grid">
              {topTracks.length > 0 ? (
                topTracks.map((track, index) => (
                  <div key={index} className="playlist-card">
                    <img
                      src={
                        track.album.images && track.album.images.length > 0
                          ? track.album.images[0].url
                          : "https://via.placeholder.com/150"
                      }
                      alt={track.name}
                      className="playlist-image"
                    />
                    <h3 className="playlist-title">{track.name}</h3>
                    <p className="playlist-subtitle">{track.artists[0]?.name || "Artista desconocido"}</p>
                  </div>
                ))
              ) : (
                <div className="empty-message">No hay canciones disponibles</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
