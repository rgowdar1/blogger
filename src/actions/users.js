import axios from 'axios'
import image1 from '../images/authors/fb1.jpeg'
import image2 from '../images/authors/fb2.jpeg'
import image3 from '../images/authors/fb3.jpeg'
import image4 from '../images/authors/fg4.jpeg'
import image5 from '../images/authors/fg1.jpeg'
import image6 from '../images/authors/fb6.jpeg'
import image7 from '../images/authors/fb4.jpeg'
import image8 from '../images/authors/fb10.jpeg'
import image9 from '../images/authors/fg2.jpeg'
import image10 from '../images/authors/fg3.jpeg'
const  images=[image1,image2,image3,image4,image6,image5,image7,image8,image9,image10]
export const setUsers=(users)=>{
    return {type:'SET_USERS',payload:users}
}

export const getSingleUser=(userId)=>{
    return {type:'GET_SINGLE_USER',payload:userId}
}

export const startSetUsers=()=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response=>{
            const user=response.data
            const users=[]
            user.map((u,i)=>{
                users.push(Object.assign(u,{profile:images[i]}))
            })
            dispatch(setUsers(users))
        })
    }
}