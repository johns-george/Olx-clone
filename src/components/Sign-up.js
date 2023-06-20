import React,{useState,useContext} from 'react'
import './Sign-up.css'
import { Firebasecontext } from '../context/Context'
import { useNavigate } from 'react-router-dom'
function SignupPage() {
const [username,setUsername]=useState('')
const [name,setName]=useState('')
const [mobile,setMobile]=useState('')
const [password,setPassword]=useState('')
const {firebase}=useContext(Firebasecontext)
const navigate=useNavigate()
function loginbuttonclick(){
  navigate('/login')
}
const handlesubmit=(e)=>{
  e.preventDefault();
  firebase.auth().createUserWithEmailAndPassword(username, password).then((result)=>{
    console.log(result)
result.user.updateProfile({displayName:name}).then(()=>{
  firebase.firestore().collection('users').add({
id:result.user.uid,
phone:mobile,
username:username
  }).then(loginbuttonclick)
})
  })
} 
  return (
    <div className="Signup">
        <form  onSubmit={handlesubmit}className="signuppage">
            <div className="formlogo">
                <img className='signupimg' src="data:image/png;base64,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" alt="logo" />
            </div>
            <div className="form">
                <h2>Username</h2>
                <input value={username} onChange={(e)=>{
                  setUsername(e.target.value)
                }} type="username" placeholder='Enter Your Username' />
                <h2>Name</h2>
                <input value={name} onChange={(e)=>{
                  setName(e.target.value)
                }} type="text" placeholder='Enter your Name'/>
                <h2>Mobile</h2>
                <input value={mobile} onChange={(e)=>{
                  setMobile(e.target.value)
                }} type="text" placeholder='Enter your Mobile Number' />
                <h2>Password</h2>
                <input value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }} type="password" placeholder='Enter your Passwword' />
                <button type='submit'>Sign-Up</button>
                <button onClick={loginbuttonclick} >Log-In</button>
            </div>
        </form>
    </div>
  )
}

export default SignupPage
