import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Profile.css"
import { getProfile} from "../../services/apiCalls"

export const Profile = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

     useEffect(() => {
     if (!token) {
              navigate('/register')
          } else {
              getProfile(token)
              .then((res)=> {
                  console.log(res);
              })
         }
     }, [])

    return (
        <div className="profileDesign">

        </div>
    )
}