const SET_SORT_BY = 'SET_SORT_BY'
const SET_CATEGORY = 'SET_CATEGORY'

let initialState = {
    category: null,
    sortBy: 'popular'
}




const setFilterReducer = (state = initialState, action) => {
                switch(action.type) {
                    case SET_SORT_BY :
                        return {
                            ...state,
                            sortBy:action.payload
                        }
                    case SET_CATEGORY :
                        return {
                            ...state,
                            category:action.payload
                        }

                }
                return state
}



export const setFilterAC = (item) => ({
    type: SET_SORT_BY,
    payload : item
})

export const setCategoryAC = (item) => ({
    type : SET_CATEGORY,
    payload:item
})




export default setFilterReducer