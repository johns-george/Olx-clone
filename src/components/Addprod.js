import React,{useState,useContext} from 'react'
import './Addprod.css'
import { Authcontext } from '../context/Context'
import { Firebasecontext } from '../context/Context'
import { useNavigate } from 'react-router'
function Addprod() {
  const date=new Date();
  const navigate=useNavigate();
  const {user}=useContext(Authcontext)
  const {firebase}=useContext(Firebasecontext)
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState(0)
  const [image,setImage]=useState('')
  const handlesubmit=()=>{
    firebase.storage().ref(`/image/${image}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userid:user.uid,
          createdAt:date.toDateString()
        })
        navigate('/')
      })
    })
    }
  return (
    <div className='addproduct'>
     <div className="addprodborder">
        <h1>Name</h1>
        <input value={name} onChange={(e)=>{
          setName(e.target.value)
        }} type="text" />
        <h1>Category</h1>
        <input value={category} onChange={(e)=>{
          setCategory(e.target.value)
        }} type="text" />
        <h1>Price</h1>
        <input value={price} onChange={(e)=>{
          setPrice(e.target.value)
        }} type="number" />
        <div className="prodimg">
        <img width="200px" height='200px' src={image?URL.createObjectURL(image):''} alt="post" />
        <input onChange={(e)=>{
          setImage(e.target.files[0])
        }} type="file" id="filetype"/>
        <button onClick={handlesubmit} type="submit">Submit</button>
       </div>
        </div> 
    </div>
  )
}

export default Addprod
