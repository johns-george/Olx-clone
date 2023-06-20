import React,{useState,useContext,useEffect} from 'react'
import './Posts.css'
import { Authcontext, Firebasecontext } from '../context/Context'
import { Prodcontext } from '../context/Productcontext'
import { useNavigate } from 'react-router'
function Posts() {
  const navigate=useNavigate()
 const [post,setpost]=useState([])
  const {firebase}=useContext(Firebasecontext)
  const {user}=useContext(Authcontext)
const {postdetails,setpostdetails}=useContext(Prodcontext)
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
     const allposts=snapshot.docs.map((products)=>{
        return{ 
          ...products.data(),
          id:products.id
        }
      })
      console.log(allposts)
      setpost(allposts)
    })
  },[])
  return (
    <div className='posts'>
        <div className="border">
          <div className='quickmenu'>
            <h1 className='menu'>Quick Menu</h1>
            </div>
            <div className='postofprod'>
            { post.map((products)=>{
            return(
              <div className="post" onClick={()=>{
                setpostdetails(products)
                console.log(postdetails)
                navigate("/create")
              }}>
        <img className='product' src={products.url} alt="" />
        <div className="details">
            <h2 className='price'>{products.price}</h2>
            <div className="desc">
            <p className='description'>{products.name}</p>
            <p className='description1'>{products.category}</p> 
            <p className='description2'>{products.createdAt}</p>
            </div>
        </div>
     
      </div>
           )})
      }
      </div>
      </div>
      <div className="freshrecommendations">
        <h1 className="fresh">Fresh Recommendations</h1>
        <div className="freshborder">
          <img className='bike' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL04YQl15DZs3dwO6y8zy40BDPtkpTDeb2SQ&usqp=CAU" alt="" />
        <h1 className='freshhead'>Rs 1,25,000</h1>
        <p className='freshpara'>2018-6,000km</p>
        <p className='freshpara2'>Two Wheeler</p>
        <p className='footerpara'>10/05/2022</p>
        </div>
      </div>
    </div>
  )
}

export default Posts
