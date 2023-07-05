import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import './Spinner.css'
import { Firebasecontext } from '../context/Context'
function Loggedin() {
  const navigate=useNavigate()
  function signupbuttonclick(){
    navigate("/signup")
  }
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(Firebasecontext)
  const [loading,setloading]=useState(false)
  function loggingin(e){
    setloading(true)
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate("/")
      setloading(false)
    })
    .catch((error)=>
    {
      setloading(false)
     alert(error.message)
    }
    )
  }
  return (
    <div className="flex justify-center h-screen items-center">
    <div className='border-2 rounded-md border-gray-500 px-4 py-4'>
      <form onSubmit={loggingin} action="">
        <div className=" flex justify-center">
            <img src="data:image/png;base64,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" alt=""
            className='w-48 h-44' />
        </div>
        <div className="mt-4">
            <h1 className='text-xl mt-2'>Username</h1>
            <input className='text-lg' value={email} onChange={(e)=>setEmail(e.target.value)} type="username" placeholder='Enter your Username' />
            <h1 className='text-xl mt-2'>Password</h1>
            <input className='text-lg' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password' />
            <div className="flex justify-between">
            <button className='hover:text-black hover:bg-gray-300 text-lg bg-gray-400 text-white mt-4 px-5 py-1 cursor-pointer' type='submit' disabled={loading}>Log In</button>
            <button className='hover:text-black hover:bg-gray-300 text-lg bg-gray-400 text-white mt-4 px-3 py-1 cursor-pointer' onClick={signupbuttonclick} disabled={loading}>Sign-Up</button>
           {loading?<div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>:null}
            </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Loggedin
