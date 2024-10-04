import { generateRandomHexCode } from "../helpers/helpers";

const userReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return {...state, loggedIn: true}
        case "LOGOUT":
            return {...state, loggedIn: false}
        case "UPDATE_NAME":
            return {...state, username: action.payload}
        case "UPDATE_DESCRIPTION":
            return {...state, description: action.payload}
        case "ADD_TAG":
            const newTags = [...state.tags];
            const newId = generateRandomHexCode()
            newTags.push({
                id: newId,
                label: action.payload,
            })
            return {...state, tags: newTags}
        case "REMOVE_TAG":
            const updatedTags = state.tags.filter(tag => tag.id !== action.payload)
            return {...state, tags: updatedTags}
        case "SET_LOADING":
            return {...state, loading: action.payload}
        default:
            return state
    }
}

export default userReducer;