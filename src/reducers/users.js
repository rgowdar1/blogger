const usersInitialState=[]

export default (state=usersInitialState,action)=>{
    switch(action.type) {
        case 'SET_USERS' : {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
