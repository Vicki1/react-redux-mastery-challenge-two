

const ADD_TODO = 'ADD_TODO';
const MARK_TODO_COMPLETE = 'MARK_TODO_COMPLETE';
const DELETE_TODO = 'DELETE_TODO';

export default function actionCreator(typeOfChange,payload){
        switch(typeOfChange){
            case 'newToDo':
                    return {type : ADD_TODO,
                            payload : payload}
                            
            case 'completedToDo':
                    return  { type : MARK_TODO_COMPLETE,
                            payload : payload}
                            

            case 'deletedToDo':
                    return {type : DELETE_TODO,
                            payload : payload}
                        
            default:
                return console.log('error');
            

        }

}