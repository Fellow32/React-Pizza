import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Catagories from "../categories";
import SortPopUp from "../sortPopUp";
import PizzaBlock from "./PizzaBlock";
import { setCategoryAC, setFilterAC} from "../../redux/setFilterReducer";
import { useEffect } from "react";
import { setPizzasThunk } from "../../redux/setPizzasReducer";
import MyLoader from "../../components/myLoader"
import { useCallback } from "react";
import { addPizzaToCartAC } from "../../redux/cartReducer";




const sortItems =  [
{name:'популярности', type : 'popular'},
{name:'цене', type : 'price'}, 
{name:'алфавиту', type : 'name'}
]











const HomePage = () => {

const dispatch = useDispatch()


  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoader = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category,sortBy} = useSelector(({filter}) => filter)
 



  useEffect( () => {
      
  
       dispatch(setPizzasThunk(sortBy,category))
    
 
 }, [sortBy,category])


  const onSelectCategory = useCallback((index) => {
    dispatch(setCategoryAC(index))
    
    
  },[]);


  const onSelectSortBy = useCallback ((index) => {
    dispatch(setFilterAC(index))
  },[])

  

const addPizzaToCart = (obj) => {
       dispatch(addPizzaToCartAC(obj))
}
 
    return(
        <div className="container">
        <div className="content__top">
    

         <Catagories 
         activeItem = {category}
         onClickItem = {onSelectCategory}
         items = {['Мясные','Вегетаринаская','Гриль','Острые','Закрытые'] }
/>





      <SortPopUp
         activeSortType = {sortBy}
         onClickSortType = {onSelectSortBy}


         items = {sortItems}
       
       
       />




        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
      
{ isLoader
?items.map((item) => <PizzaBlock onClickAddPizza={addPizzaToCart} 
key = {item.id}
addedPizzasInCart = {cartItems[item.id] ? cartItems[item.id].items.length : ''}
{...item} />)
:Array(10).fill(<MyLoader/>)}
 
        </div>
      </div>
        
    )}



    



export default HomePage