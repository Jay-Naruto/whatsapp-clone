import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase"
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin, selectlogin } from './redux/loginSlice'
import { Link, useHistory } from 'react-router-dom'
import App from './App'
export default function Login() {
    const history=useHistory()
    const dispatch=useDispatch()
    const login=useSelector(selectlogin)
    const signIn=()=>{
auth.signInWithPopup(provider)

.catch(error=>alert(error.message))
    }
    
    return (<>
    {   console.log(login.logged)}
        {
            login.logged ?
            (
                <App/>
            ):
            (
                <div className="login">
                <div className="login__container">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" ></img>
                  <div className="login__text" >
                  <h1>Sign in to whatsapp</h1>
                  </div>
                  <Button type="submit" onClick={signIn}>
                      Sign in with google
                  </Button>
                </div>
                
            </div>
            )
        }
    
    </>)
}
