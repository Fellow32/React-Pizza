import React from "react";
import { Link } from "react-router-dom";


const EmptyCartInfo = () => {
    return(
    <div class="container container--cart">
          <div class="cart cart--empty">
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
              Вероятней всего, вы не выбрали пиццу.<br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            
            <Link  style ={{marginTop : '50px'}} to='/' className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
          </div>
    )
}



export default EmptyCartInfo