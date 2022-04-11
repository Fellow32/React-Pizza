import React from "react";









const Catagories = ({activeItem,items,onClickItem}) => {


    return (
        <div>
        
        <div className="categories">
               

              <ul>
                  <li className={activeItem === null ? 'active' : ''}
                  onClick={ ()=> onClickItem(null)}>Все</li>
               { items.map((e,index) => (
                    <li 
    
                    className={activeItem === index ? 'active' : ''}
                    onClick={()=> onClickItem(index)} 
                    key={`${e}_${index}`}> 
    
                    {e} </li> ))
}
              </ul>
            </div>




        </div>
    )
}



export default Catagories