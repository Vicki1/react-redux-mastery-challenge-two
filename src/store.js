import {createStore} from 'redux';
import mainReducer from './reducer.js';


var initialState = {

                        unCompletedToDos: [],
                        completedToDos: [],

                   }




export default createStore(mainReducer,initialState)