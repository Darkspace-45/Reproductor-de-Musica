import React, { useEffect, useState } from 'react';
import Carousel from '../../components/carousel';
import axios from 'axios';
import { setClientToken } from '../../spotify';

const Feed = () => {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setClientToken(token);
      axios
        .get('https://api.spotify.com/v1/me/top/tracks')
        .then((response) => {
          setCanciones(response.data.items);
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

  const images = canciones.map((song) => song.album.images[0].url);

  return (
    <div>
      <h1>Top Canciones</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Feed;
