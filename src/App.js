import { useContext,useEffect } from 'react';
import './App.css';
import Signup from './file/Signup';
import Log from './file/Log'
import Home from './file/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createpage from './file/Createpage';
import Addproduct from './file/Addproduct';
import { Authcontext, Firebasecontext } from './context/Context';
import Productcont from './context/Productcontext';
function App() {
 const {setUser}=useContext(Authcontext);
 const {firebase}=useContext(Firebasecontext)
useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
})
  return (
      <Productcont>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Log/>}/>
    <Route path="/create" element={<Createpage/>}/>
    <Route path="/addprod" element={<Addproduct/>}/>
     </Routes>
     </BrowserRouter>
    </Productcont>
  );
}

export default App;
