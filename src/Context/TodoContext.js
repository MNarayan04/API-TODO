import { createContext,useContext } from "react";


export const TodoContest = createContext({
    todo:[
        {id:1,
        todo : "Msg",
        completed : false,
        }
    ],
    
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})


export const useTodo = ()=>{
    return useContext(TodoContest)
}


export const Todoprovider = TodoContest.Provider