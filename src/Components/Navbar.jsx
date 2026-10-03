import { useContext } from "react"
import { MyStore } from "../Context/MyContext"



const Navbar = () => {

  let {setIsCartOpen} = useContext(MyStore)



  return (
    <div className="p-4  bg-red-300 rounded-xl flex items-center justify-between ">
        <div>logo</div>
        <div className="flex gap-10 text-xl">

            <p onClick={()=>setIsCartOpen(false)}
            className="cursor-pointer">Home</p>

            <p  onClick={()=>setIsCartOpen(true)}
            className="cursor-pointer">Card</p>
        </div>
        <button>Login</button>
    </div>
  )
}

export default Navbar
