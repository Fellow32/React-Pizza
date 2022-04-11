import axios from "axios"
const SET_PIZZAS = 'SET_PIZZAS'
const SET_LOADED = 'SET_LOADED'




const initialState = {
    items: [] ,
    isLoaded: false,
   
   
}


const setPizzasReducer  = (state = initialState , action) => {
    
       switch (action.type) {

        case SET_PIZZAS :
            return {
               ...state,
               items:action.payload,
               isLoaded:true
          
               
            }
      
         case SET_LOADED : {
             return {
                 ...state,
                 isLoaded:false
             }
         }

        }
        
        return state
    
} 



 const setLoaded = (item)=> ({
    type: SET_LOADED,
    payload:item
})

export const setPizzasAC = (items) => ({
    type : SET_PIZZAS,
    payload: items,
    
    
}) 



export const setPizzasThunk = (sortBy,category) =>(dispatch) => {
    
            dispatch(setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ' '}&_sort=${sortBy}&_order=asc`)
       .then( response => dispatch(setPizzasAC(response.data)))
            dispatch(setLoaded(true))
}


export default setPizzasReducer