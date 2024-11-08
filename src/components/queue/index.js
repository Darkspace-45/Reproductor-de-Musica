import React from 'react'
import './queue.css'

export default function Queue({ tracks, setCurrentIndex }) {

    console.log(tracks);

    return (
        <div className='queue-container flex'>
            <div className='queue flex'>
                <p className='upNext'>Siguiente</p>
                <div className='queue-list'>
                    {tracks?.map((track, index) => (
                        <div key={index + "key"}
                        className='queue-items flex' 
                        onClick={() => setCurrentIndex(index)}>

                            <p className='track-name'>{track?.track?.name}</p>
                            <p>6:00</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
