import React from 'react';

import CartItem from './CartItem';
import {useGlobalContext} from './context';

const CartContainer =()=> {
    const {id,cart, total,clearCart} =useGlobalContext();
    const cartLength = cart.length;
    console.log(cartLength);
    if(cartLength === 0){

        return(
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2>Your bag</h2>
                <div>
                    {cart.map((item) =>{
                        return <CartItem key={item.id} {...item}/>
                    })}
                </div>
            </header>
            <footer >
                <hr/>
                <div className="cart-total">
                    <h4>total <span>${total}</span></h4>
                </div>
                <button className="btn clear-btn"
                    onClick={clearCart}
                >
                    clear cart
                </button>
            </footer>
        </section>
    )
}
export default CartContainer;