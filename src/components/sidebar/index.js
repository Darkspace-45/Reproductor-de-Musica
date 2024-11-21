import React, { useEffect, useState } from 'react';
import "./slidebar.css";
import SideBarButton from './sidebarbutton';
import { AiFillFire } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient, { logout } from '../../spotify';

export default function SideBar() {
  const [image, setImage] = useState(
    "https://s3.abcstatics.com/abc/www/multimedia/sociedad/2024/07/11/gato-RaZLibek03KjY2lBzGD2qEN-1200x840@diario_abc.jpg"
  );

  useEffect(() => {
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);
    });
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = 'https://accounts.spotify.com/es/authorize?client_id=0b2b68708e014e758475c58f52d41e51&redirect_uri=http://localhost:3000&scope=user-library-read%20playlist-read-private%20user-top-read&response_type=token&show_dialog=true'; 
  };

  return (
    <div className='sidebar-container'>
      <img src={image} className='profile-img' alt='Profile' />
      <div>
        <SideBarButton title="Feed" to="/feed" icon={<AiFillHome />} />
        <SideBarButton title="Trending" to="/trending" icon={<AiFillFire />} />
        <SideBarButton title="Player" to="/player" icon={<BsFillMusicPlayerFill />} />
        <SideBarButton title="Favorites" to="/favorites" icon={<AiOutlineHeart />} />
        <SideBarButton title="Library" to="/" icon={<MdLibraryMusic />} />
      </div>
      <SideBarButton
        title="Sign Out"
        icon={<FaSignOutAlt />}
        onClick={handleLogout} // Solo ejecutamos la función handleLogout
      />
    </div>
  );
}
