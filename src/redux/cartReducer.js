const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'
const CLEAR_CART ='CLEAR_CART'
const REMOVE_PIZZA_FROM_CART = 'REMOVE+PIZZA_FROM_CART'
const PLUS_PIZZA_ITEM ='PLUS_PIZZA_ITEM'
const MINUS_PIZZA_ITEM ='MINUS_PIZZA_ITEM'

 
const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {

  const getTotalPrice = (arr) => {
    return arr.reduce((sum,e) => e.price + sum, 0 )
  }


  switch (action.type) {
     case ADD_PIZZA_TO_CART:


    

     const currentPizzaItems = !state.items[action.payload.id]
      ?[action.payload]
      :[...state.items[action.payload.id].items, action.payload]

     


     const newItems = {
              ...state.items,
                 [action.payload.id] : {
                   items : currentPizzaItems,
                   totalPrice:getTotalPrice(currentPizzaItems)
                 }
       

     }

       const totalCount = Object.keys(newItems).reduce((sum,key) => newItems[key].items.length + sum, 0)
       const totalPrice = Object.keys(newItems).reduce((sum,key) => newItems[key].totalPrice + sum,0)


       



         return {
      
            ...state,
            items:newItems,
            totalCount,
            totalPrice
         }
             



    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      }

      case CLEAR_CART :
        return {
          totalPrice:0,
          totalCount:0,
          items:{}
        }

        case REMOVE_PIZZA_FROM_CART :
              
               const newPizzaItems = {
                ...state.items
              }
               const currentPrice = newPizzaItems[action.payload].totalPrice
              const currentLength = newPizzaItems[action.payload].items.length
              delete newPizzaItems[action.payload]

        return {
                    ...state,
                   items: newPizzaItems,
                   totalPrice:  state.totalPrice - currentPrice,
                   totalCount: state.totalCount - currentLength
                 

          }


          case PLUS_PIZZA_ITEM : {
            const oldItems = state.items[action.payload].items
            const newObjItems  = [...state.items[action.payload].items, state.items[action.payload].items[0]]
            
            
            const newItems =  {
              ...state.items, 
              [action.payload]: {
                items:newObjItems,
                totalPrice:getTotalPrice(newObjItems)
              }
            }
              
            const totalCount = Object.keys(newItems).reduce((sum,key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum,key) => newItems[key].totalPrice + sum,0)
          
               return {
                 ...state,
                 items:newItems,
                 totalCount,
                 totalPrice
               }
       
    } 





          case MINUS_PIZZA_ITEM : {
          const oldItems = state.items[action.payload].items
          const newObjItems  = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
          
          
          const newItems =  {
            ...state.items, 
            [action.payload]: {
              items:newObjItems,
              totalPrice:getTotalPrice(newObjItems)
            }
          }
            
          const totalCount = Object.keys(newItems).reduce((sum,key) => newItems[key].items.length + sum, 0)
          const totalPrice = Object.keys(newItems).reduce((sum,key) => newItems[key].totalPrice + sum,0)
        
             return {
               ...state,
               items:newItems,
               totalCount,
               totalPrice
             }
     
  }
}
  return state
};





export const addPizzaToCartAC = (item) => ({
    type: ADD_PIZZA_TO_CART,
    payload:item

})





export const setTotalPriceAC = (price) => ({
  type: SET_TOTAL_PRICE,
  payload: price,
});


export const clearCartAC = () => ({
  type: CLEAR_CART
})



export const removePizzaItemFromCartAC =(id) => ({
  type :REMOVE_PIZZA_FROM_CART,
  payload: id

})



export const plusPizzaItemAC = (id) => ({
      type: PLUS_PIZZA_ITEM,
      payload: id
})
export const minusPizzaItemAC = (id) => ({
  type: MINUS_PIZZA_ITEM,
  payload: id
})





export default cartReducer
