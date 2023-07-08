import React,{useContext} from 'react'
import {useNavigate} from 'react-router'
import Olxlogo from '../assets/olxlogo'
import { Authcontext,Firebasecontext } from '../context/Context'
function Navbar() {
  const {user}=useContext(Authcontext) 
  const {firebase}=useContext(Firebasecontext)
  const history=useNavigate()
  function loginclick(){
    if(user)
    return null;
    else
    history('/login')
  }
  const menuclick=()=>{
    if(document.getElementById('menudiv').classList.contains('hidden'))
    document.getElementById('menudiv').classList.remove('hidden')
    else
    document.getElementById('menudiv').classList.add('hidden')
  }
  return (
    <div>
    <div className="flex justify-between sticky w-screen pt-4 bg-orange-200 top-0">
    <div className=''>
     <button className='-mt-2' onClick={()=>history('/')}> <Olxlogo  /></button>
      </div>
      <div className="">
        <select className='xs:w-16 sm:w-16 md:w-40 lg:w-60 h-8 pl-2 text-xl'>
          <option>India</option>
          <option>India</option>
          <option>India</option>
          <option>India</option>
        </select>
      </div>
<div className="">
  <input type="text"className='xs:w-30 sm:w-52 md:w-60 lg:w-96 h-8' placeholder='   Find Car , Mobiles and More...'>
  </input>
</div>
<div className="flex">
  <div>
  <select className='xs:hidden lg:block sm:w-20 sm:text-sm md:w-40 lg:w-24 h-8 lg:text-lg pl-2'>
    <option >English</option>
  </select>
  </div>
<div className="ml-4 xs:hidden lg:block text-lg bg-gray-200 mb-4 pt-1">
<button onClick={loginclick} className='px-4'>{user?`Welcome ${user.displayName}`:"Login"}</button>
</div>
<div>
{user&& <button className='xs:hidden lg:block ml-2 bg-gray-200 h-8 w-20 text-lg' onClick={()=>{
  firebase.auth().signOut();
  history('/login')
}}>Logout</button>}
</div>
<div className='ml-4 xs:hidden lg:block bg-red-400 mr-12 h-8 pt-1 cursor-pointer'>
<button onClick={()=>history('/addprod')} className='w-20'>Sell</button>
</div>
</div>
<div onClick={menuclick} className="space-y-2 lg:hidden pr-4 pt-1 cursor-pointer">
  <div className="w-8 h-0.5 bg-gray-600"></div>
  <div className="w-8 h-0.5 bg-gray-600"></div>
  <div className="w-8 h-0.5 bg-gray-600"></div>
</div>
</div>
<div id="menudiv" className= 'hidden lg:hidden pr-8 text-right bg-orange-200  pb-4 pt-4'>
  <div className='mb-2'>
  <button onClick={loginclick} className=' bg-gray-200 w-24 text-lg'>{user?`Welcome ${user.displayName}`:"Login"}</button>
    </div>
    <div className=''>
    <button className='rounded-md bg-gray-200 w-24 text-lg mb-2' onClick={()=>history('/addprod')}>Sell</button>
  </div>
  <div>
  {user&& <button className=' bg-gray-200 w-24 text-lg' onClick={()=>{
  firebase.auth().signOut();
  history('/login')
}}>Logout</button>}
  </div>
</div>
    </div>
  )
}

export default Navbar
