import React from 'react';
import "./slidebar.css";
import SideBarButton from './sidebarbutton';
import { AiFillFire } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className='sidebar-container'>
        <img src='https://s3.abcstatics.com/abc/www/multimedia/sociedad/2024/07/11/gato-RaZLibek03KjY2lBzGD2qEN-1200x840@diario_abc.jpg' className='profile-img' alt='Profile'/>
        <div>
            <SideBarButton title="Feed" to="/feed" icon={<AiFillHome />}/>
            <SideBarButton title="Trending" to="/trending" icon={<AiFillFire /> }/>
            <SideBarButton title="Player" to="/player" icon={<BsFillMusicPlayerFill />}/>
            <SideBarButton title="Favorites" to="/favorites" icon={<AiOutlineHeart />}/>
            <SideBarButton title="Library" to="/library" icon={<MdLibraryMusic />}/>
        </div>
        <SideBarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}
