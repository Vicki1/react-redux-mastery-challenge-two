



const ADD_TODO = 'ADD_TODO';
const MARK_TODO_COMPLETE = 'MARK_TODO_COMPLETE';
const DELETE_TODO = 'DELETE_TODO';

export default function mainReducer (state, action){
    switch(action.type){
        case ADD_TODO:
            var addedNewToDo = [...state.unCompletedToDos, action.payload];
            return Object.assign({}, state, {unCompletedToDos: addedNewToDo});
    
        case MARK_TODO_COMPLETE :
            var completedItem = action.payload;
            var oldUnCompletedToDos = state.unCompletedToDos;
            var newUnCompletedToDos = oldUnCompletedToDos.filter(element => element !== completedItem);


            var  addedCompletedToDo= [...state.completedToDos, completedItem];
            return Object.assign({}, state, { unCompletedToDos: newUnCompletedToDos , completedToDos: addedCompletedToDo});
    
        case DELETE_TODO:
            var deletedItem = action.payload;
            var oldCompletedToDos = state.completedToDos;
            var deletedCompletedToDo = oldCompletedToDos.filter(element => element !== deletedItem);
             return Object.assign({}, state, { completedToDos:deletedCompletedToDo});
        
        default:
            return state;
    }
        
}

