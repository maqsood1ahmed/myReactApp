
const usersReducer = (state=[], action)=>{
    if(action.type === "ADD_USERS"){
        return{
            ...state,
            users: action.users
        }
    }
    else {
        return{
            ...state
        }
    }
}

export default usersReducer;