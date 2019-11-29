const userInitialState={}

const singleUserReducer=(state=userInitialState,action)=>{
    switch(action.type) {
        case 'SET_USER' : {
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default singleUserReducer