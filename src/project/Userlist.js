import axios from "axios"
import { useState ,useEffect} from "react"
import Cardlist from './Cardlist'



function User() {
    const[users,setUsers]=useState([])

    useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>setUsers(res.data))
     .catch(err=>console.log(err))}, [])
    return(
        <div className="style">
            
{users.map((el,i)=><Cardlist key={i} el={el}/>)}

        </div>
    )
    
}
export default User