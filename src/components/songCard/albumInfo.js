import React from 'react'
import "./albumInfo.css"

export default function AlbumInfo({ album }) {
    console.log(album);

    const artists = [];
    album?.artists?.forEach((element) => {
        artists.push(element.name)
    })

    return (
        <div>
            <div className="albumName-container">
                <p>{album?.name + "-" + artists?.join(", ")}</p>
            </div>
            <div className="album-info">
                <p>{`${album?.name} es un ${album?.album_type} hecho por ${artists?.join(", ")} y tiene ${album?.total_tracks} canciones`}</p>
            </div>
            <div className="album-release">
                <p>Fecha de Lanzamiento: {album?.release_date}</p>
            </div>
        </div>
    )
}
