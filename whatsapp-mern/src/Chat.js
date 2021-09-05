import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import "./Chat.css"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
import axios from "./axios"
export default function Chat({messages}) {
    const [input,setInput]=useState('')
    console.log(messages.message)
    const sendMessage=async (e)=>{
        e.preventDefault()
   await axios.post('/messages/new',{
       message:input,
       name:"Demo person",
       timestamp:"Now",
       received:false
   })

   setInput('')
    }
    return (
        <div className="chat">
           <div className="chat__header">
               <Avatar/>
               <div className="chat__headerInfo">
                   <h3>Group Name</h3>
                   <p>Last seen at ___</p>

               </div>
               <div className="chat__headerRight">
                   <IconButton>
                <SearchOutlinedIcon/>
                   </IconButton>
                   <IconButton>
                <AttachFileOutlinedIcon/>
                   </IconButton>
                   <IconButton>
                <MoreVertOutlinedIcon/>
                   </IconButton>

               </div>
               </div> 
               <div className="chat__body">
                   {
                       messages.map((message)=>(
                        <p className={`chat__message ${message.received===false && "chat__receiver"} `}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                     </p>
                       ))
                   }
             

               </div>
               <div className="chat__footer">
               <IconButton>
                <MoodIcon/>
                </IconButton>
                <form>
                    <input
                    value={input}
                    onChange={e=>{setInput(e.target.value)}}
                    placeholder="Type a message"
                    type="text"
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                <MicIcon/>
                   </IconButton>
               </div>
        </div>
    )
}
