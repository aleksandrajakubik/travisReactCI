import {GET_TODOS, ADD_TODO, EDIT_TODO, UPDATE_TODO, REMOVE_TODO} from '../types'

const initialState = {
    toDos:[],
    loading:true,
    editIndex: null
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_TODOS: {
            return {
                ...state,
                toDos:action.payload,
                loading:false

            }
        }
        case ADD_TODO: {
            return {
                ...state,
                toDos: [action.payload, ...state.toDos],
                loading: false
            }
        }

        case EDIT_TODO: {
            return {
                ...state,
                toDos: state.toDos.map(t => t.id === action.payload.id ? action.payload : t),
                editIndex: action.payload.id
            }
        }

        case UPDATE_TODO: {
            return {
                ...state, 
                toDos: state.toDos.map(t => t.id === action.payload.id ? t.completed = action.payload.completed : t)
            }
        }

        case REMOVE_TODO: {
            return {
                ...state,
                toDos: state.toDos.filter(t => t.id !== action.payload)
            }
        }
        default: return state
    }

}

export const getAllToDos = (state) => state.toDos;
export const getCompletedToDos = (state) => {
    return state.toDos.filter(t => t.completed === true)
}