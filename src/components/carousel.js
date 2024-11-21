import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './carousel';

const Feed = () => {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');  // Asegúrate de que el token esté guardado
    if (token) {
      axios
        .get('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          setCanciones(response.data.items);  // Guardamos las canciones
          setLoading(false);
        })
        .catch((error) => {
          setError('Hubo un error al cargar las canciones.');
          setLoading(false);
        });
    } else {
      setError('No se encontró el token de acceso.');
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const images = canciones.map((song) => song.album.images[0].url);  // Extraemos las imágenes de los álbumes

  return (
    <div>
      <h1>Top Canciones</h1>
      <Carousel images={images} />  {/* Pasamos las imágenes al carrusel */}
    </div>
  );
};

export default Feed;
