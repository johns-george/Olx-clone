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
    <div className="">
    <div className='lg:flex pt-28 grid justify-center lg:justify-around'>
     <div className="">
      <img src={postdetails.url} alt="productimage" className='lg:h-96  ' />
      </div> 
      <div className='pt-10'>
      <div className="border-2 w-60 h-32 pt-4">
        <h1 className="pl-4 text-2xl">{postdetails.price}</h1>
        <p className="pl-4 text-xl"> {postdetails.name}</p>
        <p className="pl-4 text-xl">{postdetails.category}r</p>
      </div>
    
   {userdetails&& <div className="border-2 w-60 h-28 mt-10 pt-2">
    <h1 className="pl-4 text-2xl">Seller Name</h1>
    <p className="pl-4 text-lg">{userdetails.username}</p>
    <p className="pl-4 text-lg">{userdetails.phone}</p>
  </div>}
  </div>
  </div>
  </div>
  )
  }

export default Createapp
