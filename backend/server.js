import express from "express"
import mongoose from "mongoose"
import Messages from "./dbMessages.js"
import Pusher from 'pusher'
// const express=require('express')
// const mongoose=require('mongoose')
// const Messages=require('./dbMessages')


const app=express()
const port=process.env.PORT || 9000
const pusher = new Pusher({
    appId: "1215934",
    key: "00014c8ee6d5161aa015",
    secret: "5d2b79fd82d39719a506",
    cluster: "eu",
    useTLS: true
  });

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    next()
})
const connectionUrl='mongodb+srv://admin:Naruto@123@cluster0.gfy38.mongodb.net/whatsappDb?retryWrites=true&w=majority'
mongoose.connect(connectionUrl,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection
db.once('open',()=>{
    console.log("db connected")
    const msgCollection=db.collection('messagecontents')
    const changeStream=msgCollection.watch()
    changeStream.on('change',(change)=>{
        console.log(change)
        if(change.operationType==='insert')
        {
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',
            {
                name:messageDetails.name,
                message:messageDetails.message,
                timestamp:messageDetails.timestamp,
                received:messageDetails.received
            })
        }else{
            console.log('Error in pusher')
        }
    })
})
app.get('/',(req,res)=>res.status(200).send("hellow"))
app.get('/messages/sync',(req,res)=>{

    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})
app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})
app.listen(port,()=>console.log(`Listening on ${port}`))