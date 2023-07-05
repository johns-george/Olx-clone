import React,{useState,useContext,useEffect} from 'react'
import { Authcontext, Firebasecontext } from '../context/Context'
import { Prodcontext } from '../context/Productcontext'
import { useNavigate } from 'react-router'
import './Posts.css'
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
    <div className='mt-8 '>
        <div className="bg-gray-400">
          <div className='py-4 ml-12 text-3xl '>
            <h1>Quick Menu</h1>
            </div>
            <div className='flex gap-8 pb-6 overflow-x-scroll px-6'>
            { post.map((products)=>{
            return(
              <div className="cursor-pointer bg-transparent border-2 rounded-lg min-w-fit" onClick={()=>{
                setpostdetails(products)
                console.log(postdetails)
                navigate("/create")
              }}>
        
        <img src={products.url} alt="productimage" className='xs:w-48 xs:h-40 lg:w-60 lg:h-48  p-2'/>
            <h2 className='text-xl xs:pl-2 lg:pl-4'>{products.price}</h2>
            <p className='text-lg xs:pl-3 lg:pl-6'>{products.name}</p>
            <p className='text-lg xs:pl-3 lg:pl-6'>{products.category}</p> 
           <div className='flex justify-end pr-2'> <p className=''>{products.createdAt}</p>
      </div></div>
           )})
      }
      </div>
      </div>
      <div className="p-6 text-3xl">
        <h1 >Fresh Recommendations</h1>
        <div className="border-2 w-80">
          <img className='pt-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL04YQl15DZs3dwO6y8zy40BDPtkpTDeb2SQ&usqp=CAU" alt="" />
        <h1 className='pl-4 text-3xl'>Rs 1,25,000</h1>
        <p className='pl-4 text-lg'>2018-6,000km</p>
        <p className='pl-4 text-lg'>Two Wheeler</p>
        <p className='text-lg pl-52'>10/05/2022</p>
        </div>
      </div>
    </div>
  )
}

export default Posts
