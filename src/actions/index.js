import * as types from '../constants/ActionsTypes';
import axios from "axios";


let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
})

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
})

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})

//--------------------------------------------


export function fetchUsers(){
    return(dispatch) => {
        return axios.get("http://localhost:3000/users")
                    .then(res => {
                        dispatch(storeUsers(res.data))
                    })
                    .catch(err => console.log(err))
    }
}

export function storeUsers(users){
    return{
        type: 'ADD_USERS',
        users: users
    }
}