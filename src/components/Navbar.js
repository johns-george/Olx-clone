import React,{useContext} from 'react'
import {useNavigate} from 'react-router'
import './Navbar.css'
import Olxlogo from '../assets/olxlogo'
import { Authcontext,Firebasecontext } from '../context/Context'
function Navbar() {
  const {user}=useContext(Authcontext) 
  const {firebase}=useContext(Firebasecontext)
  const history=useNavigate()
  function loginclick(){
    history('/login')
  }
  return (
    <div className="nav">
    <div className='navbar'>
     <button id="olxicon" onClick={()=>history('/')}> <Olxlogo  /></button>
      <div className="select">
        <select className='location'></select>
      </div>
<div className="search">
  <input type="text"className='searchbar' placeholder='Find Car , Mobiles and More...'>
  </input>
</div>
<div className="dropdown">
  <select className='language'>
    <option >English</option>
  </select>
</div>
<div className="button">
<span onClick={loginclick} className='loginbutt'><u>{user?`Welcome ${user.displayName}`:"Login"}</u></span>
{user&& <span className='logoutbutt' onClick={()=>{
  firebase.auth().signOut();
  history('/login')
}}><u>Logout</u></span>}
<button onClick={()=>history('/addprod')} className='sell'>Sell</button>
</div>
</div>
    </div>
  )
}

export default Navbar
