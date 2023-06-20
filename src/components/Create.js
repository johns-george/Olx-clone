import React,{useState,useEffect,useContext} from 'react'
import './Create.css'
import { Prodcontext } from '../context/Productcontext'
import { Firebasecontext } from '../context/Context'
function Createapp() {
  const {postdetails}=useContext(Prodcontext)
  const {firebase}=useContext(Firebasecontext)
  const [userdetails,setuserdetails]=useState()
  useEffect(()=>{
    const {userid}=postdetails
    firebase.firestore().collection('users').where('id','==',userid).get().then((response)=>{
      response.forEach(doc => {
        setuserdetails(doc.data())
      });
    })
  },[])
  return (
    <div className="createouterdiv">
    <div className='create'>
     <div className="img">
      <img src={postdetails.url} alt="" />
      </div> 
      <div className="createdetail">
        <h1>{postdetails.price}</h1>
        <p>{postdetails.name}</p>
        <p>{postdetails.category}r</p>
      </div>
    </div>
   {userdetails&& <div className="moredetail">
    <h1>seller Name</h1>
    <p>{userdetails.username}</p>
    <p>{userdetails.phone}</p>
  </div>}
  </div>
  )
  }

export default Createapp
