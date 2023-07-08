import React,{useState,useContext} from 'react'
import './Spinner.css'
//import './Addprod.css'
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
    firebase.storage().ref(`/image/${URL.createObjectURL(image)}`).put(image).then(({ref})=>{
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
    <div className='flex justify-center h-screen items-center'>
     <div className="border-2 p-4 w-72 border-black rounded-lg">
        <h1 className='text-2xl ml-2'>Name</h1>
        <input value={name} onChange={(e)=>{
          setName(e.target.value)
        }} type="text" className='mt-1 text-lg px-2 border-2 rounded-lg' placeholder='Enter your name'/>
        <h1 className='text-2xl mt-4'>Category</h1>
        <input className='mt-1 text-lg px-2 border-2 rounded-lg' value={category} onChange={(e)=>{
          setCategory(e.target.value)
        }} type="text" placeholder='Category'/>
        <h1 className='text-2xl mt-4'>Price</h1>
        <input className='mt-1 text-lg px-2 border-2 rounded-lg'value={price} onChange={(e)=>{
          setPrice(e.target.value)
        }} type="number" />
        <div className="mt-4">
        <img width="200px" height='200px' src={image?URL.createObjectURL(image):''} alt="post" />
       
       {console.log(image)}
        <input onChange={(e)=>{
          setImage(e.target.files[0])
        }} type="file" id="filetype"/></div>
        <div className='flex justify-center'><button onClick={handlesubmit} type="submit" disabled={loading} className='mt-4 bg-gray-400 px-8 py-1 cursor-pointer text-xl text-white'>Submit</button></div>
        {loading?<div className="spinner-container flex justify-center mt-4">
      <div className="loading-spinner"></div>
    </div>:null}
        </div> 
    </div>
  )
}

export default Addprod
