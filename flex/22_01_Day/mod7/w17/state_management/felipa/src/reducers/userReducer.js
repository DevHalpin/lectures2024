export const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            const user = {...state};
            user.loggedIn = true;
            return user
        }
        case 'LOGOUT': {
            const user = {...state};
            user.loggedIn = false;
            return user
        }
        case 'UPDATE_DESCRIPTION': {
            const user = {...state, description: action.payload}
            return user
        }
        case 'UPDATE_NAME': {
            const user = {...state, name: action.payload}
            return user
        }
        case 'ADD_TAG': {
            const newTags = [...state.tags]
            newTags.push(action.payload)
            const user = {...state, tags: newTags}
            return user
        }
        case 'REMOVE_TAG': {
            const newTags = [...state.tags]
            const tagIndex = newTags.findIndex((tag) => tag.id === action.payload)
            newTags.splice(tagIndex, 1)
            const user = {...state, tags: newTags}
            return user
        }
        default: {
            return state;
        }
    }
}