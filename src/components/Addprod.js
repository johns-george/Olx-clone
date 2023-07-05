import React,{useState,useContext} from 'react'
import './Spinner.css'
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
  const [loading,setloading]=useState(false)
  const handlesubmit=()=>{
    setloading(true)
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
        setloading(false)
        navigate('/')
      })
      .catch((error)=>
    {
      setloading(false)
     alert(error.message)
    }
    )
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
        <button onClick={handlesubmit} type="submit" disabled={loading}>Submit</button>
        {loading?<div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>:null}
       </div>
        </div> 
    </div>
  )
}

export default Addprod
