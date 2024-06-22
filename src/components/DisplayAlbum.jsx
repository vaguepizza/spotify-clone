import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const {playWithId} = useContext(PlayerContext);
    const {id} = useParams();
    const album = albumsData[id];
    const backColor = album.bgColor;
    // style={{background: `linear-gradient(${backColor}, #121212)`}}

  return (
    <div>
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end gradient'>
            <img className='w-48 rounded' src={album.image} alt="" />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{album.name}</h2>
                <h4>{album.desc}</h4>
                <p className='mt-1 flex gap-2'>
                    <img className='w-5 h-5' src={assets.spotify_logo} alt="" />
                    <b>Spotify</b>
                    • 1,323,154 likes
                    • <b>50 songs</b>
                    2 hr 30 mins
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-10 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
            songsData.map((song,i) => (
                <div onClick={() => playWithId(song.id)} key={i} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                    <p className=' text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{i+1}</b>
                        <img className='inline w-10 mr-5' src={song.image} alt="" />
                        {song.name}
                    </p>
                    <p className='text-[15px]'>{album.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{song.duration}</p>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAlbum