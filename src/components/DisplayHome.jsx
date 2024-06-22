import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongCard from './SongCard'

const DisplayHome = () => {
  return (
    <>
        <Navbar />
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto'>
                {albumsData.map((album,i) => <AlbumItem key={i} image={album.image} name={album.name} desc={album.desc} id={album.id} />)}
            </div>
        </div>
        
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
            <div className='flex overflow-auto'>
                {songsData.map((song,i) => <SongCard key={i} name={song.name} desc={song.desc} id={song.id} image={song.image} />)}
            </div>
        </div>
    </>
  )
}

export default DisplayHome