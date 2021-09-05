import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import { useSelector } from 'react-redux';
import { selectlogin } from './redux/loginSlice';
export default function Sidebar() {
    const login=useSelector(selectlogin)
    return (
        <div className="sidebar">
           <div className="sidebar__header">
            <div className="sidebar__headerRight">
              <Avatar src={login.photo}/>
            </div>
            <div>
                {login.name}
            </div>
            <div className="sidebar__headerLeft">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
       
            </div>
           </div>
           <div className="sidebar__search">
           <div className="sidebar__searchConatiner">
               
             <SearchIcon/>
             <input placeholder="Search or start new chat" type="chat"></input>
               </div>   

           </div>

           <div className="sidebar__chats">
               <SidebarChat/>
               <SidebarChat/>


           </div>
        </div>
    )
}
