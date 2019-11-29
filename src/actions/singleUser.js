import axios from 'axios'
export const setUser=(user)=>{
    return {type:'SET_USER',payload:user}
}

export const startSetUser=(userId)=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response=>{
                const user=response.data
                dispatch(setUser(user))
            })
    }
}
